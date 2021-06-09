import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import * as d3 from 'd3';
import lodash from 'lodash';
import moment from 'moment';
import { Observer } from 'rxjs';
import { CicloProgrammazione } from 'src/app/model/cicloProgrammazione/cicloProgrammazione.interface';
import { GiudizioSintetico } from 'src/app/model/giudizioSintetico/giudizioSintetico.interface';
import { ProgrammaOperativo } from 'src/app/model/programmaOperativo/programmaOperativo.interface';
import { Report } from 'src/app/model/report/report';
import { Tema } from 'src/app/model/tema/tema.interface';
import { MonithonApiService } from 'src/app/services/monithonApiService/monithon-api.service';
import { ReportMapService } from 'src/app/services/reportMapService/reportmap.service';
import { environment } from 'src/environments/environment';
import { AboutPage } from '../about/about.page';
import Fuse from 'fuse.js'
import { SearchResult } from 'src/app/model/searchResult.interface';

//librerie caricate come script per ottimizzare performance
declare const dc, crossfilter;
@Component({
    selector: 'app-report-finder',
    templateUrl: './report-finder.page.html',
    styleUrls: ['./report-finder.page.scss'],
})
export class ReportFinderPage implements OnInit, AfterViewInit {

    @ViewChild('budgetChart') budgetChartContainer: HTMLElement;
    @ViewChild('annoChart') annoChartContainer: HTMLElement;
    @ViewChild('resultCounter') resultCounterElem: HTMLElement;

    @ViewChild('categorieDiSpesaContainer') categorieDiSpesaContainer: ElementRef;
    @ViewChild('mapContainer') mapContainer: ElementRef;
    @ViewChild('geocoder') geocoder: ElementRef;
    @ViewChild('navigationControl') navigationControl: ElementRef;

    @ViewChild('listaProgetti', { read: ElementRef }) listaProgetti: ElementRef;
    @ViewChild('dettaglioProgetto') dettaglioProgetto: ElementRef;
    @ViewChild('dettaglioProgettoContainer') dettaglioProgettoContainer: ElementRef;
    @ViewChild('listaRisultati') listaRisultati: CdkVirtualScrollViewport;


    public espandiListaRisultati: boolean = false;
    reports: Array<Report & SearchResult> = [];
    risultatiRicerca: Array<Report & SearchResult> = [];

    //variabili charts
    budgetChart: any;
    annoChart: any;
    finanziamentoPubblicoChart: any;
    pagamentiChart: any;

    resultCounter: any;

    public giudiziSintetici: Array<GiudizioSintetico> = [];
    public cicliProgrammazione: Array<CicloProgrammazione> = [];

    public temi: Array<Tema> = [];

    reportsCrossFilter: any;
    reportSelezionato: Report = new Report();
    visualizzaDettaglio: boolean = false;

    ordinamentoPanelOpenState: boolean = false;
    redrawCharts: boolean = true;

    minRadius: number = 1;
    maxRadius: number = 20;

    counterValue: any;

    criteriOrdinamento: Array<string> = ['distanza', 'codGiudizioSintetico', 'ocFinanzTotPubNetto', 'dataInserimento'];
    criterioSelezionato: string = 'codGiudizioSintetico';
    geocoderData: any;
    comuneCorrente: any;
    raggioCorrente: number = 10;
    monithonReportUrl: any;
    loading: HTMLIonLoadingElement;
    hideSlider: boolean = true;
    isAppReady: boolean = false;
    isWizardMode: boolean = false;

    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];

    modalData: any;
    programmiOperativi: Array<ProgrammaOperativo>;
    programmiOperativiSelezionati: Array<ProgrammaOperativo> = [];
    titleSearchTerm: string = '';
    lastKeypress: number = Date.now();
    speedLim: number = 500;
    constructor(
        private monithonApiService: MonithonApiService,
        public reportMap: ReportMapService,
        private currencyPipe: CurrencyPipe,
        private translocoService: TranslocoService,
        public loadingController: LoadingController,
        private router: Router,
        public modalController: ModalController
    ) {
        this.monithonReportUrl = environment.monithonReportUrl;
        this.isWizardMode = this.router.url == '/#wizard' || this.router.url == '/wizard';

    }

    ngOnInit(): void {

        let loaderOptions = {
            message: "",
            cssClass: 'monithon-loader',
            spinner: null

        };
        this.loadingController
            .create(loaderOptions)
            .then((loading) => {
                this.loading = loading;
                loading.present();

            });
        let mapUpdateObserver: Observer<any> = {
            next: updateSubject => {
                let matchIdx = updateSubject.reports.map((r: Report) => r.uid);
                this.reports.map(r => r.matches = lodash.includes(matchIdx, r.uid)); //= updateSubject.reports;
                if (updateSubject.refreshCicliProgrammazione) {
                    this.setCicliProgrammazioneAttivi();
                }
                if (updateSubject.refreshTemi) {
                    this.setTemiAttivi();
                }

                if (this.redrawCharts) {
                    try {
                        this.renderCharts(this.getReports());
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    this.counterValue = this.reports.length;
                }


                this.loading.dismiss();
                this.loading.onDidDismiss()
                    .then(() => {
                        this.isAppReady = true;
                    })

            },
            error: err => console.error('subscribeToUpdates error: ', err),
            complete: () => console.log('subscribeToUpdates complete: ')
        };

        let projectSelectionObserver: Observer<any> = {
            next: progetto => {
                this.onDettaglioReportHandleClick(progetto);
                this.evidenziaReportInLista(progetto);
            },
            error: err => console.error('subscribeReportSelection error: ', err),
            complete: () => console.log('subscribeReportSelection complete: ')
        };

        let geocoderObserver: Observer<any> = {
            next: geocoderData => {
                this.hideDettaglioReport();
                this.updateGeocoderBindindings(geocoderData);
            },
            error: err => console.error('gecoderObserver error: ', err),
            complete: () => console.log('gecoderObserver complete')
        };

        let geocoderResultsObserver: Observer<any> = {
            next: () => {
                this.hideSlider = true;
            },
            error: err => console.error('geocoderResultsObserver error: ', err),
            complete: () => console.log('geocoderResultsObserver complete')
        };
        this.reportMap.subscribeToUpdates(mapUpdateObserver);
        this.reportMap.subscribeReportSelection(projectSelectionObserver);
        this.reportMap.subscribeToGeocoderUpdates(geocoderObserver);
        this.reportMap.subscribeToGeocoderResults(geocoderResultsObserver);

    }
    getReports() {
        return this.reports.filter(r => r.matches);
    }
    private setTemiAttivi() {
        this.temi.map((tema: Tema) => {
            tema.isActive = lodash.some(this.reports, (r: Report) => r.ocCodTemaSintetico == tema.ocCodTemaSintetico);
            tema.isSelected = lodash.some(this.getReports(), r => r.ocCodTemaSintetico == tema.ocCodTemaSintetico);
        });
    }

    private setCicliProgrammazioneAttivi() {
        this.cicliProgrammazione.map(ciclo => {
            ciclo.isActive = lodash.some(this.reports, r => r.ocCodCicloProgrammazione == ciclo.ocCodCicloProgrammazione);
            ciclo.isSelected = lodash.some(this.getReports(), r => r.ocCodCicloProgrammazione == ciclo.ocCodCicloProgrammazione);
        });
    }

    updateGeocoderBindindings(geocoderData: any): void {
        this.geocoderData = geocoderData;
        this.hideSlider = false;
        this.comuneCorrente = this.geocoderData.comune.split(',')[0];
        this.raggioCorrente = this.geocoderData.radius;
        this.criterioSelezionato = 'distanza';
        this.ordinaRisultatiPerCriterio();
    }

    ngAfterViewInit(): void {
        Promise.all([
            this.monithonApiService.getListaReport().toPromise(),
            this.monithonApiService.getTemiSintetici().toPromise(),
            this.monithonApiService.getCicliProgrammazione().toPromise(),
            this.monithonApiService.getProgrammiOperativi().toPromise(),
            this.monithonApiService.getGiudiziSintetici().toPromise(),

        ])
            .then(data => {
                let listaReport = data[0];
                let temiSintetici = data[1];
                let cicliProgrammazione = data[2];
                let programmiOperativi = data[3];
                let giudiziSintetici = data[4];
                this.reports = listaReport;
                this.temi = temiSintetici;
                this.cicliProgrammazione = cicliProgrammazione;
                this.giudiziSintetici = giudiziSintetici;
                this.programmiOperativi = programmiOperativi;

                this.reportMap.setGiudiziSintetici(this.giudiziSintetici);
                this.reportMap.setTemi(this.temi);
                this.reportMap.setProgrammiOperativi(this.programmiOperativi);


                this.reportMap.renderMap(this.mapContainer.nativeElement, listaReport, this.geocoder.nativeElement, this.navigationControl.nativeElement, !this.isWizardMode);
                let geocoderClearBtn = this.geocoder.nativeElement.querySelector('.mapboxgl-ctrl-geocoder--button');
                let geocoderInput = this.geocoder.nativeElement.querySelector('.mapboxgl-ctrl-geocoder--input');

                geocoderClearBtn
                    .addEventListener('click', () => {
                        this.comuneCorrente = '';
                        this.raggioCorrente = 10;
                        this.criterioSelezionato = 'codGiudizioSintetico';
                        this.reportMap.removeRadiusFilter();
                    });

                geocoderInput
                    .addEventListener('focus', e => {
                        this.hideSlider = true;
                    });

                geocoderInput
                    .addEventListener('blur', e => {
                        this.hideSlider = false;
                    });


                geocoderInput
                    .addEventListener('change', e => {
                        if (!e.target.value) {
                            this.comuneCorrente = '';
                            this.raggioCorrente = 10;
                            this.criterioSelezionato = 'ocCodTemaSintetico';
                            this.reportMap.removeRadiusFilter();
                        }
                    });
                geocoderInput
                    .addEventListener('keyup', e => {
                        if (!geocoderInput.value) {
                            this.criterioSelezionato = 'ocCodTemaSintetico';
                            this.reportMap.removeRadiusFilter();
                        }
                    });

            });
    }
    onDettaglioReportHandleClick(report: Report = undefined) {
        this.hideDettaglioReport();
        if (!lodash.isNil(report)) {
            this.reportMap.highlightById([report.uid]);
        }
    };

    evidenziaReportInLista(report: Report) {
        if (!lodash.isNil(report)) {
            if (!this.espandiListaRisultati) {
                this.espandiListaRisultati = true;
            }
            this.reportSelezionato = new Report(report);
            let indexRisultato = lodash.findIndex(this.risultatiRicerca, r => r.uid === report.uid);
            this.listaRisultati.scrollToIndex(indexRisultato);
        } else {
            if (!this.visualizzaDettaglio) {
                this.reportSelezionato = undefined;
            }
        }

    }
    hideDettaglioReport() {
        this.visualizzaDettaglio = false;
    }
    showDettaglioReport(report: Report) {
        if (!lodash.isNil(report)) {
            this.monithonApiService.getDettaglioReport(report.uid)
                .subscribe({
                    next: (dettaglioReport: Report) => {
                        let dettaglioBoundingRect = this.dettaglioProgetto.nativeElement.getBoundingClientRect();
                        if (dettaglioReport) {
                            this.reportSelezionato = dettaglioReport;
                            this.reportSelezionato.programmaOperativo = lodash.find(this.programmiOperativi, (p: ProgrammaOperativo) => p.ocCodProgrammaOperativo == this.reportSelezionato.ocCodProgrammaOperativo);
                            this.reportSelezionato.cicloProgrammazione = lodash.find(this.cicliProgrammazione, (c: CicloProgrammazione) => c.ocCodCicloProgrammazione == this.reportSelezionato.ocCodCicloProgrammazione);
                            this.visualizzaDettaglio = true;
                            this.reportMap.easeToReport(dettaglioBoundingRect, this.reportSelezionato, this.visualizzaDettaglio);
                        } else {
                            this.hideDettaglioReport()
                            this.reportMap.highlightById([]);
                        }
                    },
                    error: err => {
                        this.hideDettaglioReport();
                    }
                });
        } else {
            this.hideDettaglioReport();
            this.reportMap.highlightById([]);
        }

    }





    private renderCharts(data: any = []) {
        let baseArrotondamento = 10000;
        //override della funzione resizeHandlePath per personalizzare aspetto degli handle del brush
        dc.BarChart.prototype.resizeHandlePath = function () {
            const s = this.effectiveHeight();
            return `M0.5,${s}L0.5,0`;

        };
        let arrotonda = (val, multiplo) => {
            let arrotondamento = multiplo * Math.floor(val / multiplo);
            return arrotondamento;
        };
        let listaReports = data.map((r: Report) => {
            if (lodash.isString(r.ocFinanzTotPubNetto)) {
                r.ocFinanzTotPubNetto = parseInt(r.ocFinanzTotPubNetto);
            }
            r.ocFinanzTotPubNetto = arrotonda(
                r.ocFinanzTotPubNetto,
                baseArrotondamento
            );
            if (lodash.isString(r.dataInserimento)) {
                r.dataInserimento = parseInt(r.dataInserimento);
            }
            return r;
        });

        this.reportsCrossFilter = crossfilter(listaReports);
        this.renderBudgetChart(this.reportsCrossFilter, listaReports);
        this.renderAnnoChart(this.reportsCrossFilter, listaReports);
        dc.renderAll();
        this.filtraRisultati();
        this.evidenziaRisultatiSuMappa();
    }

    private renderAnnoChart(crossFilterData: any, listaReports: any) {
        this.annoChart = new dc.BarChart((this.annoChartContainer as any).nativeElement);
        let chartHeight = 72;
        let chartWidth = 432;
        let annoDim = crossFilterData.dimension((d) => {
            try {

                let anno = moment(`${parseInt(d.dataInserimento)}`, "YYYYMMDD").year();
                return anno < 2014 ? 2013 : anno;
            } catch (error) {
                console.error(error);
            }
        });
        let reportPerAnno = annoDim.group().reduceCount();
        let annoRange = d3.extent(listaReports, (d: any) => moment(`${parseInt(d.dataInserimento)}`, "YYYYMMDD").year()
        );
        annoRange[0] = 2013;
        annoRange[1] += 1;
        let maxCount = reportPerAnno
            .all()
            .map(v => v.value)
            .reduce((a, v) => Math.max(a, v), -Infinity);

        maxCount += (maxCount / 2);

        this.annoChart.height(chartHeight);
        this.annoChart.width(chartWidth);
        this.annoChart.useViewBoxResizing(true)

        let chartMargins = { top: 2, right: 10, bottom: 20, left: 0 };
        let xScale = d3.scaleLinear().domain(annoRange).range([chartMargins.left, chartWidth]);
        let yScale = d3.scaleLinear().domain([0, maxCount]);
        this.annoChart
            .dimension(annoDim)
            .group(reportPerAnno)
            .brushOn(true)
            .x(xScale)
            .y(yScale)
            .xUnits(dc.units.integers)
            .elasticX(false)
            .elasticY(false)
            .centerBar(false)
            .margins(chartMargins)
            .transitionDuration(250);

        this.annoChart
            .xAxis()
            .tickSizeOuter(0)
            .tickFormat(anno => anno <= 2013 ? `...${parseInt(anno)}` : parseInt(anno));


        this.annoChart.on("filtered", () => {

            setTimeout(() => {
                let matchIdx = annoDim.top(Infinity).map(r => r.uid) || [];
                this.reports.map(r => r.matches = matchIdx.indexOf(r.uid) >= 0);
                this.filtraRisultati();
                this.evidenziaRisultatiSuMappa();
            }, 0);
        });

    }

    private renderBudgetChart(crossFilterData: any, listaReports: any) {
        this.budgetChart = new dc.BarChart((this.budgetChartContainer as any).nativeElement);
        let chartHeight = 72;
        let chartWidth = 432;
        let budgetBin = d3.bin();

        //creo bin usando arrotondamento del budget
        budgetBin.value((d: any) => {
            try {

                return parseInt(d.ocFinanzTotPubNetto);
            } catch (error) {
                console.log('budgetBin.value: ', error);
                return 0;
            }
        });
        //inserire soglie per non avere troppi bin: parametrizzare qui quantili?
        let dieciQuantili = d3.range(0, 1.1, 0.125); //.map((n) => +d3.format(".1f")(n));
        let binThresholds = dieciQuantili.map((quant) => d3.quantile(listaReports, quant, (p: any) => parseInt(p.ocFinanzTotPubNetto))
        );
        binThresholds = [...new Set(binThresholds)];
        let numQuantili = binThresholds.length;

        budgetBin.thresholds(binThresholds);
        let progettiBinned = budgetBin(listaReports);

        let budgetDim = crossFilterData.dimension((d) => {
            let binIndex = progettiBinned.findIndex((bin) => bin.find((p: any) => p.uid == d.uid)
            );
            d.binIndex = binIndex;
            return binIndex;
        }),
            budgetGroup = budgetDim.group();


        let maxCount = budgetGroup
            .all()
            .map(v => v.value)
            .reduce((a, v) => Math.max(a, v), -Infinity);

        maxCount += (maxCount / 2);

        let xFormatter = (v: any) => {
            let label = '';
            if (!lodash.isNil(binThresholds[v]) && !lodash.isNaN(binThresholds[v])) {
                label = d3.format(".2s")(binThresholds[v]);
            }
            return label;
        };
        let chartMargins = { top: 2, right: 10, bottom: 20, left: 0 };
        this.budgetChart
            .dimension(budgetDim)
            .group(budgetGroup)
            .brushOn(true)
            .x(d3.scaleLinear().domain([0, numQuantili]).range([chartMargins.left, chartWidth]))
            .y(d3.scaleLinear().domain([0, maxCount]))
            .centerBar(false)
            .elasticX(false)
            .elasticY(false)
            .margins(chartMargins)
            .transitionDuration(250);


        this.budgetChart.xAxis()
            .tickSizeOuter(0)
            .tickFormat(xFormatter);


        this.budgetChart.height(chartHeight);
        this.budgetChart.width(chartWidth);
        this.budgetChart.useViewBoxResizing(true)


        this.budgetChart.on("filtered", () => {
            setTimeout(() => {
                // console.log('this.budgetChart.on("filtered", () => {');
                //propagare evento per aggiornare la lista dei progetti
                let matchIdx = budgetDim.top(Infinity).map(r => r.uid) || [];
                this.reports.map(r => r.matches = matchIdx.indexOf(r.uid) >= 0);
                this.filtraRisultati();
                this.evidenziaRisultatiSuMappa();
            }, 0);
        });

        this.budgetChart.on('pretransition', function (chart) {
            let brushBegin = [], brushEnd = []; // 1
            if (chart.filter()) {
                // non mostro label quando il brush è al 100%
                brushBegin = chart.filter()[0] == 0 ? [] : [chart.filter()[0]]; // 2
                brushEnd = chart.filter()[1] == binThresholds.length - 1 ? [] : [chart.filter()[1]];

                let beginLabel = chart.select('g.brush') // 3
                    .selectAll('text.brush-begin')
                    .data(brushBegin); // 4
                beginLabel.exit().remove(); // 5
                beginLabel = beginLabel.enter()
                    .append('text') // 6
                    .attr('class', 'brush-begin') // 7
                    .attr('text-anchor', 'end')
                    .attr('dominant-baseline', 'text-top')
                    .attr('fill', 'black')
                    .attr('y', chart.margins().top)
                    .attr('dy', 4)
                    .attr('dx', -1)
                    .merge(beginLabel); // 8

                beginLabel
                    .attr('x', d => chart.x()(d))
                    .text(d => xFormatter(parseInt(d) + 1)); // 9


                let endLabel = chart.select('g.brush')
                    .selectAll('text.brush-end')
                    .data(brushEnd);
                endLabel.exit().remove();
                endLabel = endLabel.enter()
                    .append('text')
                    .attr('class', 'brush-end')
                    .attr('text-anchor', 'begin')
                    .attr('dominant-baseline', 'text-top')
                    .attr('fill', 'black')
                    .attr('y', chart.margins().top)
                    .attr('dy', 4)
                    .attr('dx', 2)
                    .merge(endLabel);
                endLabel
                    .attr('x', d => chart.x()(d))
                    .text(d => xFormatter(parseInt(d) + 1)); // 9
            } else {
                //reset al default
                chart.select('.brush-begin').remove();
                chart.select('.brush-end').remove();
            }

        });

        return crossFilterData;
    }

    public filtraPerGiudizio(giudizioSintetico: GiudizioSintetico): void {
        giudizioSintetico.isSelected = !giudizioSintetico.isSelected;

        if (lodash.every(this.giudiziSintetici, g => !g.isSelected)) {
            this.giudiziSintetici.map(g => g.isSelected = true);
        }

        this.redrawCharts = true;
        this.reportMap.filtraPerGiudizio();
    }
    public filterByTemaSintetico(tema: Tema) {
        tema.isSelected = !tema.isSelected;

        //reset chips
        if (lodash.every(this.temi, tema => !tema.isSelected)) {
            this.temi.map(tema => tema.isSelected = tema.isActive);
        }
        this.redrawCharts = true;
        this.reportMap.filtraPerTema();
    }

    onProgrammOperativoChange(programma: ProgrammaOperativo) {
        this.programmiOperativi.map((p: ProgrammaOperativo) => {
            p.isSelected = !lodash.isNil(programma) && (p.ocCodProgrammaOperativo == programma.ocCodProgrammaOperativo);
        });
        this.redrawCharts = true;
        this.reportMap.filtraPerProgrammaOperativo();
    }

    //Filtri di secondo livello:
    public filterByCiclo(stato) {
        stato.isSelected = !stato.isSelected;
        if (lodash.every(this.cicliProgrammazione, s => !s.isSelected)) {
            this.cicliProgrammazione.map(s => s.isSelected = s.isActive);
        }
        this.filtraRisultati();
        this.evidenziaRisultatiSuMappa();

    }

    searchReportByTitle(reset: boolean = false) {
        if (reset || !this.titleSearchTerm) {
            this.risultatiRicerca.map((r, i) => r.matches = true);
        }
        else {
            const options = {
                threshold: 0.1,
                keys: ['titolo']
            }
            const fuse = new Fuse(this.risultatiRicerca, options)
            let matchingRes = fuse.search(this.titleSearchTerm).map(r => r.refIndex);
            this.risultatiRicerca.map((r, i) => r.matches = matchingRes.indexOf(i) >= 0);
        }
        this.evidenziaRisultatiSuMappa();

    }
    getRisultati() {
        return this.risultatiRicerca.filter(r => r.matches);
    }
    evidenziaRisultatiSuMappa() {
        let idRisultati = this.getRisultati().map(p => p.uid);
        idRisultati = idRisultati.length == 0 ? null : idRisultati; // evit
        this.reportMap.selectById(idRisultati);
    }

    filtraRisultati() {
        let cicliProgrammazioneSelezionati = this.cicliProgrammazione.filter(ciclo => ciclo.isSelected).map(flag => flag.ocCodCicloProgrammazione);

        this.risultatiRicerca = this.getReports().filter((report: Report) => {
            let matchesCicloProgrammazione = ((cicliProgrammazioneSelezionati.length == 0) || lodash.includes(cicliProgrammazioneSelezionati, report.ocCodCicloProgrammazione))
            return matchesCicloProgrammazione;
        });
        this.risultatiRicerca.map(r => r.matches = true)
        this.searchReportByTitle();
        this.ordinaRisultatiPerCriterio();
    }




    /**
     * onProgettoClick
     */
    public onReportClick(report: Report) {
        this.showDettaglioReport(report);

    }




    public iniziaMonitoraggioClicked(report: Report) {
        window.open("https://it.monithon.eu/report/create?pfurl=" + encodeURI(report.link), "_blank");
    }

    public onCriterioSelezionatoClick(criterio: string) {
        this.criterioSelezionato = criterio;
        this.ordinaRisultatiPerCriterio();
    }
    ordinaRisultatiPerCriterio() {
        this.risultatiRicerca = lodash.sortBy(this.risultatiRicerca, (r: Report) => lodash.get(r, this.criterioSelezionato));
    }


    onRadiusChange(event: any) {
        this.raggioCorrente = event.value;
        this.hideDettaglioReport();
        this.reportMap.updateRadius(this.raggioCorrente)
    }
    formatLabelSliderRaggio(val) {
        return `${val} km`;
    }

    getCategorieTail() {
        return lodash.tail(this.reportSelezionato.codGiudizioSintetico);
    }
    getCategorieHead() {
        return lodash.first(this.reportSelezionato.codGiudizioSintetico);
    }

    //metodi per modale
    async openIonModal() {
        const modal = await this.modalController.create({
            component: AboutPage,
            cssClass: 'monithon-about-modal'
        });

        modal.onDidDismiss().then((modelData) => {
            if (modelData !== null) {
                this.modalData = modelData.data;
            }
        });
        return await modal.present();
    }




    searchProgrammaOperativo(term: string, programma: ProgrammaOperativo) {
        term = term.toLowerCase();
        return programma.isActive && (programma.descProgrammaOperativo.toLowerCase().indexOf(term) > -1 || programma.ocCodProgrammaOperativo.toLowerCase() === term);

    }

    resetTitleSearch() {
        this.titleSearchTerm = '';
        this.searchReportByTitle(true);
    }
}

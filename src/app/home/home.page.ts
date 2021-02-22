import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import moment from 'moment';
import { Observable, Observer } from 'rxjs';
import { Progetto } from '../model/progetto/progetto';
import { MonithonApiService } from '../services/monithonApiService/monithon-api.service';
import { MonithonMockedService } from '../services/monithonMockService/monithon-mocked.service';

import { MonithonMapService } from '../services/monithonMapService/monithonmap.service';
import lodash from 'lodash';

import * as d3 from 'd3';
//librerie caricate come script per ottimizzare performance
declare const dc, crossfilter;
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

    @ViewChild('budgetChart') budgetChartContainer: HTMLElement;
    @ViewChild('annoChart') annoChartContainer: HTMLElement;
    @ViewChild('resultCounter') resultCounterElem: HTMLElement;

    @ViewChild('categorieDiSpesaContainer') categorieDiSpesaContainer: ElementRef;
    @ViewChild('mapContainer') mapContainer: ElementRef;
    @ViewChild('geocoder') geocoder: ElementRef;

    @ViewChild('dettagliProgetto') dettagliProgetto: ElementRef;
    @ViewChild('listaProgetti', { read: ElementRef }) listaProgetti: ElementRef;


    progetti: Array<Progetto> = [];
    risultatiRicerca: Array<Progetto> = [];

    //variabili charts
    budgetChart: any;
    annoChart: any;
    resultCounter: any;

    temi: Array<any> = [];
    categorie: Array<any> = [];
    statiAvanzamento: Array<any> = [{
        isSelected: false,
        ocCodStatoProgetto: 4
    },
    {
        isSelected: false,
        ocCodStatoProgetto: 2
    },
    {
        isSelected: false,
        ocCodStatoProgetto: 1
    }, {
        isSelected: false,
        ocCodStatoProgetto: 3
    }];

    reportFlags: Array<any> = [
        {
            isSelected: false,
            hasReport: true
        }, {
            isSelected: false,
            hasReport: false
        }]

    progettiCrossFilter: any;
    progettoSelezionato: any = {};
    visualizzaDettaglio: boolean = false;

    panelOpenState: boolean = false;
    redrawCharts: boolean = true;
    counterValue: any;

    constructor(
        private monitonMockedService: MonithonMockedService,
        private monithonApiService: MonithonApiService,
        private monithonMap: MonithonMapService) { }

    ngOnInit(): void {
        // this.monitonMockedService.mirageJsServer();
        let mapUpdateObserver: Observer<any> = {
            next: updateSubject => {

                this.temi = updateSubject.temi; // <- nessun problema di performance
                this.categorie = updateSubject.categorie.filter(c => c.isVisible);
                this.progetti = updateSubject.progetti; //lodash.take(updateSubject.progetti, 50);
                this.risultatiRicerca = this.progetti;
                if (this.redrawCharts) {
                    this.renderCharts(this.progetti);
                } else {
                    this.counterValue = this.progetti.length
                }
            },
            error: err => console.error('subscribeToUpdates error: ', err),
            complete: () => console.log('subscribeToUpdates complete: ')
        };

        let projectSelectionObserver: Observer<any> = {
            next: progetto => this.showDettaglioProgetto(progetto),
            error: err => console.error('subscribeProjectSelection error: ', err),
            complete: () => console.log('subscribeProjectSelection complete: ')
        };
        this.monithonMap.subscribeToUpdates(mapUpdateObserver);
        this.monithonMap.subscribeProjectSelection(projectSelectionObserver);
    }

    getCategorie() {
        return this.monithonApiService.getCategorie();
    }
    getTemi() {
        return this.monithonApiService.getTemi();
    }

    ngAfterViewInit(): void {
        Promise.all([this.getProgetti().toPromise(), this.getTemi().toPromise(), this.getCategorie().toPromise()])
            .then(data => {

                this.monithonMap.setCategorie(data[2]);
                this.monithonMap.setTemi(data[1]);
                this.monithonMap.renderMap(this.mapContainer.nativeElement, data[0], this.geocoder.nativeElement);
            });
    }
    showDettaglioProgetto(progetto: any) {
        if (!lodash.isNil(progetto)) {
            this.monithonApiService.getDettaglio(progetto.codLocaleProgetto)
                .subscribe({
                    next: progetto => {
                        if (progetto && progetto.length) {
                            this.progettoSelezionato = progetto[0];
                            this.visualizzaDettaglio = true;
                        } else {
                            this.visualizzaDettaglio = false;

                        }
                    },
                    error: err => {
                        this.visualizzaDettaglio = false;
                    }
                });
        } else {
            this.visualizzaDettaglio = false;
        }

    }



    private renderCharts(data: any) {
        let baseArrotondamento = 10000;
        let arrotonda = (val, multiplo) => {
            let arrotondamento = multiplo * Math.floor(val / multiplo);
            return arrotondamento;
        };
        let listaProgetti = data.map((d: Progetto) => {
            if (lodash.isString(d.ocFinanzTotPubNetto)) {
                d.ocFinanzTotPubNetto = parseInt(d.ocFinanzTotPubNetto);
            }
            d.ocFinanzTotPubNetto = arrotonda(
                d.ocFinanzTotPubNetto,
                baseArrotondamento
            );
            if (lodash.isString(d.ocDataInizioProgetto)) {
                d.ocDataInizioProgetto = parseInt(d.ocDataInizioProgetto);
            }
            return d;
        });

        this.progettiCrossFilter = crossfilter(listaProgetti);
        this.renderBudgetChart(this.progettiCrossFilter, listaProgetti);
        this.renderAnnoChart(this.progettiCrossFilter, listaProgetti);
        dc.renderAll();
        d3.select((this.budgetChartContainer as any).nativeElement)
            .selectAll('g.axis.y').remove();
        d3.select((this.annoChartContainer as any).nativeElement)
            .selectAll('g.axis.y').remove();

    }

    private renderAnnoChart(crossFilterData: any, listaProgetti: any) {
        this.annoChart = new dc.BarChart((this.annoChartContainer as any).nativeElement);
        let chartHeight = (this.annoChartContainer as any).nativeElement.getBoundingClientRect().height < 50 ? 50 : (this.annoChartContainer as any).nativeElement.getBoundingClientRect().height;

        let annoDim = crossFilterData.dimension((d) => moment(`${parseInt(d.ocDataInizioProgetto)}`, "YYYYMMDD").year()
        ),
            progettiPerAnno = annoDim.group().reduceCount(),
            all = crossFilterData.groupAll();

        let annoRange = d3.extent(listaProgetti, (d: any) => moment(`${parseInt(d.ocDataInizioProgetto)}`, "YYYYMMDD").year()
        );
        annoRange[1] += 2;
        this.annoChart
            .dimension(annoDim)
            .group(progettiPerAnno)
            .brushOn(true)
            .controlsUseVisibility(true)
            .x(d3.scaleLinear().domain(annoRange))
            .xUnits(dc.units.integers)
            .elasticX(true)
            .elasticY(true)
            .margins({ top: 0, right: 0, bottom: 20, left: 40 })
;
        this.annoChart
            .xAxis()
            .tickFormat((anno) => `${parseInt(anno)}`);

        this.annoChart.height(() => chartHeight + 50);

        this.annoChart.on("filtered", () => {
            this.progetti = annoDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();

        });

        this.annoChart.on("renderlet", () => {
            this.progetti = annoDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();

        });
    }

    private renderBudgetChart(crossFilterData: any, listaProgetti: any) {
        this.budgetChart = new dc.BarChart((this.budgetChartContainer as any).nativeElement);

        let budgetBin = d3.bin();
        let chartHeight = (this.budgetChartContainer as any).nativeElement.getBoundingClientRect().height < 50 ? 50 : (this.budgetChartContainer as any).nativeElement.getBoundingClientRect().height;
        //creo bin usando arrotondamento del budget
        budgetBin.value((d: any) => +d.ocFinanzTotPubNetto);
        //inserire soglie per non avere troppi bin: parametrizzare qui quantili?
        let dieciQuantili = d3.range(0, 1.1, 0.125); //.map((n) => +d3.format(".1f")(n));
        let binThresholds = dieciQuantili.map((quant) => d3.quantile(listaProgetti, quant, (p: any) => +p.ocFinanzTotPubNetto)
        );
        binThresholds = [...new Set(binThresholds)];
        let numQuantili = binThresholds.length;

        budgetBin.thresholds(binThresholds);
        let progettiBinned = budgetBin(listaProgetti);

        let budgetDim = crossFilterData.dimension((d) => {
            let binIndex = progettiBinned.findIndex((bin) => bin.find((p: any) => p.codLocaleProgetto == d.codLocaleProgetto)
            );
            d.binIndex = binIndex;
            return binIndex;
        }),
            budgetGroup = budgetDim.group();


        this.budgetChart
            .dimension(budgetDim)
            .group(budgetGroup)
            .brushOn(true)
            .x(d3.scaleLinear().domain([0, numQuantili]))
            .elasticY(true)
            .elasticX(true)
            .margins({ top: 0, right: 0, bottom: 20, left: 40 })
            .xAxis()
            .tickFormat((v: any) => `${binThresholds[v] / 1000} K`)

        this.budgetChart.yAxis().tickFormat(() => undefined)

        this.budgetChart.height(() => chartHeight + 50);


        // this.budgetChart
        //     .width('120')
        //controllare dimensioni
        // this.budgetChart
        // .width((element) => {
        //     var width = element && element.getBoundingClientRect && element.getBoundingClientRect().width;
        //     return (width && width > this.budgetChart.minWidth()) ? width : this.budgetChart.minWidth();
        // });
        // this.budgetChart
        //     .height(function (element) {
        //         var height = element && element.getBoundingClientRect && element.getBoundingClientRect().height;
        //         height *= 0.5;
        //         return (height && height > this.budgetChart.minHeight()) ? height : this.budgetChart.minHeight();
        //     });
        this.budgetChart.on("renderlet", () => {
            //propagare evento per aggiornare la lista dei progetti
            this.progetti = budgetDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();

        });

        this.budgetChart.on("filtered", () => {
            //propagare evento per aggiornare la lista dei progetti
            this.progetti = budgetDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();


        });
        return crossFilterData;
    }

    private getProgetti(): Observable<any> {
        return this.monithonApiService.getProgetti();
    }

    //Filtri di primo livello:
    public filterByTema(tema: any): void {
        tema.isSelected = !tema.isSelected;
        this.redrawCharts = true;
        this.monithonMap.filtraPerTema();
    }

    public filterByCategoria(categoria: any): void {
        categoria.isSelected = !categoria.isSelected;
        this.redrawCharts = true;
        this.monithonMap.filtraPerCategoria();
    }

    //Filtri di secondo livello:
    public filterByStato(stato) {
        stato.isSelected = !stato.isSelected;
        this.filtraRisultati();
        this.evidenziaRisultatiSuMappa();

    }
    public filterByReportFlag(reportFlag) {
        reportFlag.isSelected = !reportFlag.isSelected;
        this.filtraRisultati();
        this.evidenziaRisultatiSuMappa();

    }

    evidenziaRisultatiSuMappa() {
        let idRisultati = this.risultatiRicerca.map(p => p.codLocaleProgetto);
        this.monithonMap.highlightById(idRisultati);
    }

    filtraRisultati() {
        let statiAvanzamentoSelezionati = this.statiAvanzamento.filter(stato => stato.isSelected).map(flag => flag.ocCodStatoProgetto);
        let reportFlagSelezionate = this.reportFlags.filter(flag => flag.isSelected).map(flag => flag.hasReport);

        this.risultatiRicerca = this.progetti.filter(progetto => {
            let matchesStato = ((reportFlagSelezionate.length == 0) || lodash.includes(reportFlagSelezionate, progetto.hasReports));
            let matchesReportFlags = ((statiAvanzamentoSelezionati.length == 0) || lodash.includes(statiAvanzamentoSelezionati, progetto.ocCodStatoProgetto))

            return matchesStato && matchesReportFlags;
        });

    }




    /**
     * onProgettoClick
     */
    public onProgettoClick(evt, progetto) {
        console.dir(evt);
        console.dir(progetto);

        console.log('onProgettoClick');

    }



    public reusultOpenHandler() {
        this.panelOpenState = !this.panelOpenState;
    }

}



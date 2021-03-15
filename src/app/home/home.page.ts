import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import moment from 'moment';
import { Observable, Observer } from 'rxjs';
import { Progetto } from '../model/progetto/progetto';
import { MonithonApiService } from '../services/monithonApiService/monithon-api.service';

import { MonithonMapService } from '../services/monithonMapService/monithonmap.service';
import lodash from 'lodash';

import * as d3 from 'd3';
import { CurrencyPipe } from '@angular/common';
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

    @ViewChild('listaProgetti', { read: ElementRef }) listaProgetti: ElementRef;
    @ViewChild('dettaglioProgetto') dettaglioProgetto: ElementRef;
    @ViewChild('finanziamentoPubblicoChartContainer') finanziamentoPubblicoChartContainer: HTMLElement;
    @ViewChild('pagamentiChartContainer') pagamentiChartContainer: HTMLElement;


    progetti: Array<Progetto> = [];
    risultatiRicerca: Array<Progetto> = [];

    //variabili charts
    budgetChart: any;
    annoChart: any;
    finanziamentoPubblicoChart: any;
    pagamentiChart: any;

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

    criteriOrdinamento: Array<string> = ['distanza', 'ocCodCategoriaSpesa', 'ocFinanzTotPubNetto', 'ocDataInizioProgetto']
    criterioSelezionato: string = 'distanza';
    constructor(
        // private monitonMockedService: MonithonMockedService,
        private monithonApiService: MonithonApiService,
        private monithonMap: MonithonMapService,
        private currencyPipe: CurrencyPipe) { }

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
                let geocoderClearBtn = this.geocoder.nativeElement.querySelector('.mapboxgl-ctrl-geocoder--button');
                let geocoderInput = this.geocoder.nativeElement.querySelector('.mapboxgl-ctrl-geocoder--input');

                geocoderClearBtn
                    .addEventListener('click', () => {
                        this.monithonMap.removeRadiusFilter();
                    });


                geocoderInput
                    .addEventListener('change', e => {
                        if (!e.target.value) {
                            this.monithonMap.removeRadiusFilter();
                        }
                    });
                geocoderInput
                    .addEventListener('keyup', e => {
                        if (!geocoderInput.value) {
                            this.monithonMap.removeRadiusFilter();
                        }
                    });
            });
    }
    showDettaglioProgetto(progetto: any) {
        if (!lodash.isNil(progetto)) {
            this.monithonApiService.getDettaglio(progetto.uid)
                .subscribe({
                    next: progetto => {
                        if (progetto && progetto.length) {
                            this.progettoSelezionato = progetto[0];
                            this.visualizzaDettaglio = true;
                            debugger;
                            let dettaglioBoundingRect = this.dettaglioProgetto.nativeElement.getBoundingClientRect();
                            console.log(dettaglioBoundingRect);
                            this.monithonMap.easeToProgetto(dettaglioBoundingRect, this.progettoSelezionato);
                            this.renderDettaglioProgettoCharts();
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

    private renderDettaglioProgettoCharts() {
        this.renderFinanziamentoChart();
        this.renderPagamentiChart();
    }

    renderFinanziamentoChart() {
        // render chart finanziamento/spesa
        d3.select('.monithon-finanziamenti-chart').remove();
        let chartContainer = (this.finanziamentoPubblicoChartContainer as any).nativeElement;
        let chartW = chartContainer.getBoundingClientRect().width;
        this.finanziamentoPubblicoChart = d3.select(chartContainer).append('svg');
        this.finanziamentoPubblicoChart
            .attr('width', null)
            .attr('height', null)
            .attr('viewBox', `0 0 ${chartW} 56`)
            .attr('class', 'monithon-finanziamenti-chart');

        let chartG = this.finanziamentoPubblicoChart.append('g');

        chartG.append('rect')
            .attr('width', chartW)
            .attr('height', '56')
            .attr('class', 'foreground')
            .attr('fill', 'grey');
        chartG.selectAll('text.finanziamento').remove();

        chartG.selectAll('text.finanziamento')
            .data([this.progettoSelezionato])
            .enter()
            .append('text')
            .attr('class', 'finanziamento')
            .attr('x', chartW)
            .attr('y', '56')
            .attr('text-anchor', 'end')
            .attr('dx', '-3')
            .attr('dy', '-3')
            .text(d => this.currencyPipe.transform(d.ocFinanzTotPubNetto, 'EUR'))
            .attr('data-oc-cod-tema-sintetico', d => d.ocCodTemaSintetico)
    }

    renderPagamentiChart() {
        let scale = d3.scaleLinear([0, 300]);
        scale.domain([0, this.progettoSelezionato.ocFinanzTotPubNetto]);
        d3.select('.monithon-pagamenti-chart').remove();
        let chartContainer = (this.pagamentiChartContainer as any).nativeElement;
        this.pagamentiChart = d3.select(chartContainer).append('svg');
        let chartW = chartContainer.getBoundingClientRect().width
        this.pagamentiChart
            .attr('width', null)
            .attr('height', null)
            .attr('viewBox', `0 0 ${chartW} 56`)
            .attr('class', 'monithon-pagamenti-chart');

        let chartG = this.pagamentiChart.append('g');
        chartG.append('rect')
            .data([this.progettoSelezionato])
            .attr('width', `${chartW}`)
            .attr('height', '56')
            .attr('class', 'background')

            .attr('fill', 'grey');
        chartG.append('rect')
            .data([this.progettoSelezionato])
            .attr('width', d => scale(d.totPagamenti))
            .attr('height', '56')
            .attr('class', 'foreground');
        chartG.selectAll('text.pagamenti')
            .data([this.progettoSelezionato])
            .enter()
            .append('text')
            .attr('class', 'pagamenti')
            .attr('data-oc-cod-tema-sintetico', d => d.ocCodTemaSintetico)
            .attr('x', d => scale(d.totPagamenti))
            .attr('y', '56')
            .attr('text-anchor', d => {
                let position = scale(d.totPagamenti);
                return position < 80 ? 'start' : 'end';
            })
            .attr('dy', '-3')
            .attr('dx', d => {
                let position = scale(d.totPagamenti);
                return position < 80 ? '0' : '-3';
            })
            .text(d => {
                let pagamento = lodash.isNil(d.totPagamenti) ? 0 : d.totPagamenti;
                return this.currencyPipe.transform(pagamento, 'EUR');
            });
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
        // let chartHeight = (this.annoChartContainer as any).nativeElement.getBoundingClientRect().height < 50 ? 50 : (this.annoChartContainer as any).nativeElement.getBoundingClientRect().height;
        let chartHeight = 72 || (this.annoChartContainer as any).nativeElement.getBoundingClientRect().height;

        let annoDim = crossFilterData.dimension((d) => {
            let anno = moment(`${parseInt(d.ocDataInizioProgetto)}`, "YYYYMMDD").year();
            return anno < 2014 ? 2013 : anno;
        }
        ),
            progettiPerAnno = annoDim.group().reduceCount();

        let annoRange = d3.extent(listaProgetti, (d: any) => moment(`${parseInt(d.ocDataInizioProgetto)}`, "YYYYMMDD").year()
        );
        annoRange[1] += 2;
        this.annoChart
            .dimension(annoDim)
            .group(progettiPerAnno)
            .brushOn(true)
            .x(d3.scaleLinear().domain(annoRange))
            .xUnits(dc.units.integers)
            .elasticX(true)
            .elasticY(true)
            .margins({ top: 10, right: 20, bottom: 20, left: 20 });
        this.annoChart
            .xAxis()
            .tickFormat(anno => anno <= 2013 ? `...${parseInt(anno)}` : parseInt(anno));

        this.annoChart.height(chartHeight);

        this.annoChart.on('pretransition', function (chart) {
            chart.selectAll('g.axis.y').remove();
            let brushBegin = [], brushEnd = []; // 1
            if (chart.filter()) {
                brushBegin = [chart.filter()[0]]; // 2
                brushEnd = [chart.filter()[1]];
            }
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
                .merge(beginLabel); // 8
            beginLabel
                .attr('x', d => chart.x()(d))
                .text(d => parseInt(d + 1)); // 9


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
                .merge(endLabel);
            endLabel
                .attr('x', d => chart.x()(d))
                .text(d => parseInt(d));
        })
        this.annoChart.on("filtered", (chart) => {
            this.progetti = annoDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();
            chart.selectAll('g.axis.y').remove();

        });

        this.annoChart.on("renderlet", (chart) => {
            this.progetti = annoDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();
            chart.selectAll('g.axis.y').remove();

        });
    }

    private renderBudgetChart(crossFilterData: any, listaProgetti: any) {
        this.budgetChart = new dc.BarChart((this.budgetChartContainer as any).nativeElement);

        let budgetBin = d3.bin();
        // let chartHeight = (this.budgetChartContainer as any).nativeElement.getBoundingClientRect().height < 50 ? 50 : (this.budgetChartContainer as any).nativeElement.getBoundingClientRect().height;
        let chartHeight = 72 || (this.budgetChartContainer as any).nativeElement.getBoundingClientRect().height;

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
            let binIndex = progettiBinned.findIndex((bin) => bin.find((p: any) => p.uid == d.uid)
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
            .margins({ top: 10, right: 20, bottom: 20, left: 20 })
            .xAxis()
            .tickFormat((v: any) => `${binThresholds[v] / 1000} K`)

        this.budgetChart.yAxis().tickFormat(() => undefined)

        this.budgetChart.height(chartHeight);


        this.budgetChart.on("renderlet", (chart) => {
            //propagare evento per aggiornare la lista dei progetti
            this.progetti = budgetDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();
            chart.selectAll('g.axis.y').remove();

        });

        this.budgetChart.on("filtered", (chart) => {
            //propagare evento per aggiornare la lista dei progetti
            this.progetti = budgetDim.top(Infinity);
            this.filtraRisultati();
            this.evidenziaRisultatiSuMappa();
            chart.selectAll('g.axis.y').remove();


        });

        this.budgetChart.on('pretransition', function (chart) {
            chart.selectAll('g.axis.y').remove();
            let brushBegin = [], brushEnd = []; // 1
            if (chart.filter()) {
                brushBegin = [chart.filter()[0]]; // 2
                brushEnd = [chart.filter()[1]];
            }
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
                .merge(beginLabel); // 8

            beginLabel
                .attr('x', d => chart.x()(d))
                .text(d => binThresholds[parseInt(d) + 1]); // 9


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
                .merge(endLabel);
            endLabel
                .attr('x', d => chart.x()(d))
                .text(d => binThresholds[parseInt(d)]); // 9
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
        let idRisultati = this.risultatiRicerca.map(p => p.uid);
        this.monithonMap.highlightById(idRisultati);
    }

    filtraRisultati() {
        let statiAvanzamentoSelezionati = this.statiAvanzamento.filter(stato => stato.isSelected).map(flag => flag.ocCodStatoProgetto);
        let reportFlagSelezionate = this.reportFlags.filter(flag => flag.isSelected).map(flag => flag.hasReport);

        this.risultatiRicerca = this.progetti.filter(progetto => {
            let matchesStato = ((reportFlagSelezionate.length == 0) || lodash.includes(reportFlagSelezionate, progetto.hasReport));
            let matchesReportFlags = ((statiAvanzamentoSelezionati.length == 0) || lodash.includes(statiAvanzamentoSelezionati, progetto.ocCodStatoProgetto))

            return matchesStato && matchesReportFlags;
        });

    }




    /**
     * onProgettoClick
     */
    public onProgettoClick(progetto: Progetto) {
        this.monithonMap.highlightById([progetto.uid]);
        this.showDettaglioProgetto(progetto);

    }



    public reusultOpenHandler() {
        this.panelOpenState = !this.panelOpenState;
    }

    public iniziaMonitoraggioClicked(progetto: Progetto) {
        console.log(progetto);
        window.open("https://it.monithon.eu/user/login?r=1", "_blank");
    }

    public onCriterioSelezionatoClick() {
        console.log('onCriterioSelezionatoClick');
    }

}



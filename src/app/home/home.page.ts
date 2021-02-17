import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import moment from 'moment';
import { Observable, Observer } from 'rxjs';
import { Progetto } from '../model/progetto/progetto';
import { MonithonApiService } from '../services/monithonApiService/monithon-api.service';
import { MonithonMockedService } from '../services/monithonMockService/monithon-mocked.service';

import { MonithonMapService } from '../services/monithonMapService/monithonmap.service';
import lodash from 'lodash';

import * as d3 from 'd3';
import { IonVirtualScroll } from '@ionic/angular';
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
    @ViewChild('dettagliProgetto') dettagliProgetto: ElementRef;
    @ViewChild('listaProgetti', { read: ElementRef }) listaProgetti: ElementRef;
    @ViewChild('infiniteScroll', { read: ElementRef }) infiniteScroll: ElementRef;
    @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;


    progetti: Array<Progetto> = [];

    //variabili charts
    budgetChart: any;
    annoChart: any;
    resultCounter: any;

    temi: Array<any> = [];
    categorie: Array<any> = [];
    progettiCrossFilter: any;
    progettoSelezionato: any = {};
    visualizzaDettaglio: boolean = false;

    panelOpenState: boolean = false;
    progettiPaginati: Progetto[] = [];
    pageStart: number = 0;
    pageSize: number=25;
    pageEnd: number = 25;

    constructor(
        private monitonMockedService: MonithonMockedService,
        private monithonApiService: MonithonApiService,
        private monithonMap: MonithonMapService) { }

    ngOnInit(): void {
        // this.monitonMockedService.mirageJsServer();
        let mapUpdateObserver: Observer<any> = {
            next: updateSubject => {
                this.temi = updateSubject.temi; // <- nessun problema di pergormance
                this.categorie = updateSubject.categorie.filter(c => c.isVisible);
                this.progetti = updateSubject.progetti; //lodash.take(updateSubject.progetti, 50);
                this.progettiPaginati = [...lodash.slice(this.progetti, this.pageStart, this.pageEnd)];
                this.virtualScroll.items = this.progettiPaginati;
                this.renderCharts(this.progetti);
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
                this.monithonMap.renderMap(this.mapContainer.nativeElement, data[0]);
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
        this.renderCounter(this.progettiCrossFilter)
        dc.renderAll();
    }

    private renderAnnoChart(crossFilterData: any, listaProgetti: any) {
        this.annoChart = new dc.BarChart((this.annoChartContainer as any).nativeElement);

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
            .elasticY(true);
        this.annoChart
            .xAxis()
            .tickFormat((anno) => `${parseInt(anno)}`);

        this.annoChart.on("filtered", (chart, filter) => {
            this.progetti = annoDim.top(Infinity);
        });

        this.annoChart.on("renderlet", (chart, filter) => {
            this.progetti = annoDim.top(Infinity);
        });
    }

    private renderCounter(crossFilterData: any) {
        this.resultCounter = new dc.DataCount((this.resultCounterElem as any).nativeElement);
        let all = crossFilterData.groupAll();

        this.resultCounter.crossfilter(crossFilterData).groupAll(all).html({
            some: "%filter-count",
            all: "%total-count"
        });

    }
    private renderBudgetChart(crossFilterData: any, listaProgetti: any) {
        this.budgetChart = new dc.BarChart((this.budgetChartContainer as any).nativeElement);

        let budgetBin = d3.bin();

        //creo bin usando arrotondamento del budget
        budgetBin.value((d: any) => +d.ocFinanzTotPubNetto);
        //inserire soglie per non avere troppi bin: parametrizzare qui quantili?
        let dieciQuantili = d3.range(0, 1.1, 0.25); //.map((n) => +d3.format(".1f")(n));
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
            .margins({ top: 10, right: 10, bottom: 20, left: 20 })
            .xAxis()
            .tickFormat((v: any) => `${binThresholds[v] / 1000} K`)



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
        this.budgetChart.on("renderlet", (chart, filter) => {
            //propagare evento per aggiornare la lista dei progetti
            this.progetti = budgetDim.top(Infinity);
        });

        this.budgetChart.on("filtered", (chart, filter) => {
            //propagare evento per aggiornare la lista dei progetti
            this.progetti = budgetDim.top(Infinity);

        });
        return crossFilterData;
    }

    private getProgetti(): Observable<any> {
        return this.monithonApiService.getProgetti();
    }

    public filterByTema(tema: any): void {
        tema.isSelected = !tema.isSelected;
        this.monithonMap.filtraPerTema();
    }

    public filterByCategoria(categoria: any): void {
        categoria.isSelected = !categoria.isSelected;
        this.monithonMap.filtraPerCategoria();
    }
    /**
     * onProgettoClick
     */
    public onProgettoClick(evt, progetto) {
        console.dir(evt);
        console.dir(progetto);

        console.log('onProgettoClick');

    }


   

    public caricaProgetti(event) {
        if (this.progettiPaginati.length < this.progetti.length) {
            this.pageEnd += this.pageSize;
            this.progettiPaginati = [...lodash.slice(this.progetti, this.pageStart, this.pageEnd)];
            this.virtualScroll.items = this.progettiPaginati;

        } else {
            this.infiniteScroll.nativeElement.disabled = true;
        }
        this.virtualScroll.checkEnd();
        event.target.complete();

    }


    public reusultOpenHandler(){
        this.panelOpenState = !this.panelOpenState;
        if(this.panelOpenState){
            this.virtualScroll.checkEnd();
        }
    }

}



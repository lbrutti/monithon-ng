import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import moment from 'moment';
import { Observable } from 'rxjs';
import { Progetto } from '../model/progetto/progetto';
import { MonithonApiService } from '../services/monithonApiService/monithon-api.service';
import { MonithonMockedService } from '../services/monithonMockService/monithon-mocked.service';


import { MonithonMapService } from '../services/monithonMapService/monithonmap.service';
import { Layer } from 'mapbox-gl';

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
    @ViewChild('categorieDiSpesaContainer') categorieDiSpesaContainer: ElementRef;
    @ViewChild('mapContainer') mapContainer: ElementRef;

    progetti: Array<Progetto> = [];

    //variabili charts
    budgetChart: any;
    annoChart: any;

    temi: Array<any> = [];
    categorie: Array<any> = [];
    constructor(
        private monitonMockedService: MonithonMockedService,
        private monithonApiService: MonithonApiService,
        private renderer: Renderer2,
        private monithonMap: MonithonMapService
    ) { }

    ngOnInit(): void {
        this.monitonMockedService.mirageJsServer();
    }


    ngAfterViewInit(): void {

        //rendere il resto dei filtri slave rispetto alla mappa
        this.getProgetti()
            .toPromise()
            .then(data => {
                this.monithonMap.renderMap(this.mapContainer.nativeElement, data)
                .then(data =>{
                    this.temi =data.temi;
                    this.categorie = data.categorie;
                });
                return data;
            })
            .then(data => {

                let arrotonda = (val, multiplo) => {
                    let arrotondamento = multiplo * Math.floor(val / multiplo);
                    return arrotondamento;
                };

                let baseArrotondamento = 10000;

                let listaProgetti = data.map((d: any) => {
                    d.ocFinanzTotPubNetto = arrotonda(
                        parseInt(d.ocFinanzTotPubNetto),
                        baseArrotondamento
                    );
                    d.ocDataInizioProgetto = parseInt(d.ocDataInizioProgetto);
                    return d;
                });

                let progetti = crossfilter(listaProgetti);
                this.renderBudgetChart(progetti, listaProgetti);

                this.renderAnnoChart(progetti, listaProgetti);

                dc.renderAll();
            });



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

    private renderBudgetChart(crossFilterData: any, listaProgetti: any) {
        this.budgetChart = new dc.BarChart((this.budgetChartContainer as any).nativeElement);

        let budgetBin = d3.bin();

        //creo bin usando arrotondamento del budget
        budgetBin.value((d: any) => +d.ocFinanzTotPubNetto);
        //inserire soglie per non avere troppi bin: parametrizzare qui quantili?
        let dieciQuantili = d3.range(0, 1.1, 0.025); //.map((n) => +d3.format(".1f")(n));
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
            .margins({ top: 10, right: 50, bottom: 30, left: 40 })
            .xAxis()
            .tickFormat((v: any) => `${binThresholds[v] / 1000} K`);



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

    public toggleLayer(tema: any): void {
        tema.isSelected = !tema.isSelected;
        this.monithonMap.toggleLayer(tema);

    }
    /**
     * onProgettoClick
     */
    public onProgettoClick(evt, progetto) {
        console.dir(evt);
        console.dir(progetto);

        console.log('onProgettoClick');

    }

    public onChartPanelOpen() {
        this.renderer.addClass(this.categorieDiSpesaContainer.nativeElement, 'shrink');
    }

    public onChartPanelClose() {
        this.renderer.removeClass(this.categorieDiSpesaContainer.nativeElement, 'shrink');
    }
}



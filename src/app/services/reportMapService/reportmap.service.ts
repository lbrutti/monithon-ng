import { Injectable } from '@angular/core';
import mapboxgl, { PointLike } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { default as MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import lodash from 'lodash';
import { Observer, Subject } from 'rxjs';

import '@turf/distance';
import { circle, distance, point } from '@turf/turf';
import { REPORT_COLOR_MAP } from 'src/app/utils/colorMap';
import { TranslocoService } from '@ngneat/transloco';
import { Report } from 'src/app/model/report/report';
import { GiudizioSintetico } from 'src/app/model/giudizioSintetico/giudizioSintetico.interface';
import { ProgrammaOperativo } from 'src/app/model/programmaOperativo/programmaOperativo.interface';
import { Tema } from 'src/app/model/tema/tema.interface';


@Injectable({
    providedIn: 'root'
})
export class ReportMapService {

    setTemi(temi: Tema[]) {
        this.temi = temi;
    }
    setProgrammiOperativi(programmiOperativi: ProgrammaOperativo[]) {
        this.programmiOperativi = programmiOperativi;
    }



    map: mapboxgl.Map;
    geocoder: any;
    draw: any;
    rangeReport: any;
    reports: any;
    giudiziSintetici: any;

    private mapUpdated: Subject<any> = new Subject();
    private reportSelected: Subject<any> = new Subject();
    public filtroPerRaggioEnabled: boolean = false;
    reportFlags: any[] = [];
    cicliProgrammazione?: any[] = [];
    radiusFilterData: any = {
        "type": "FeatureCollection",
        "features": []
    };
    circle: any;
    radius: number = 10;
    geocoderUpdate: Subject<any> = new Subject();
    geocoderResults: Subject<any> = new Subject();
    comuneCorrente: any;
    navigationControl: mapboxgl.NavigationControl;
    geolocator: mapboxgl.GeolocateControl;
    center: any;
    centerPoint: any;
    isFreeMode: boolean = false;
    temi: any;
    programmiOperativi: any;


    constructor(
        private translocoService: TranslocoService,
    ) {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    public renderMap(container, data, geocoderContainer, navigationControlContainer, isFreeMode: boolean = false): void {
        this.isFreeMode = isFreeMode;
        this.map = new mapboxgl.Map({
            container: container,
            style: environment.mapbox.reportStyle,
            center: [12.3959144, 41.909986], //roma
            zoom: 4.8,
            antialias: false,
            attributionControl: false
        });

        let geocoderPlaceholder = this.isFreeMode ? 'geocoderPlaceholder' : 'geocoderPlaceholderWizard';
        let geocoderOptions = {
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: environment.mapbox.geocoderCountries,
            minLength: 3,
            language: 'it',
            placeholder: this.translocoService.translate(geocoderPlaceholder),
            types: 'place,locality,region,district',
            enableEventLogging: false,
            trackProximity: false,
            marker: false

        };

        this.geocoder = new MapboxGeocoder(geocoderOptions);
        this.navigationControl = new mapboxgl.NavigationControl({ showCompass: false, visualizePitch: false });
        this.geolocator = new mapboxgl.GeolocateControl({
            showUserLocation: false,
            trackUserLocation: false,
            positionOptions: {
                enableHighAccuracy: false
            },
            fitBoundsOptions: {
                maxZoom: 10
            }
        });
        this.geocoder.on('result', evt => {
            this.resetFiltroDistanza(false);
            this.rangeReport = 10;
            this.center = evt.result.center;
            this.comuneCorrente = evt.result.place_name;
            this.drawRangeReport(this.center);
            this.map.easeTo({ center: this.center, duration: 1200, zoom: 10 });
            this.publishGeocoderUpdate();
        });

        this.geocoder.on('results', evt => {
            this.publishGeocoderResults(evt.features);
        });
        geocoderContainer.classList.toggle('geocoder-ready');
        geocoderContainer.appendChild(this.geocoder.onAdd(this.map));
        navigationControlContainer.appendChild(this.navigationControl.onAdd(this.map));
        if (this.isFreeMode) {
            navigationControlContainer.appendChild(this.geolocator.onAdd(this.map));
        }


        this.map.on('load', () => {
            this.reportsToFeatureCollection(data);

            this.map
                .addSource('reports', {
                    type: 'geojson',
                    data: this.reports,
                    promoteId: 'uid'
                });

            this.map
                .addSource('radiusFilterData', {
                    type: 'geojson',
                    data: this.radiusFilterData
                });
            //refactoring come singolo layer di reports:

            this.map.addLayer({
                'id': 'filterCircleFill',
                'type': 'fill',
                'source': 'radiusFilterData',
                "paint": {
                    "fill-color": "#235ba6",
                    "fill-outline-color": "#fff",
                    "fill-opacity": 0.1
                }
            })
            this.map.addLayer({
                'id': 'filterCircleStroke',
                'type': 'line',
                'source': 'radiusFilterData',
                "paint": {
                    "line-color": "#fff",
                    "line-width": 2
                }
            })

            let layerId = 'reports-layer'
            this.map
                .addLayer({
                    'id': layerId,
                    'type': 'circle',
                    'source': 'reports',
                    'paint': {
                        'circle-radius': {
                            'base': 1.75,
                            'stops': [
                                [0, 0],
                                [6, 3],
                                [8, 6],
                                [12, 8]
                            ]
                        },
                        'circle-color': [
                            'case',
                            // ['!', ['boolean', ['feature-state', 'isHighlighted'], true]],
                            // 'transparent',
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]],
                            REPORT_COLOR_MAP.giudiziSintetici.default,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 1]],
                            REPORT_COLOR_MAP.giudiziSintetici['1'],
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 2]],
                            REPORT_COLOR_MAP.giudiziSintetici['2'],
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 3]],
                            REPORT_COLOR_MAP.giudiziSintetici['3'],
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 4]],
                            REPORT_COLOR_MAP.giudiziSintetici['4'],
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 5]],
                            REPORT_COLOR_MAP.giudiziSintetici['5'],
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 6]],
                            REPORT_COLOR_MAP.giudiziSintetici['6'],
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'codGiudizioSintetico'], 7]],
                            REPORT_COLOR_MAP.giudiziSintetici['7'],
                            'transparent'
                        ],
                        'circle-stroke-color': [
                            'case',
                            ['any',
                                ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]
                            ],
                            REPORT_COLOR_MAP.giudiziSintetici.default,
                            ['==', ['get', 'codGiudizioSintetico'], 1],
                            REPORT_COLOR_MAP.giudiziSintetici['1'],
                            ['==', ['get', 'codGiudizioSintetico'], 2],
                            REPORT_COLOR_MAP.giudiziSintetici['2'],
                            ['==', ['get', 'codGiudizioSintetico'], 3],
                            REPORT_COLOR_MAP.giudiziSintetici['3'],
                            ['==', ['get', 'codGiudizioSintetico'], 4],
                            REPORT_COLOR_MAP.giudiziSintetici['4'],
                            ['==', ['get', 'codGiudizioSintetico'], 5],
                            REPORT_COLOR_MAP.giudiziSintetici['5'],
                            ['==', ['get', 'codGiudizioSintetico'], 6],
                            REPORT_COLOR_MAP.giudiziSintetici['6'],
                            ['==', ['get', 'codGiudizioSintetico'], 7],
                            REPORT_COLOR_MAP.giudiziSintetici['7'],

                            'transparent'
                        ],
                        'circle-stroke-width': 1,

                        'circle-stroke-opacity': [
                            'case',
                            ['!', ['boolean', ['feature-state', 'isHighlighted'], true]],
                            0.5,
                            1
                        ],
                        'circle-opacity': [
                            'case',
                            ['!', ['boolean', ['feature-state', 'isHighlighted'], true]],
                            0.5,
                            1
                        ]
                    }
                });

            this.map.on('click', e => {

                // set bbox as 5px reactangle area around clicked point
                let lower: PointLike = new mapboxgl.Point(e.point.x - 5, e.point.y - 5);
                let upper: PointLike = new mapboxgl.Point(e.point.x + 5, e.point.y + 5);
                var bbox: PointLike | [PointLike, PointLike] = [lower, upper];
                var features = this.map.queryRenderedFeatures(bbox, {
                    layers: ['reports-layer']
                });
                if (features.length) { //https://www.meistertask.com/app/task/k9R9hJHO/markers-poter-cliccare-i-markers-solo-allultimo-livello-di-zoom-come-in-glocalclimatechange-eu
                    let feature = features[0];
                    let report: Report = feature.properties as Report;
                    let match = this.reports.features.filter(f => f.properties.uid == report.uid);
                    match = match[0] ? match[0].properties : {};
                    if (((this.filtroPerRaggioEnabled && match.isWithinRange) || !this.filtroPerRaggioEnabled) && match.isSelected) {
                        this.publishSelectedReport((match as Report));
                    } else {
                        this.publishSelectedReport(null);
                    }
                } else {
                    this.highlightById([]);
                    this.publishSelectedReport(null);
                }
            });

            this.map.on('mousemove', e => {


                // set bbox as 5px reactangle area around clicked point
                let lower: PointLike = new mapboxgl.Point(e.point.x - 5, e.point.y - 5);
                let upper: PointLike = new mapboxgl.Point(e.point.x + 5, e.point.y + 5);
                var bbox: PointLike | [PointLike, PointLike] = [lower, upper];
                var features = this.map.queryRenderedFeatures(bbox, {
                    layers: ['reports-layer']
                });
                if (features.length && this.map.getZoom() >= 10) { //https://www.meistertask.com/app/task/k9R9hJHO/markers-poter-cliccare-i-markers-solo-allultimo-livello-di-zoom-come-in-glocalclimatechange-eu
                    let feature = features[0];
                    let report: Report = feature.properties as Report;
                    let match = this.reports.features.filter(f => f.properties.uid == report.uid);
                    match = match[0] ? match[0].properties : {};
                    if (((this.filtroPerRaggioEnabled && match.isWithinRange) || !this.filtroPerRaggioEnabled) && match.isSelected) {
                        this.map.getCanvas().style.cursor = 'pointer';
                    } else {
                        this.map.getCanvas().style.cursor = '';
                    }
                } else {
                    this.map.getCanvas().style.cursor = '';
                }
            });

            this.map.dragRotate.disable();
            this.map.touchZoomRotate.disableRotation();
            this.map.resize();
            this.aggiornaAttivabilitaGiudizi();

            //rimosso centramento su utente onload
            // if (this.isFreeMode) {
            //     navigationControlContainer.querySelector('.mapboxgl-ctrl-geolocate').click();
            // }

            this.publishUpdate(this.featureCollectionToReports(), true, true);
        });


    }
    publishGeocoderResults(features: any) {
        this.geocoderResults.next(features);
    }
    publishGeocoderUpdate() {
        let data = { comune: this.comuneCorrente, radius: this.radius }
        this.geocoderUpdate.next(data);
    }



    public setGiudiziSintetici(giudiziSintetici: Array<GiudizioSintetico>) {
        this.giudiziSintetici = giudiziSintetici;
    }
    private reportsToFeatureCollection(data: Array<Report>): any {
        this.reports = {
            "type": "FeatureCollection",
            "features": data.map((r: Report) => {
                let properties: any = Object.assign({}, r);
                properties.isSelected = true;
                properties.isWithinRange = false;
                properties.isHighlighted = false;
                let jitteredCoords = this.addJitter()(r.lat, r.long, 0.5, false);
                return {
                    "type": "Feature",
                    "properties": properties,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [jitteredCoords.lng, jitteredCoords.lat]
                    }
                };
            })
        };
    }

    private featureCollectionToReports(): Array<Report> {
        let reports: Array<Report> = this.reports.features.map(feat => {
            let data = feat.properties;
            if (lodash.isString(data.codGiudizioSintetico)) {
                //see : https://github.com/mapbox/mapbox-gl-js/issues/2434
                data.codGiudizioSintetico = JSON.parse(data.codGiudizioSintetico);
            }
            return data;
        });
        return reports;
    }


    /**
     * 
     * Disegna cerchio attorno alla località selezionata 
     * @param center 
     */
    private drawRangeReport(center: any) {
        this.circle = circle(this.center, this.radius);
        this.circle.id = "range-center";
        (this.map.getSource('radiusFilterData') as any).setData(this.circle);

        this.map.setLayoutProperty(
            'filterCircleStroke',
            'visibility',
            'visible'
        );
        this.map.setLayoutProperty(
            'filterCircleFill',
            'visibility',
            'visible'
        );


        this.filtroPerRaggioEnabled = true;
        this.filtraPerDistanza({
            center: center,
            radius: this.radius
        });
    }

    public updateRadius(newRadiusValue: number) {
        this.resetFiltroDistanza(false, false);
        this.radius = newRadiusValue;
        this.drawRangeReport(this.center);
    }


    aggiornaAttivabilitaGiudizi(reset: boolean = false) {
        let giudiziVisibili = lodash.uniq(
            this.reports.features.filter(f => f.properties.isSelected)
                .reduce((acc, f) => {

                    if (acc.indexOf(f.properties.codGiudizioSintetico) == -1) {
                        acc.push(f.properties.codGiudizioSintetico);
                    }

                    return acc;
                }, []));
        this.giudiziSintetici.map(c => {
            //un giudizio è attivo (selezionabile) quando esiste almeno un report che ce l'ha
            c.isActive = lodash.includes(giudiziVisibili, c.codGiudizioSintetico);
            if (reset) {
                c.isSelected = c.isActive;
            }
        });



    }



    filtraPerGiudizio() {
        let reports = this.filtraReport();
        // lodash.remove(reports, (p: Report) => !p.isSelected);
        this.publishUpdate(reports);
    }

    filtraPerTema() {
        let reports = this.filtraReport();
        // lodash.remove(reports, (p: Report) => !p.isSelected);
        this.publishUpdate(reports);
    }
    filtraPerProgrammaOperativo() {
        let reports = this.filtraReport();
        // lodash.remove(reports, (p: Report) => !p.isSelected);
        this.publishUpdate(reports);
    }

    /**
     * 
     * @param circleData : 
     */
    filtraPerDistanza(circleData?: any) {

        if (circleData) {
            this.centerPoint = point(circleData.center);
            this.radius = circleData.radius;
            let reports = this.filtraReport();
            this.aggiornaAttivabilitaGiudizi();
            this.publishUpdate(reports);
        }


    }


    filtraReport(): Array<any> {
        let temiSinteticiSelezionati = this.temi.filter(flag => flag.isSelected).map(flag => flag.ocCodTemaSintetico);
        let programmaOperativo: ProgrammaOperativo = this.programmiOperativi.filter(p => p.isSelected)[0];
        let giudiziSelezionati: Array<number | string> = this.giudiziSintetici.filter(c => {
            return c.isSelected;
        }).map(c => c.codGiudizioSintetico);

        return this.reports.features
            .map(f => {
                let report: Report = f.properties;


                let matchesTemaSintetico = ((temiSinteticiSelezionati.length == 0) || lodash.includes(temiSinteticiSelezionati, report.ocCodTemaSintetico));
                let matchesGiudizioSintetico = ((giudiziSelezionati.length == 0) || lodash.includes(giudiziSelezionati, report.codGiudizioSintetico))
                let matchesProgrammaOperativo = lodash.isNil(programmaOperativo) || report.ocCodProgrammaOperativo === programmaOperativo.ocCodProgrammaOperativo;
                report.isSelected = matchesTemaSintetico && matchesGiudizioSintetico && matchesProgrammaOperativo;

                let featureStates = { isSelected: report.isSelected, isWithinRange: true };
                if (this.filtroPerRaggioEnabled) {
                    report.distanza = distance(point(f.geometry.coordinates), this.centerPoint);
                    report.isWithinRange = report.distanza <= this.radius;
                    featureStates.isWithinRange = report.isWithinRange;
                    featureStates.isSelected = report.isSelected && report.isWithinRange;
                    report.isSelected = report.isSelected && report.isWithinRange;
                }
                this.map.setFeatureState({ source: 'reports', id: report.uid }, featureStates);
                return f;
            })
            .filter(f => f.properties.isSelected)
            .map(f => f.properties);
    }

    // filtraTemi() {
    //     this.temi.map((t: Tema) => t.isActive = lodash.some(this.reports, (r: Report) => r.ocCodTemaSintetico == t.ocCodTemaSintetico));
    // }

    resetFiltroReport(): Array<any> {

        return this.reports.features.map(f => {
            let report: Report = f.properties;
            report.distanza = null;
            report.isHighlighted = true;
            report.isWithinRange = true;
            report.isSelected = true;
            this.map.setFeatureState({ source: 'reports', id: report.uid }, { isWithinRange: true, isSelected: true, isHighlighted: true });
            return report;
        });
    }


    public subscribeToUpdates(obs: Observer<any>): void {
        this.mapUpdated.subscribe(obs);
    }
    public unsubscribeToUpdates(): void {
        this.mapUpdated.unsubscribe();
    }

    public subscribeReportSelection(obs: Observer<any>): void {
        this.reportSelected.subscribe(obs);
    }
    public unsubscribeReportSelection(): void {
        this.reportSelected.unsubscribe();
    }

    public subscribeToGeocoderUpdates(obs: Observer<any>): void {
        this.geocoderUpdate.subscribe(obs);
    }
    public unsubscribeToGeocoderUpdates(): void {
        this.geocoderUpdate.unsubscribe();
    }


    public subscribeToGeocoderResults(obs: Observer<any>): void {
        this.geocoderResults.subscribe(obs);
    }
    public unsubscribeToGeocoderResults(): void {
        this.geocoderResults.unsubscribe();
    }
    publishUpdate(reports: Array<Report>, refreshTemi: boolean = false, refreshCicliProgrammazione: boolean = false): void {
        this.mapUpdated.next({
            reports: lodash.uniqBy(reports, (r: Report) => r.uid),
            refreshTemi: refreshTemi,
            refreshCicliProgrammazione: refreshCicliProgrammazione
        });
    }

    publishSelectedReport(report?: Report): void {
        if (report && report.isWithinRange && lodash.isString(report.codGiudizioSintetico)) {
            report.codGiudizioSintetico = JSON.parse(report.codGiudizioSintetico);
        }
        this.reportSelected.next(report);

    }

    addJitter(): Function {

        var rad_Earth = 6378.16;
        var one_degree = (2 * Math.PI * rad_Earth) / 360;
        var one_km = 1 / one_degree;

        function randomInRange(from, to, fixed) {
            fixed = fixed || 10;
            return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        }

        return (lat, lng, kms, fixed) => {
            return {
                lat: randomInRange(
                    lat - (kms * one_km),
                    lat + (kms * one_km),
                    fixed
                ),
                lng: randomInRange(
                    lng - (kms * one_km),
                    lng + (kms * one_km),
                    fixed
                )
            };
        }
    }

    highlightById(idRisultati: string[]) {
        this.reports.features
            .map(f => {
                let report: Report = f.properties;
                report.isHighlighted = (report.isSelected && (idRisultati.length == 0)) || lodash.includes(idRisultati, report.uid);

                this.map.setFeatureState({ source: 'reports', id: report.uid }, { isHighlighted: report.isHighlighted });
            });
    }

    selectById(idRisultati: string[]) {
        this.reports.features
            .map(f => {
                let report: Report = f.properties;
                report.isSelected = ((!lodash.isNil(idRisultati) && idRisultati.length == 0) && report.isSelected) || lodash.includes(idRisultati, report.uid);

                this.map.setFeatureState({ source: 'reports', id: report.uid }, { isSelected: report.isSelected });
            });
    }

    /**
     * invocato programmaticamente allo svuotamento del gecoder
     */
    public removeRadiusFilter() {
        if (this.circle) {
            this.map.setLayoutProperty(
                'filterCircleStroke',
                'visibility',
                'none'
            );
            this.map.setLayoutProperty(
                'filterCircleFill',
                'visibility',
                'none'
            );
            this.resetFiltroDistanza(true);
            this.filtroPerRaggioEnabled = false;
        }
    }

    private resetFiltroDistanza(publishUpdate: boolean = true, resetMapView: boolean = true) {
        lodash.map(this.giudiziSintetici, c => {
            c.isSelected = true;
            c.isActive = true;
        });

        let reports = this.resetFiltroReport();
        this.aggiornaAttivabilitaGiudizi(true);
        this.resetFiltroTemi();
        if (resetMapView) {
            this.radius = 10;
            let easeOptions: mapboxgl.EaseToOptions = {
                center: [12.3959144, 41.909986],
                zoom: 4.8,
                duration: 500
            }
            this.map.easeTo(easeOptions);
        }
        if (publishUpdate) {
            this.publishUpdate(reports);
        }
    }
    private resetFiltroTemi() {
        this.temi.map((t: Tema) => {
            t.isSelected = true;
            t.isActive = true;
        })
    }

    //sposta la mappa per mostrare il report  correntemente selezionato
    public easeToReport(options: any, report: Report, isOverlayPresent: boolean) {
        if (options && isOverlayPresent) {
            this.highlightById([report.uid]);
            //recupera coordinate report sullo schermo:
            let feature = this.reports.features.filter(f => f.properties.uid == report.uid)[0];
            let markerScreenCoordinates = this.map.project([feature.properties.long, feature.properties.lat]);

            //devo spostare la mappa in alto in modo che il punto si trovi a 30px dal margine superiore della scheda report
            let offset = options.height; // porto il punto al margine del div dettaglio
            offset += ((markerScreenCoordinates.y - options.y) / 2); //aggiungo ulteriore padding per far emenergere il punto sopra il container
            let easeOptions = { center: [feature.properties.long, feature.properties.lat], duration: 2000 };
            if (this.map.getZoom() < 10) {
                easeOptions['zoom'] = 10;
            }
            if (offset > 0) {
                easeOptions['padding'] = { bottom: offset };
            }
            (this.map as any).easeTo(easeOptions);
        }

    }
}

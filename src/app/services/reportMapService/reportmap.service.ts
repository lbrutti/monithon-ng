import { Injectable } from '@angular/core';
import mapboxgl, { PointLike } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { default as MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import lodash from 'lodash';
import { Observer, Subject } from 'rxjs';

import '@turf/distance';
import { circle, distance, point } from '@turf/turf';
import { COLOR_MAP } from 'src/app/utils/colorMap';
import { TranslocoService } from '@ngneat/transloco';
import { Report } from 'src/app/model/report/report';


@Injectable({
    providedIn: 'root'
})
export class ReportMapService {



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


    constructor(
        private translocoService: TranslocoService,
    ) {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    public renderMap(container, data, geocoderContainer, navigationControlContainer, isFreeMode: boolean = false): void {
        this.isFreeMode = isFreeMode;
        this.map = new mapboxgl.Map({
            container: container,
            style: environment.mapbox.style,
            center: [12.3959144, 41.909986], //roma
            zoom: 4.8,
            antialias: false,
            attributionControl: false
        });

        let gecoderPlaceholder = this.isFreeMode ? 'gecoderPlaceholder' : 'gecoderPlaceholderWizard';
        let geocoderOptions = {
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: 'it',
            minLength: 3,
            language: 'it',
            placeholder: this.translocoService.translate(gecoderPlaceholder),
            types: 'place,locality',
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
                                [6, 1],
                                [8, 2],
                                [11, 4],
                                [12, 5]
                            ]
                        },
                        'circle-color': [
                            'case',
                            // ['!', ['boolean', ['feature-state', 'isHighlighted'], true]],
                            // 'transparent',
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]],
                            COLOR_MAP.temi.default,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 4]],
                            COLOR_MAP.temi.energia,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 5]],
                            COLOR_MAP.temi.ambiente,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 6]],
                            COLOR_MAP.temi.attrazione,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 7]],
                            COLOR_MAP.temi.mobilita,
                            'transparent'
                        ],
                        'circle-stroke-color': [
                            'case',
                            ['any',
                                ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]
                            ],
                            COLOR_MAP.temi.default,
                            ['==', ['get', 'ocCodTemaSintetico'], 4],
                            COLOR_MAP.temi.energia,
                            ['==', ['get', 'ocCodTemaSintetico'], 5],
                            COLOR_MAP.temi.ambiente,
                            ['==', ['get', 'ocCodTemaSintetico'], 6],
                            COLOR_MAP.temi.attrazione,
                            ['==', ['get', 'ocCodTemaSintetico'], 7],
                            COLOR_MAP.temi.mobilita,
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
                if (features.length && this.map.getZoom() >= 10) { //https://www.meistertask.com/app/task/k9R9hJHO/markers-poter-cliccare-i-markers-solo-allultimo-livello-di-zoom-come-in-glocalclimatechange-eu
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
            this.aggiornaAttivabilitaCategorie();

            if (this.isFreeMode) {
                navigationControlContainer.querySelector('.mapboxgl-ctrl-geolocate').click();
            }

            this.publishUpdate(this.featureCollectionToReports());
        });


    }
    publishGeocoderResults(features: any) {
        this.geocoderResults.next(features);
    }
    publishGeocoderUpdate() {
        let data = { comune: this.comuneCorrente, radius: this.radius }
        this.geocoderUpdate.next(data);
    }



    public setGiudiziSintetici(categorie: Array<any>) {
        this.giudiziSintetici = categorie.map((c) => ({
            'codGiudizioSintetico': c.codGiudizioSintetico,
            'ocCodTemaSintetico': c.ocCodTemaSintetico,
            'isSelected': true,
            'isActive': true
        }));
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
        this.resetFiltroDistanza(false);
        this.radius = newRadiusValue;
        this.drawRangeReport(this.center);
    }


    aggiornaAttivabilitaCategorie(reset: boolean = false) {
        let categorieVisibili = lodash.uniq(
            this.reports.features.filter(f => f.properties.isSelected)
                .reduce((acc, f) => {

                    if (acc.indexOf(f.properties.codGiudizioSintetico) == -1) {
                        acc.push(f.properties.codGiudizioSintetico);
                    }

                    return acc;
                }, []));
        this.giudiziSintetici.map(c => {
            //una categoria è attiva (selezionabile) quando esiste almeno un report che ce l'ha
            c.isActive = lodash.includes(categorieVisibili, c.codGiudizioSintetico);
            if (reset) {
                c.isSelected = c.isActive;
            }
        });



    }



    filtraPerCategoria() {
        let reports = this.filtraReport();
        lodash.remove(reports, (p: Report) => !p.isSelected);
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
            this.aggiornaAttivabilitaCategorie();
            this.publishUpdate(reports);
        }


    }


    filtraReport(): Array<any> {
        let categorieSelezionate = this.giudiziSintetici.filter(c => {
            return c.isSelected;
        }).map(c => c.codGiudizioSintetico);

        return this.reports.features
            .map(f => {
                let report: Report = f.properties;
                report.isSelected = ((categorieSelezionate == 0) || (lodash.intersection(categorieSelezionate, report.codGiudizioSintetico).length > 0));
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
    publishUpdate(reports: Array<Report>): void {
        this.mapUpdated.next({ giudiziSintetici: this.giudiziSintetici, reports: lodash.uniqBy(reports, (r: Report) => r.uid) });
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
            this.resetFiltroDistanza();
            this.filtroPerRaggioEnabled = false;
        }
    }

    private resetFiltroDistanza(publishUpdate: boolean = true) {
        this.radius = 10;
        lodash.map(this.giudiziSintetici, c => {
            c.isSelected = true;
            c.isActive = true;
        });

        let reports = this.resetFiltroReport();
        this.aggiornaAttivabilitaCategorie(true);
        if (publishUpdate) {
            this.publishUpdate(reports);
        }
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

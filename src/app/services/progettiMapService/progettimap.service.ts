import { Injectable } from '@angular/core';
import mapboxgl, { PointLike } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { default as MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import { Progetto } from 'src/app/model/progetto/progetto';
import lodash from 'lodash';
import { Observer, Subject } from 'rxjs';

import '@turf/distance';
import { circle, distance, point } from '@turf/turf';
import { COLOR_MAP } from 'src/app/utils/colorMap';
import { TranslocoService } from '@ngneat/transloco';


@Injectable({
    providedIn: 'root'
})
export class ProgettiMapService {



    map: mapboxgl.Map;
    geocoder: MapboxGeocoder;
    draw: any;
    rangeProgetti: any;
    temi: Array<any> = [];
    progetti: any;
    categorie: any;

    private mapUpdated: Subject<any> = new Subject();
    private projectSelected: Subject<any> = new Subject();
    categorieAttive: { ocCodCategoriaSpesa: any; ocCodTemaSintetico: any; isSelected: boolean; }[];
    public filtroPerRaggioEnabled: boolean = false;
    reportFlags: any[] = [];
    statiAvanzamento: any[] = [];
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
    isMobile: boolean = false;

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

        let geocoderPlaceholder = this.isFreeMode ? 'geocoderPlaceholder' : 'geocoderPlaceholderWizard';
        let geocoderOptions = {
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: 'it',
            minLength: 3,
            language: 'it',
            placeholder: this.translocoService.translate(geocoderPlaceholder),
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
            this.rangeProgetti = 10;
            this.center = evt.result.center;
            this.comuneCorrente = evt.result.place_name;
            this.drawRangeProgetti(this.center);
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
            this.progettiToFeatureCollection(data);

            this.map
                .addSource('progetti', {
                    type: 'geojson',
                    data: this.progetti,
                    promoteId: 'uid'
                });

            this.map
                .addSource('radiusFilterData', {
                    type: 'geojson',
                    data: this.radiusFilterData
                });
            //refactoring come singolo layer di progetti:

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

            let layerId = 'progetti-layer'
            this.map
                .addLayer({
                    'id': layerId,
                    'type': 'circle',
                    'source': 'progetti',
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
                        'circle-color': this.getCircleColor(),
                        'circle-stroke-color': this.getCircleStrokeColor(),
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
                    layers: ['progetti-layer']
                });
                if (features.length && this.map.getZoom() >= 10) { //https://www.meistertask.com/app/task/k9R9hJHO/markers-poter-cliccare-i-markers-solo-allultimo-livello-di-zoom-come-in-glocalclimatechange-eu
                    let feature = features[0];
                    let progetto: Progetto = feature.properties as Progetto;
                    let match = this.progetti.features.filter(f => f.properties.uid == progetto.uid);
                    match = match[0] ? match[0].properties : {};
                    if (((this.filtroPerRaggioEnabled && match.isWithinRange) || !this.filtroPerRaggioEnabled) && match.isSelected) {
                        this.publishSelectedProject((match as Progetto));
                    } else {
                        this.publishSelectedProject(null);
                    }
                } else {
                    this.highlightById([]);
                    this.publishSelectedProject(null);
                }
            });

            this.map.on('mousemove', e => {


                // set bbox as 5px reactangle area around clicked point
                let lower: PointLike = new mapboxgl.Point(e.point.x - 5, e.point.y - 5);
                let upper: PointLike = new mapboxgl.Point(e.point.x + 5, e.point.y + 5);
                var bbox: PointLike | [PointLike, PointLike] = [lower, upper];
                var features = this.map.queryRenderedFeatures(bbox, {
                    layers: ['progetti-layer']
                });
                if (features.length && this.map.getZoom() >= 10) { //https://www.meistertask.com/app/task/k9R9hJHO/markers-poter-cliccare-i-markers-solo-allultimo-livello-di-zoom-come-in-glocalclimatechange-eu
                    let feature = features[0];
                    let progetto: Progetto = feature.properties as Progetto;
                    let match = this.progetti.features.filter(f => f.properties.uid == progetto.uid);
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

            this.publishUpdate(this.featureCollectionToProgetti());
        });


    }
    private getCircleStrokeColor(): string | mapboxgl.StyleFunction | mapboxgl.Expression {
        let circleStrokeColors: mapboxgl.Expression = [
            'case',
            ['any',
                ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]
            ],
            COLOR_MAP.temi.default,
        ];

        this.temi.map(tema => {
            let temaCaseExpr: any = ['==', ['get', 'ocCodTemaSintetico'], +tema.ocCodTemaSintetico];
            // if (this.isMobile) {
            //     temaCaseExpr = ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], +tema.ocCodTemaSintetico]];
            // }
            circleStrokeColors.push(temaCaseExpr);
            circleStrokeColors.push(tema.stile.colore);
        });
        circleStrokeColors.push('transparent');
        return circleStrokeColors;
    }

    private getCircleColor(): string | mapboxgl.StyleFunction | mapboxgl.Expression {
        let circleColors: mapboxgl.Expression = [
            'case',
            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]],
            COLOR_MAP.temi.default,
        ];
        this.temi.map(tema => {
            let temaCaseExpr = ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], +tema.ocCodTemaSintetico]];
            circleColors.push(temaCaseExpr);
            circleColors.push(tema.stile.colore);
        });
        circleColors.push('transparent');
        return circleColors;
    }

    publishGeocoderResults(features: any) {
        this.geocoderResults.next(features);
    }
    publishGeocoderUpdate() {
        let data = { comune: this.comuneCorrente, radius: this.radius }
        this.geocoderUpdate.next(data);
    }

    public setTemi(temi: Array<any>) {
        this.temi = temi.map((t) => ({ 'ocCodTemaSintetico': t.ocCodTemaSintetico, 'isSelected': true, 'isActive': true, 'stile': t.stile }));
    }

    public setCategorie(categorie: Array<any>) {
        this.categorie = categorie.map((c) => ({
            'ocCodCategoriaSpesa': c.ocCodCategoriaSpesa,
            'ocCodTemaSintetico': c.ocCodTemaSintetico,
            'isSelected': true,
            'isActive': true
        }));
    }
    private progettiToFeatureCollection(data: Array<Progetto>): any {
        this.progetti = {
            "type": "FeatureCollection",
            "features": data.map((p: Progetto) => {
                let properties: any = Object.assign({}, p);
                properties.isSelected = true;
                properties.isWithinRange = false;
                properties.isHighlighted = false;
                let jitteredCoords = this.addJitter()(p.lat, p.long, 0.5, false);
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

    private featureCollectionToProgetti(): Array<Progetto> {
        let progetti: Array<Progetto> = this.progetti.features.map(feat => {
            let data = feat.properties;
            if (lodash.isString(data.ocCodCategoriaSpesa)) {
                //see : https://github.com/mapbox/mapbox-gl-js/issues/2434
                data.ocCodCategoriaSpesa = JSON.parse(data.ocCodCategoriaSpesa);
            }
            return data;
        });
        return progetti;
    }

    public getTemi(): Array<any> {
        return this.temi;
    }

    /**
     * 
     * Disegna cerchio attorno alla località selezionata 
     * @param center 
     */
    private drawRangeProgetti(center: any) {
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
        this.drawRangeProgetti(this.center);
    }

    filtraPerTema(tema) {
        // rimuovi filtro su categorie non associate ai temi selezionati
        this.filtraCategorie(tema);
        let progetti = this.filtraProgetti();
        lodash.remove(progetti, (p: Progetto) => !p.isSelected);
        this.publishUpdate(progetti);
    }
    resetFiltroTemi() {
        lodash.map(this.temi, t => { t.isSelected = true; t.isActive = true; });
        let progettiSelezionati = [];
        if (this.filtroPerRaggioEnabled) {
            progettiSelezionati = this.progetti.features.filter((p: any) => (p.properties as Progetto).isWithinRange);
        } else {
            progettiSelezionati = this.progetti.features;
        }
        let categorieVisibili = lodash
            .uniq(progettiSelezionati.reduce((acc, f) => {
                f.properties.ocCodCategoriaSpesa.map(c => {
                    if (acc.indexOf(c) == -1) {
                        acc.push(c);
                    }
                });
                return acc;
            }, []));

        lodash.map(this.categorie, c => {
            c.isSelected = true;
            c.isActive = categorieVisibili.indexOf(c.ocCodCategoriaSpesa) > -1;
        });

        let categoriePerTema = lodash.groupBy(this.categorie, c => c.ocCodTemaSintetico);

        lodash.map(categoriePerTema, (categorie, codiceTema) => {
            //quando nessuna categoria del tema è attiva -> inattivo il tema
            if (lodash.every(categorie, c => !c.isActive)) {
                this.temi.filter(t => t.ocCodTemaSintetico == codiceTema).map(t => {
                    t.isActive = false;
                    t.isSelected = false;
                });
            } else if (lodash.every(categorie, c => !c.isSelected)) {
                this.temi.filter(t => t.ocCodTemaSintetico == codiceTema).map(t => {
                    t.isActive = true;
                    t.isSelected = true;
                });
            }

        });
    }

    aggiornaAttivabilitaCategorie(reset: boolean = false) {
        let categorieVisibili = lodash.uniq(
            this.progetti.features.filter(f => f.properties.isSelected)
                .reduce((acc, f) => {
                    f.properties.ocCodCategoriaSpesa.map(c => {
                        if (acc.indexOf(c) == -1) {
                            acc.push(c);
                        }
                    });
                    return acc;
                }, []));
        this.categorie.map(c => {
            //una categoria è attiva (selezionabile) quando esiste almeno un progetto che ce l'ha
            c.isActive = lodash.includes(categorieVisibili, c.ocCodCategoriaSpesa);
            if (reset) {
                c.isSelected = c.isActive;
            }
        });

        let categoriePerTema = lodash.groupBy(this.categorie, c => c.ocCodTemaSintetico);

        lodash.map(categoriePerTema, (categorie, codiceTema) => {
            //quando nessuna categoria del tema è attiva -> inattivo il tema
            if (lodash.every(categorie, c => !c.isActive)) {
                this.temi.filter(t => t.ocCodTemaSintetico == codiceTema).map(t => {
                    t.isActive = false;
                    t.isSelected = false;
                });
            } else if (lodash.every(categorie, c => !c.isSelected)) {
                this.temi.filter(t => t.ocCodTemaSintetico == codiceTema).map(t => {
                    t.isActive = true;
                    t.isSelected = reset;
                });
            }

        });

    }



    filtraCategorie(tema) {
        let categorieSelezionate = this.categorie.filter(c => c.isSelected);
        let temiSelezionati = this.temi.filter(t => t.isSelected).map(t => t.ocCodTemaSintetico);

        if (categorieSelezionate.length == 0) {
            //nascondo le categorie non pertinenti al tema
            this.categorie.map(c => c.isActive = temiSelezionati.length == 0 || lodash.includes(temiSelezionati, c.ocCodTemaSintetico));
        } else {
            // se ho categorie selezionate, le mantengo tali sse il loro tema di pertinenza è selezionato o non ci sono temi selezionati

            let categoriePerTema = lodash.groupBy(this.categorie, c => c.ocCodTemaSintetico);
            categoriePerTema[tema.ocCodTemaSintetico].map(c => {
                c.isSelected = c.isActive && tema.isSelected;
            });

        }
    }
    filtraPerCategoria() {
        let categoriePerTema = lodash.groupBy(this.categorie, c => c.ocCodTemaSintetico);

        lodash.map(categoriePerTema, (categorie, codiceTema) => {
            //quando deseleziono tutte le categorie di un tema-> lo deseleziono
            let isTemaSelezionato = lodash.some(categorie, c => c.isSelected && c.isActive)
            // if (lodash.every(categorie, c => !c.isSelected) || lodash.every(categorie, c => !c.isActive)) {
            if (!isTemaSelezionato) {
                this.temi.filter(t => t.ocCodTemaSintetico == codiceTema).map(t => t.isSelected = false);
            }
            //se ho selezionato almeno una categoria di un tema deselezioanato-> lo seleziono
            if (lodash.some(categorie, c => c.isSelected && c.isActive)) {
                this.temi.filter(t => t.ocCodTemaSintetico == codiceTema).map(t => {
                    if (!t.isSelected) {
                        t.isSelected = true;

                    }
                    if (!t.isActive) {
                        t.isActive = true;
                    }
                });

            }
        });
        let progetti = this.filtraProgetti();
        lodash.remove(progetti, (p: Progetto) => !p.isSelected);
        this.publishUpdate(progetti);
    }


    /**
     * 
     * @param circleData : 
     */
    filtraPerDistanza(circleData?: any) {

        if (circleData) {
            this.centerPoint = point(circleData.center);
            this.radius = circleData.radius;
            let progetti = this.filtraProgetti();
            this.aggiornaAttivabilitaCategorie();
            this.publishUpdate(progetti);
        }


    }


    filtraProgetti(): Array<any> {
        let temiSelezionati = this.temi.filter(t => t.isSelected).map(t => t.ocCodTemaSintetico);
        let categorieSelezionate = this.categorie.filter(c => {
            return (temiSelezionati.length == 0 || lodash.includes(temiSelezionati, c.ocCodTemaSintetico)) && c.isSelected;
        }).map(c => c.ocCodCategoriaSpesa);

        return this.progetti.features
            .map(f => {
                let progetto: Progetto = f.properties;
                progetto.isSelected = ((categorieSelezionate == 0) || (lodash.intersection(categorieSelezionate, progetto.ocCodCategoriaSpesa).length > 0));
                let featureStates = { isSelected: progetto.isSelected, isWithinRange: true };
                if (this.filtroPerRaggioEnabled) {
                    progetto.distanza = distance(point(f.geometry.coordinates), this.centerPoint);
                    progetto.isWithinRange = progetto.distanza <= this.radius;
                    featureStates.isWithinRange = progetto.isWithinRange;
                    featureStates.isSelected = progetto.isSelected && progetto.isWithinRange;
                    progetto.isSelected = progetto.isSelected && progetto.isWithinRange;
                }
                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, featureStates);
                return f;
            })
            .filter(f => f.properties.isSelected)
            .map(f => f.properties);
    }

    resetFiltroProgetti(): Array<any> {

        return this.progetti.features.map(f => {
            let progetto: Progetto = f.properties;
            progetto.distanza = null;
            progetto.isHighlighted = true;
            progetto.isWithinRange = true;
            progetto.isSelected = true;
            this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isWithinRange: true, isSelected: true, isHighlighted: true });
            return progetto;
        });
    }


    public subscribeToUpdates(obs: Observer<any>): void {
        this.mapUpdated.subscribe(obs);
    }
    public unsubscribeToUpdates(): void {
        this.mapUpdated.unsubscribe();
    }

    public subscribeProjectSelection(obs: Observer<any>): void {
        this.projectSelected.subscribe(obs);
    }
    public unsubscribeProjectSelection(): void {
        this.projectSelected.unsubscribe();
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
    publishUpdate(progetti: Array<Progetto>): void {
        this.mapUpdated.next({ temi: this.temi, categorie: this.categorie, progetti: lodash.uniqBy(progetti, (p: Progetto) => p.uid) });
    }

    publishSelectedProject(progetto?: Progetto): void {
        if (progetto && progetto.isWithinRange && lodash.isString(progetto.ocCodCategoriaSpesa)) {
            progetto.ocCodCategoriaSpesa = JSON.parse(progetto.ocCodCategoriaSpesa);
        }
        this.projectSelected.next(progetto);

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
        this.progetti.features
            .map(f => {
                let progetto: Progetto = f.properties;
                progetto.isHighlighted = (progetto.isSelected && (idRisultati.length == 0)) || lodash.includes(idRisultati, progetto.uid);

                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isHighlighted: progetto.isHighlighted });
            });
    }

    selectById(idRisultati: string[]) {
        this.progetti.features
            .map(f => {
                let progetto: Progetto = f.properties;
                progetto.isSelected = ((!lodash.isNil(idRisultati) && idRisultati.length == 0) && progetto.isSelected) || lodash.includes(idRisultati, progetto.uid);

                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isSelected: progetto.isSelected });
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

    private resetFiltroDistanza(publishUpdate: boolean = true, resetMapView: boolean = true) {
        if (resetMapView) {
            this.radius = 10;
            let easeOptions: mapboxgl.EaseToOptions = {
                center: [12.3959144, 41.909986],
                zoom: 4.8,
                duration: 500
            }

            this.map.easeTo(easeOptions);
        }
        lodash.map(this.temi, t => { t.isSelected = true; t.isActive = true; });
        lodash.map(this.categorie, c => {
            c.isSelected = true;
            c.isActive = true;
        });

        let progetti = this.resetFiltroProgetti();
        this.aggiornaAttivabilitaCategorie(true);
        if (publishUpdate) {
            this.publishUpdate(progetti);
        }
    }

    //sposta la mappa per mostrare il progetto  correntemente selezionato
    public easeToProgetto(options: any, progetto: Progetto, isOverlayPresent: boolean) {
        if (options && isOverlayPresent) {
            this.highlightById([progetto.uid]);
            //recupera coordinate progetto sullo schermo:
            let feature = this.progetti.features.filter(f => f.properties.uid == progetto.uid)[0];
            let markerScreenCoordinates = this.map.project([feature.properties.long, feature.properties.lat]);

            //devo spostare la mappa in alto in modo che il punto si trovi a 30px dal margine superiore della scheda progetto
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

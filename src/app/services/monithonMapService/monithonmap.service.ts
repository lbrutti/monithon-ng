import { Injectable } from '@angular/core';
import mapboxgl, { PointLike } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { default as MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import * as MapboxDrawGeodesic from 'mapbox-gl-draw-geodesic';
import { Progetto } from 'src/app/model/progetto/progetto';
import lodash from 'lodash';
import { Observer, Subject } from 'rxjs';

import '@turf/distance';
import { distance, point } from '@turf/turf';
import { COLOR_MAP } from 'src/app/utils/colorMap';


@Injectable({
    providedIn: 'root'
})
export class MonithonMapService {



    map: mapboxgl.Map;
    geocoder: any;
    // geolocator: mapboxgl.GeolocateControl;
    draw: any;
    rangeProgetti: any;
    temi: Array<any> = [];
    progetti: any;
    categorie: any;

    private mapUpdated: Subject<any> = new Subject();
    private projectSelected: Subject<any> = new Subject();
    categorieAttive: { ocCodCategoriaSpesa: any; ocCodTemaSintetico: any; isSelected: boolean; }[];
    filtroPerRaggioEnabled: boolean = false;
    reportFlags: any[] = [];
    statiAvanzamento: any[] = [];
    radiusFilterData: any = {
        "type": "FeatureCollection",
        "features": []
    };
    circle: any;
    radius: any;
    geocoderUpdate: Subject<any> = new Subject();
    comuneCorrente: any;
    navigationControl: mapboxgl.NavigationControl;
    geolocate: mapboxgl.GeolocateControl;


    constructor() {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    public renderMap(container, data, geocoderContainer, navigationControlContainer): void {

        this.map = new mapboxgl.Map({
            container: container,
            style: environment.mapbox.style,
            center: [12.3959144, 41.909986], //roma
            zoom: 4.8,
            antialias: false,
            attributionControl: false
        });

        let geocoderOptions = {
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: 'it',
            minLength: 3,
            language: 'it',
            //zoom: 3,
            filter: function (item: any) {
                return item.place_type[0] === 'place';
            },
            marker: false

        };

        this.geocoder = new MapboxGeocoder(geocoderOptions);
        this.navigationControl = new mapboxgl.NavigationControl({showCompass:false, visualizePitch:false});
        this.geolocate = new mapboxgl.GeolocateControl({
            showUserLocation: false,
            trackUserLocation: false,
            positionOptions: {
                enableHighAccuracy: false
            },
            fitBoundsOptions:{
                maxZoom:8
            }
        });
        this.geocoder.on('result', evt => {
            this.resetFiltroDistanza(false);
            let center = evt.result.center;
            this.comuneCorrente = evt.result.place_name;
            this.drawRangeProgetti(center);
            this.publishGeocoderUpdate();
        });
        geocoderContainer.appendChild(this.geocoder.onAdd(this.map));
        navigationControlContainer.appendChild(this.navigationControl.onAdd(this.map));
        navigationControlContainer.appendChild(this.geolocate.onAdd(this.map));

        let radiusFilterDrawStyle = [ // ACTIVE (being drawn)
            // line stroke
            {
                "id": "gl-draw-line",
                "type": "line",
                "filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#fff",
                    "line-width": 2
                }
            },
            // polygon fill
            {
                "id": "gl-draw-polygon-fill",
                "type": "fill",
                "filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
                "paint": {
                    "fill-color": "#235ba6",
                    "fill-outline-color": "#fff",
                    "fill-opacity": 0.1
                }
            },
            // polygon outline stroke
            // This doesn't style the first edge of the polygon, which uses the line stroke styling instead
            {
                "id": "gl-draw-polygon-stroke-active",
                "type": "line",
                "filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#fff",
                    // "line-dasharray": [0.2, 2],
                    "line-width": 2
                }
            },
            // vertex point halos
            {
                "id": "gl-draw-polygon-and-line-vertex-halo-active",
                "type": "circle",
                "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"], ['==', 'isHandle', "true"]],
                "paint": {
                    "circle-radius": 20,
                    "circle-color": "#FFF"
                }
            },
            // vertex points

            {
                "id": "gl-draw-polygon-and-line-vertex-active",
                "type": "circle",
                "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"], ['==', 'isHandle', "true"]],
                "paint": {
                    "circle-radius": 19,
                    "circle-color": "#235ba6",
                }
            },

        ];
        let modes = MapboxDraw.modes;
        modes = MapboxDrawGeodesic.enable(modes);
        const draw = new MapboxDraw({ modes });
        this.draw = new MapboxDraw({
            userProperties: true,
            styles: radiusFilterDrawStyle,
            modes: modes
        });
        this.map.addControl(this.draw, 'top-left');
        this.map.on('draw.update', (evt) => {
            const geojson = evt.features[0];
            let circleData = {
                center: MapboxDrawGeodesic.getCircleCenter(geojson),
                radius: MapboxDrawGeodesic.getCircleRadius(geojson)
            };

            this.filtroPerRaggioEnabled = true;
            this.filtraPerDistanza(circleData);
            this.publishGeocoderUpdate();
        });
        this.map.on('draw.create', (evt) => {
            const geojson = evt.features[0];
            let circleData = {
                center: MapboxDrawGeodesic.getCircleCenter(geojson),
                radius: MapboxDrawGeodesic.getCircleRadius(geojson)
            };
            this.filtroPerRaggioEnabled = true;
            this.map.setLayoutProperty('radius-value', 'visibility', 'visible');
            this.filtraPerDistanza(circleData);
        });
        this.map.on('draw.delete', (evt) => {
            //invocato alla cancellazione manuale del cerchio
            this.resetFiltroDistanza();
        });
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
                        'circle-color': [
                            'case',
                            ['!', ['boolean', ['feature-state', 'isHighlighted'], true]],
                            'transparent',
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
                            ['!', ['boolean', ['feature-state', 'isWithinRange'], true]],
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
                        'circle-stroke-width': 1
                    }
                });
            // this.map.on('zoom',  ()=> {
            //     console.log(this.map.getZoom());
            // });
            this.map
                .addLayer({
                    id: 'radius-value',
                    type: 'symbol',
                    source: 'radiusFilterData',
                    'layout': {
                        'text-field': ['get', 'radius'],
                        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                        'text-radial-offset': 0.5,
                        'text-justify': 'center',
                        'visibility': 'visible'
                    }
                });
            this.map.on('click', e => {
                //this.publishSelectedProject(null);

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
                    this.publishSelectedProject(null);
                }
            });

            this.map.scrollZoom.disable();
            this.map.resize();
            this.aggiornaAttivabilitaCategorie();
            navigationControlContainer.querySelector('.mapboxgl-ctrl-geolocate').click();

            this.publishUpdate(this.featureCollectionToProgetti());
        });


    }
    publishGeocoderUpdate() {
        let data = { comune: this.comuneCorrente, radius: this.radius }
        this.geocoderUpdate.next(data);
    }

    public setTemi(temi: Array<any>) {
        this.temi = temi.map((t) => ({ 'ocCodTemaSintetico': t.ocCodTemaSintetico, 'isSelected': true }));
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
                let jitteredCoords = this.addJitter()(p.lat, p.long, 0.1, false);
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
        this.circle = MapboxDrawGeodesic.createCircle(center, 10);
        this.circle.id = "range-center";
        this.draw.add(this.circle);

        this.filtroPerRaggioEnabled = true;
        this.filtraPerDistanza({
            center: center,
            radius: 10
        });
    }


    filtraPerTema(tema) {
        // rimuovi filtro su categorie non associate ai temi selezionati
        this.filtraCategorie(tema);
        let progetti = this.filtraProgetti();
        lodash.remove(progetti, p => !p.isSelected);
        this.publishUpdate(progetti);
    }
    resetFiltroTemi() {
        lodash.map(this.temi, t => { t.isSelected = true; t.isActive = true; });
        let progettiSelezionati = [];
        if (this.filtroPerRaggioEnabled) {
            progettiSelezionati = this.progetti.features.filter(p => p.properties.isWithinRange);
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
                // c.isActive = true;
            });

            // this.categorie.map(c => {
            //     // se non ho temi selezionati: tutte le categorie sono DESELEZIONATE  e visibili:
            //     if (temiSelezionati.length == 0) {
            //         c.isSelected = true;
            //         c.isActive = true;
            //     } else {
            //         c.isSelected =  lodash.includes(temiSelezionati, c.ocCodTemaSintetico);// && c.isSelected;
            //         c.isActive = true;//lodash.includes(temiSelezionati, c.ocCodTemaSintetico);
            //     }
            // });
        }
    }
    filtraPerCategoria() {
        let categoriePerTema = lodash.groupBy(this.categorie, c => c.ocCodTemaSintetico);

        lodash.map(categoriePerTema, (categorie, codiceTema) => {
            //quando deseleziono tutte le categorie di un tema-> lo deseleziono
            if (lodash.every(categorie, c => !c.isSelected) || lodash.every(categorie, c => !c.isActive)) {
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
        lodash.remove(progetti, p => !p.isSelected);
        this.publishUpdate(progetti);
    }


    /**
     * 
     * @param circleData : 
     */
    filtraPerDistanza(circleData?: any) {
        if (circleData) {
            (this.map.getSource('radiusFilterData') as any).setData({
                'type': 'Feature',
                'properties': {
                    ...circleData
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [circleData.center]
                }
            });
            let centerPoint = point(circleData.center);
            this.radius = circleData.radius;
            this.progetti.features.map(f => {
                let progetto = f.properties;
                progetto.distanza = distance(point(f.geometry.coordinates), centerPoint);
                progetto.isWithinRange = progetto.distanza <= this.radius;
                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, {
                    isWithinRange: progetto.isWithinRange,
                    isSelected: progetto.isWithinRange
                });
            });
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

        this.progetti.features
            .map(f => {
                let progetto = f.properties;
                // progetto.isSelected = (temiSelezionati.length == 0) || lodash.includes(temiSelezionati, progetto.ocCodTemaSintetico);
                // progetto.isSelected = progetto.isSelected && ((categorieSelezionate == 0) || (lodash.intersection(categorieSelezionate, progetto.ocCodCategoriaSpesa).length > 0));
                progetto.isSelected = ((categorieSelezionate == 0) || (lodash.intersection(categorieSelezionate, progetto.ocCodCategoriaSpesa).length > 0));
                if (this.filtroPerRaggioEnabled) {
                    progetto.isSelected = progetto.isSelected && progetto.isWithinRange;
                }
                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isSelected: progetto.isSelected });
            });
        return this.progetti.features.filter(f => f.properties.isSelected).map(f => f.properties);
    }

    resetFiltroProgetti(): Array<any> {
        this.progetti.features.map(f => {
            let progetto = f.properties;
            progetto.distanza = null;
            progetto.isWithinRange = true;
            progetto.isSelected = true;
            this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isWithinRange: progetto.isWithinRange, isSelected: true });
        });
        return this.progetti.features.filter(f => f.properties.isSelected).map(f => f.properties);
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
    publishUpdate(progetti: Array<Progetto>): void {
        this.mapUpdated.next({ temi: this.temi, categorie: this.categorie, progetti: lodash.uniqBy(progetti, p => p.uid) });
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
                let progetto = f.properties;
                progetto.isHighlighted = progetto.isSelected && (idRisultati.length == 0) || lodash.includes(idRisultati, progetto.uid);

                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isHighlighted: progetto.isHighlighted });
            });
    }

    selectById(idRisultati: string[]) {
        this.progetti.features
            .map(f => {
                let progetto = f.properties;
                progetto.isSelected = ((idRisultati.length == 0) && progetto.isSelected) || lodash.includes(idRisultati, progetto.uid);

                this.map.setFeatureState({ source: 'progetti', id: progetto.uid }, { isSelected: progetto.isSelected });
            });
    }

    /**
     * invocato programmaticamente allo svuotamento del gecoder
     */
    public removeRadiusFilter() {
        this.draw.delete(this.circle.id);
        this.resetFiltroDistanza();
    }

    private resetFiltroDistanza(publishUpdate: boolean = true) {
        this.circle = null;
        this.filtroPerRaggioEnabled = false;

        lodash.map(this.temi, t => { t.isSelected = true; t.isActive = true; });
        lodash.map(this.categorie, c => {
            c.isSelected = true;
            c.isActive = true;
        });

        this.map.setLayoutProperty('radius-value', 'visibility', 'none');
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
            // if ((markerScreenCoordinates.x < options.width) && (options.y < markerScreenCoordinates.y)) {
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
            // }
        } else if (!isOverlayPresent) {
            // this.highlightById([]);
            // (this.map as any).easeTo({ padding: { bottom: 0 }, duration: 1000 , zoom:10});
        }

    }
}

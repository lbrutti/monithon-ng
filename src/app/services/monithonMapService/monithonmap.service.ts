import { Injectable } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { default as MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';

import {
    CircleMode,
    DragCircleMode,
    DirectMode,
    SimpleSelectMode
} from 'mapbox-gl-draw-circle';
import circle from '@turf/circle';
import { Progetto } from 'src/app/model/progetto/progetto';
import lodash, { groupBy } from 'lodash';
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
    geolocator: mapboxgl.GeolocateControl;
    draw: any;
    rangeProgetti: any;
    temi: Array<any> = [];
    progetti: any;
    categorie: any;

    private mapUpdated: Subject<any> = new Subject();
    private projectSelected: Subject<any> = new Subject();
    categorieAttive: { ocCodCategoriaSpesa: any; ocCodTemaSintetico: any; isSelected: boolean; }[];
    filtroPerRaggioEnabled: boolean = false;


    constructor() {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    public renderMap(container, data): void {

        this.map = new mapboxgl.Map({
            container: container,
            style: environment.mapbox.style,
            center: [12.3959144, 41.909986], //roma
            zoom: 6,
            antialias: false,
            attributionControl: false
        });

        let geocoderOptions: any = {
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: 'it',
            minLength: 3
        };

        this.geocoder = new MapboxGeocoder(geocoderOptions);


        this.geocoder.on('result', evt => {
            let center = evt.result.center;
            this.drawRangeProgetti(center);
        });

        this.map.addControl(
            this.geocoder
        );

        this.geolocator = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: false
        });
        this.geolocator.on('geolocate', (evt: any) => {
            let center = [evt.coords.longitude, evt.coords.latitude];
            this.drawRangeProgetti(center);
        });
        this.map.addControl(this.geolocator);
        this.draw = new MapboxDraw({
            userProperties: true,
            modes: {
                ...MapboxDraw.modes,
                draw_circle: CircleMode,
                drag_circle: DragCircleMode,
                direct_select: DirectMode,
                simple_select: SimpleSelectMode
            }
        });
        this.map.addControl(this.draw, 'top-left');
        this.map.on('draw.update', (evt) => {
            let circleData = {
                center: lodash.get(evt, 'features[0].properties.center'),
                radius: lodash.get(evt, 'features[0].properties.radiusInKm')
            };
            this.filtroPerRaggioEnabled = true;
            this.filtraPerDistanza(circleData);
        });
        this.map.on('draw.create', (evt) => {
            let circleData = {
                center: lodash.get(evt, 'features[0].properties.center'),
                radius: lodash.get(evt, 'features[0].properties.radiusInKm')
            };
            this.filtroPerRaggioEnabled = true;
            this.filtraPerDistanza(circleData);
        });
        this.map.on('draw.delete', (evt) => {

            this.filtroPerRaggioEnabled = false;
            this.filtraProgetti();
        });
        this.map.on('load', () => {
            this.progettiToFeatureCollection(data);

            this.map
                .addSource('progetti', {
                    type: 'geojson',
                    data: this.progetti,
                    promoteId: 'codLocaleProgetto'
                });

            //refactoring come singolo layer di progetti:


            let layerId = 'progetti-layer'
            this.map
                .addLayer({
                    'id': layerId,
                    'type': 'circle',
                    'source': 'progetti',
                    'paint': {
                        'circle-radius': 3,
                        'circle-color': [
                            'case',
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['!', ['boolean', ['feature-state', 'isWithinRange'], true]]],
                            COLOR_MAP.temi.default,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 4]],
                            COLOR_MAP.temi.energia,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 5]],
                            COLOR_MAP.temi.ambiente,
                            ['all', ['boolean', ['feature-state', 'isSelected'], true], ['==', ['get', 'ocCodTemaSintetico'], 6]],
                            COLOR_MAP.temi.attrazione,
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
                            'transparent'
                        ],
                        'circle-stroke-width': 1
                    }
                });

            this.map.on('click', e => {

                this.publishSelectedProject();
            });
            this.map.on('click', 'progetti-layer', e => {
                if (e.features.length) {
                    let feature = e.features[0];
                    this.publishSelectedProject((feature.properties as Progetto));
                } else {
                    this.publishSelectedProject();

                }
            });
            this.map.resize();
            this.publishUpdate(this.featureCollectionToProgetti());
        });


    }

    public setTemi(temi: Array<any>) {
        this.temi = temi.map((t) => ({ 'ocCodTemaSintetico': t.ocCodTemaSintetico, 'isSelected': false }));
    }

    public setCategorie(categorie: Array<any>) {
        this.categorie = categorie.map((c) => ({
            'ocCodCategoriaSpesa': c.ocCodCategoriaSpesa,
            'ocCodTemaSintetico': c.ocCodTemaSintetico,
            'isSelected': false,
            'isVisible': true
        }));
    }
    private progettiToFeatureCollection(data: Array<Progetto>): any {
        this.progetti = {
            "type": "FeatureCollection",
            "features": data.map((p: Progetto, idx) => {
                let properties: any = Object.assign({}, p);
                properties.isSelected = true;
                properties.isWithinRange = true;
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
        this.rangeProgetti = {
            id: 'range_progetti',
            type: 'Feature',
            properties: { center: center, isCircle: true, radiusInKm: 10 },
            geometry: {
                type: 'Polygon', coordinates: circle(center, 10).geometry.coordinates
            }
        };
        this.draw.add(this.rangeProgetti);
        this.filtroPerRaggioEnabled = true;
        this.filtraPerDistanza({
            center: center,
            radius: 10
        });
    }


    filtraPerTema() {
        // rimuovi filtro su categorie non associate ai temi selezionati
        this.filtraCategorie();
        let progetti = this.filtraProgetti();
        lodash.remove(progetti, p => !p.isSelected);
        this.publishUpdate(progetti);
    }



    filtraCategorie() {
        let categorieSelezionate = this.categorie.filter(c => c.isSelected);
        let temiSelezionati = this.temi.filter(t => t.isSelected).map(t => t.ocCodTemaSintetico);

        if (categorieSelezionate.length == 0) {
            //nascondo le categorie non pertinenti al tema
            this.categorie.map(c => c.isVisible = temiSelezionati.length == 0 || lodash.includes(temiSelezionati, c.ocCodTemaSintetico));
        } else {
            // se ho categorie selezionate, le mantengo tali sse il loro tema di pertinenza è selezionato o non ci sono temi selezionati
            this.categorie.map(c => {
                // se non ho temi selezionati: tutte le categorie sono DESELEZIONATE  e visibili:
                if (temiSelezionati.length == 0) {
                    c.isSelected = false;
                    c.isVisible = true;
                } else {
                    c.isSelected = lodash.includes(temiSelezionati, c.ocCodTemaSintetico) && c.isSelected;
                    c.isVisible = lodash.includes(temiSelezionati, c.ocCodTemaSintetico);
                }
            });
        }
    }
    filtraPerCategoria() {
        let progetti = this.filtraProgetti();
        lodash.remove(progetti, p => !p.isSelected);
        this.publishUpdate(progetti);
    }


    /**
     * 
     * @param circleData : 
     */
    filtraPerDistanza(circleData: any) {
        let centerPoint = point(circleData.center);
        let radius = circleData.radius;
        this.progetti.features.map(f => {
            let progetto = f.properties;
            progetto.isWithinRange = distance(point(f.geometry.coordinates), centerPoint) <= radius
            this.map.setFeatureState({ source: 'progetti', id: progetto.codLocaleProgetto }, { isWithinRange: progetto.isWithinRange });
        });

        let progetti = this.filtraProgetti();
        this.publishUpdate(progetti);
    }

    filtraProgetti(): Array<any> {
        let temiSelezionati = this.temi.filter(t => t.isSelected).map(t => t.ocCodTemaSintetico);
        let categorieSelezionate = this.categorie.filter(c => {
            return (temiSelezionati.length == 0 || lodash.includes(temiSelezionati, c.ocCodTemaSintetico)) && c.isSelected;
        }).map(c => c.ocCodCategoriaSpesa);
        this.progetti.features
            .map(f => {
                let progetto = f.properties;
                progetto.isSelected = (temiSelezionati.length == 0) || lodash.includes(temiSelezionati, progetto.ocCodTemaSintetico);
                progetto.isSelected = progetto.isSelected && ((categorieSelezionate == 0) || (lodash.intersection(categorieSelezionate, progetto.ocCodCategoriaSpesa).length > 0));
                if (this.filtroPerRaggioEnabled) {
                    progetto.isSelected = progetto.isSelected && progetto.isWithinRange;
                }
                this.map.setFeatureState({ source: 'progetti', id: progetto.codLocaleProgetto }, { isSelected: progetto.isSelected });
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

    publishUpdate(progetti: Array<Progetto>): void {
        this.mapUpdated.next({ temi: this.temi, categorie: this.categorie, progetti: progetti });
    }

    publishSelectedProject(progetto?: Progetto): void {
        console.log(progetto);
        if (progetto && lodash.isString(progetto.ocCodCategoriaSpesa)) {
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
}

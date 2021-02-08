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

    public mapUpdated: Subject<any> = new Subject();


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
            this.filtraPerDistanza(circleData);
        });
        this.map.on('draw.create', (evt) => {
            let circleData = {
                center: lodash.get(evt, 'features[0].properties.center'),
                radius: lodash.get(evt, 'features[0].properties.radiusInKm')
            };
            this.filtraPerDistanza(circleData);
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
            this.temi = lodash.chain(this.progetti.features)
                .groupBy(f => f.properties.ocCodTemaSintetico)
                .map((temi, ocCodTemaSintetico) => ({ 'ocCodTemaSintetico': ocCodTemaSintetico, 'ocTemaSintetico': lodash.get(temi, '[0].properties.ocTemaSintetico'), 'isSelected': true }))
                .value();
            this.aggiornaTemiSelezionati();
            this.getCategorie();

            let layerId = 'progetti-layer'
            //aggiungere un layer per ogni categoria di progetto (vedi https://codepen.io/lbrutti/pen/WNoeKLW?editors=0010)
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

            this.map.on('click', 'progetti-layer', function (e) {
                if (e.features.length) {
                    let feature = e.features[0];
                    console.log(feature.id);
                }
            });

            this.publishUpdate(this.featureCollectionToProgetti());
        });


    }

    private progettiToFeatureCollection(data: Array<Progetto>): any {
        this.progetti = {
            "type": "FeatureCollection",
            "features": data.map((p: Progetto, idx) => {
                let properties: any = Object.assign({}, p);
                properties.isSelected = true;
                properties.isWithinRange = true;

                return {
                    "type": "Feature",
                    "properties": properties,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [p.coordinate.lng, p.coordinate.lat]
                    }
                };
            })
        };
    }

    private featureCollectionToProgetti(): Array<Progetto> {
        let progetti: Array<Progetto> = this.progetti.features.map(feat => feat.properties);
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
        this.filtraPerDistanza({
            center: center,
            radius: 10
        });
    }

    filtraPerTema() {
        this.aggiornaTemiSelezionati();
        let progetti = [];
        this.temi.map(t => {
            this.progetti.features
                .map(f => {
                    let progetto = f.properties;
                    if (progetto.ocCodTemaSintetico == t.ocCodTemaSintetico) {
                        progetto.isSelected = t.isSelected;
                        progetti.push(f.properties);
                    }
                    this.map.setFeatureState({ source: 'progetti', id: progetto.codLocaleProgetto }, { isSelected: progetto.isSelected })
                });
        });

        lodash.remove(progetti, p => !p.isSelected);
        this.getCategorie();
        this.publishUpdate(progetti);
    }

    private aggiornaTemiSelezionati() {
        if (lodash.every(this.temi, t => !t.isSelected)) {
            this.temi.map(t => t.isSelected = true);
        }
    }

    filtraPerCategoria() {
        let progetti = [];
        this.aggiornaCategorieSelezionate();

        // ciclo le progetti  e li setto a selezionati se matchano per tema e categoria e la categoria è selezionata
        this.progetti.features.map(f => {
            let progetto = f.properties;
            let categoriaProgetto = this.categorie.find(c => (c.ocCodTemaSintetico == progetto.ocCodTemaSintetico && c.ocCodCategoriaSpesa == progetto.ocCodCategoriaSpesa));
            progetto.isSelected = categoriaProgetto.isSelected;
            progetti.push(progetto);
            this.map.setFeatureState({ source: 'progetti', id: progetto.codLocaleProgetto }, { isSelected: progetto.isSelected });

        });
        lodash.remove(progetti, p => !p.isSelected);
        this.publishUpdate(progetti);
    }



    private aggiornaCategorieSelezionate() {
        if (lodash.every(this.categorie, c => !c.isSelected)) {
            this.categorie.map(c => c.isSelected = true);
        }
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
        this.publishUpdate(this.progetti.features.filter(f => f.properties.isSelected && f.properties.isWithinRange).map(f => f.properties));
    }

    getCategorie(): any[] {
        let categorieAttive = this.progetti
            .features.filter(feature => lodash.find(this.temi, tema => tema.isSelected && tema.ocCodTemaSintetico == feature.properties.ocCodTemaSintetico));
        this.categorie = lodash.chain(categorieAttive)
            .map(feature => {
                let categoria = {
                    ocCodCategoriaSpesa: feature.properties.ocCodCategoriaSpesa,
                    ocDescrCategoriaSpesa: feature.properties.ocDescrCategoriaSpesa || 'none',
                    ocCodTemaSintetico: feature.properties.ocCodTemaSintetico,
                    isSelected: true
                };
                return categoria;
            })
            .uniqBy(cat => cat.ocCodTemaSintetico + cat.ocCodCategoriaSpesa)
            .value();

        return this.categorie;
    }

    public subscribeToUpdates(obs: Observer<any>): void {
        this.mapUpdated.subscribe(obs);
    }
    public unsubscribeToUpdates(): void {
        this.mapUpdated.unsubscribe();
    }

    publishUpdate(progetti): void {
        this.mapUpdated.next({ temi: this.temi, categorie: this.categorie, progetti: progetti });
    }

}

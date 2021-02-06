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
import lodash from 'lodash';
import { Observer, Subject } from 'rxjs';

import '@turf/distance';
import { distance, point } from '@turf/turf';

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
            this.filterByRadius(circleData);
        });
        this.map.on('draw.create', (evt) => {
            let circleData = {
                center: lodash.get(evt, 'features[0].properties.center'),
                radius: lodash.get(evt, 'features[0].properties.radiusInKm')
            };
            this.filterByRadius(circleData);
        });

        this.map.on('load', () => {
            this.map
                .addSource('progetti', {
                    type: 'geojson',
                    data: {
                        "type": "FeatureCollection",
                        "features": []
                    },
                    cluster: false,
                    clusterMaxZoom: 14, // Max zoom to cluster points on
                    clusterRadius: 50 //
                });

            let progettiSource: mapboxgl.GeoJSONSource = (this.map.getSource('progetti') as mapboxgl.GeoJSONSource);
            this.progettiToFeatureCollection(data);
            progettiSource.setData(this.progetti);

            let colors = { '4': '#ff0000', '5': '#00ff00', '6': '#0000ff' };
            //refactoring come singolo layer di progetti:
            this.temi = lodash.chain(this.progetti.features)
                .groupBy(f => f.properties.ocCodTemaSintetico)
                .map((temi, ocCodTemaSintetico) => ({ 'ocCodTemaSintetico': ocCodTemaSintetico, 'ocTemaSintetico': lodash.get(temi, '[0].properties.ocTemaSintetico'), 'isSelected': true }))
                .value();

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
                            ['==', ['get', 'ocCodTemaSintetico'], 4],
                            colors['4'],
                            ['==', ['get', 'ocCodTemaSintetico'], 5],
                            colors['5'],
                            ['==', ['get', 'ocCodTemaSintetico'], 6],
                            colors['6'],
                            '#ffffff'
                        ],
                        // 'circle-opacity': ['match', ['get','isSelected'], true, 1, 0.5]
                    },
                    'filter': ['all', ['get', 'isWithinRange'], ['get', 'matchesTema'], ['get', 'matchesCategoria']]
                });

            this.getCategorie();
            this.publishUpdate(this.featureCollectionToProgetti());
        });


    }

    private progettiToFeatureCollection(data: Array<Progetto>): any {
        this.progetti = {
            "type": "FeatureCollection",
            "features": data.map((p: Progetto) => {
                let properties: any = Object.assign({}, p);
                properties.isSelected = true;
                properties.isWithinRange = true;
                properties.matchesTema = true;
                properties.matchesCategoria = true;

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
        this.filterByRadius({
            center: center,
            radius: 10
        });
    }

    filterByTema() {
        let layerId = `progetti-layer`;
        let progetti = [];
        this.temi.map(t => {
            this.progetti.features
                .map(f => {
                    if (f.properties.ocCodTemaSintetico == t.ocCodTemaSintetico) {
                        f.properties.matchesTema = t.isSelected;
                        f.properties.isSelected = f.properties.matchesTema;
                        progetti.push(f.properties);
                    }
                });
        });
        let temiSelezionati = this.temi.filter(t => t.isSelected);
        if (lodash.every(this.temi, t => !t.isSelected)) {
            this.temi.map(t => t.isSelected = true);
            temiSelezionati = this.temi;
        }
        let codiciTema = temiSelezionati.map(t => +t.ocCodTemaSintetico);
        let newFilter = ['match', ['get', 'ocCodTemaSintetico'], codiciTema, true, false];
        this.map.setFilter(layerId, newFilter);
        lodash.remove(progetti, p => !p.isSelected);
        this.getCategorie();
        this.publishUpdate(progetti);
    }

    filterByCategoria() {
        let categorieSelezionate = this.categorie.filter(cat => cat.isSelected);
        if (lodash.every(this.categorie, c => !c.isSelected)) {
            this.categorie.map(c => c.isSelected = true);
            categorieSelezionate = this.categorie;
        }
        let progetti = [];
        categorieSelezionate.map(c => {
            this.progetti.features
                .map(f => {
                    if (f.properties.ocCodCategoriaSpesa == c.ocCodCategoriaSpesa) {
                        f.properties.matchesCategoria = c.isSelected;
                        f.properties.isSelected = f.properties.matchesCategoria;
                        progetti.push(f.properties);
                    }
                });
        });
        let layerId = `progetti-layer`;
        //occhio ai temi! per la categoria "nulla" non devono esserci sovrapposizioni
        this.map.setFilter(layerId, [
            'match',
            ['get', 'ocCodCategoriaSpesa'],
            categorieSelezionate.map(function (cat) {
                return cat.ocCodCategoriaSpesa;
            }),
            true,
            false
        ]);
        this.publishUpdate(progetti);
    }

    /**
     * 
     * @param circleData : 
     */
    filterByRadius(circleData: any) {
        let centerPoint = point(circleData.center);
        let radius = circleData.radius;
        let withinRange = this.progetti.features.filter(f => {
            let featPoint = point(f.geometry.coordinates);
            return distance(featPoint, centerPoint) <= radius
        });
        console.dir(withinRange);
    }

    getCategorie(): any[] {
        let categorieAttive = this.progetti
            .features.filter(feature => lodash.find(this.temi, tema => tema.isSelected && tema.ocCodTemaSintetico == feature.properties.ocCodTemaSintetico));
        this.categorie = lodash.chain(categorieAttive)
            .map(feature => {
                let categoria = {
                    ocCodCategoriaSpesa: feature.properties.ocCodCategoriaSpesa,
                    ocDescrCategoriaSpesa: feature.properties.ocDescrCategoriaSpesa,
                    isSelected: true
                };
                return categoria;
            })
            .uniqBy(cat => cat.ocCodCategoriaSpesa)
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
        // let progettiSelezionati = this.featureCollectionToProgetti().filter((p: any) => p.isSelected);
        this.mapUpdated.next({ temi: this.temi, categorie: this.categorie, progetti: progetti });
    }

}

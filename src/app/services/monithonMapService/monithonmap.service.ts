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
    features: any;
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
            console.log('draw.update');
            console.dir(evt);
        });
        this.map.on('draw.create', (evt) => {
            console.log('draw.create');
            console.dir(evt);
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
            progettiSource.setData(this.features);
            let colors = { 'tema-4': '#ff0000', 'tema-5': '#00ff00', 'tema-6': '#0000ff' };
            this.features.features.forEach(feature => {
                let ocCodTemaSintetico = feature.properties.ocCodTemaSintetico;
                let layerId = `tema-${ocCodTemaSintetico}`;
                //aggiungere un layer per ogni categoria di progetto (vedi https://codepen.io/lbrutti/pen/WNoeKLW?editors=0010)
                if (!this.map.getLayer(layerId)) {
                    let ocTemaSintetico = feature.properties.ocTemaSintetico;
                    let tema = { 'layerId': layerId, 'ocCodTemaSintetico': ocCodTemaSintetico, 'ocTemaSintetico': ocTemaSintetico, 'isSelected': true };
                    this.temi.push(tema);
                    this.map
                        .addLayer({
                            'id': layerId,
                            'type': 'circle',
                            'source': 'progetti',
                            'paint': {
                                'circle-radius': 3,
                                'circle-color': colors[layerId] || '#ffffff',
                                // 'circle-opacity': ['match', ['get','isSelected'], true, 1, 0.5]
                            },
                            'filter': ['==', 'ocCodTemaSintetico', ocCodTemaSintetico]
                        });
                }
                this.getCategorie();
            });
            this.publishUpdate(this.featureCollectionToProgetti());
        });


    }

    private progettiToFeatureCollection(data: Array<Progetto>): any {
        this.features = {
            "type": "FeatureCollection",
            "features": data.map((p: Progetto) => {
                let properties: any = Object.assign({}, p);
                properties.isSelected = true;
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
        let progetti: Array<Progetto> = this.features.features.map(feat => feat.properties);
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
    }

    filterByTema(tema: any) {
        let layerId = `tema-${tema.ocCodTemaSintetico}`;
        this.map.setLayoutProperty(
            layerId,
            'visibility',
            tema.isSelected ? 'visible' : 'none'
        );
        let progetti = [];
        this.temi.map(t => {
            this.features.features
                .filter(f => f.properties.ocCodTemaSintetico == t.ocCodTemaSintetico)
                .map(f => { f.properties.isSelected = t.isSelected; progetti.push(f.properties); });
        });
        lodash.remove(progetti, p => !p.isSelected);
        this.getCategorie();
        this.publishUpdate(progetti);
    }

    filterByCategoria(categoria: any) {
        let categorieSelezionate = this.categorie.filter(cat => cat.isSelected);
        let temiSelezionati = this.temi.filter(tema => tema.isSelected);

        temiSelezionati.map(tema => {
            let layerId = `tema-${tema.ocCodTemaSintetico}`;
            this.map.setFilter(layerId, [
                'match',
                ['get', 'ocCodCategoriaSpesa'],
                categorieSelezionate.map(function (cat) {
                    return cat.ocCodCategoriaSpesa;
                }),
                true,
                false
            ]);
        });
        this.publishUpdate([]);
    }

    getCategorie(): any[] {
        let categorieAttive = this.features.features.filter(feature => lodash.find(this.temi, tema => tema.isSelected && tema.ocCodTemaSintetico == feature.properties.ocCodTemaSintetico));
        this.categorie = lodash.chain(categorieAttive)
            .map(feature => {
                let categoria = {
                    ocCodCategoriaSpesa: feature.properties.ocCodCategoriaSpesa,
                    ocDescrCategoriaSpesa: feature.properties.ocDescrCategoriaSpesa
                }
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
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

@Injectable({
    providedIn: 'root'
})
export class MonithonMapService {

    map: mapboxgl.Map;
    geocoder: any;
    geolocator: mapboxgl.GeolocateControl;
    draw: any;
    rangeProgetti: any;
    temi: Array<any>=[];

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
                    }
                });

            let progettiSource: mapboxgl.GeoJSONSource = (this.map.getSource('progetti') as mapboxgl.GeoJSONSource);
            let progettiData = this.progettiToFeatureCollection(data);
            progettiSource.setData(progettiData);
            let colors = {'tema-4':'#ff0000','tema-5': '#00ff00', 'tema-6':'#0000ff'};
            progettiData.features.forEach(feature => {
                let ocCodTemaSintetico = feature.properties.ocCodTemaSintetico;
                let layerId = `tema-${ocCodTemaSintetico}`;
                //aggiungere un layer per ogni categoria di progetto (vedi https://codepen.io/lbrutti/pen/WNoeKLW?editors=0010)
                if (!this.map.getLayer(layerId)) {
                    let ocTemaSintetico = feature.properties.ocTemaSintetico;
                    this.temi.push({ 'layerId': layerId, 'ocCodTemaSintetico': ocCodTemaSintetico, 'ocTemaSintetico': ocTemaSintetico, 'isSelected':true});
                    this.map
                        .addLayer({
                            'id': layerId,
                            'type': 'circle',
                            'source': 'progetti',
                            'paint': {
                                'circle-radius': 3,
                                'circle-color': colors[layerId] || '#ffffff'
                            },
                            'filter': ['==', 'ocCodTemaSintetico', ocCodTemaSintetico]
                        });
                }

            });
        });

    }

    private progettiToFeatureCollection(data: Array<Progetto>): any {
        return {
            "type": "FeatureCollection",
            "features": data.map((p: Progetto) => {
                let properties: any = Object.assign({}, p);
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

    public getMapLayersId():Array<any>{
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

    toggleLayer(tema: any) {
        let layerId = `tema-${tema.ocCodTemaSintetico}`;
        this.map.setLayoutProperty(
            layerId,
            'visibility',
            tema.isSelected ? 'visible' : 'none'
        );
    }

}

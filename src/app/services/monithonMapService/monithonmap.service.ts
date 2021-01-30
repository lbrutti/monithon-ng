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

@Injectable({
    providedIn: 'root'
})
export class MonithonMapService {
    map: mapboxgl.Map;
    geocoder: any;
    geolocator: mapboxgl.GeolocateControl;
    draw: any;
    rangeProgetti: any;

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

            this.map
                .addLayer({
                    'id': 'progetti-layer',
                    'type': 'circle',
                    'source': 'progetti',
                    'paint': {
                        'circle-radius': 3,
                        'circle-color': '#B42222'
                    }
                });

            let progettiSource: mapboxgl.GeoJSONSource = (this.map.getSource('progetti') as mapboxgl.GeoJSONSource);
            progettiSource.setData({
                "type": "FeatureCollection",
                "features": data.map((p: any) => {
                    return {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [parseFloat(p.coordinate.lng.replace(',', '.')), parseFloat(p.coordinate.lat.replace(',', '.'))]
                        }
                    };
                })

            });




        })

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

}

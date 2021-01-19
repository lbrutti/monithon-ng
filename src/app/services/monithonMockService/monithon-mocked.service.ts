import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import * as listaProgetti from './mock/listaProgetti';
import * as dettagliProgetti from './mock/dettagliProgetti';

@Injectable({
    providedIn: 'root'
})
export class MonithonMockedService {

    constructor() { }
    private static listaProgetti(): any[] {
        return listaProgetti.listaProgetti;
    }
    private static dettaglioProgetto(): any[] {
        return dettagliProgetti;
    }

    public mirageJsServer(): Server {
        return new Server({
            routes(): void {
                this.namespace = 'monithon-api';
                this.urlPrefix = 'http://localhost:4200'
                this.get('/progetti', () => {
                    return MonithonMockedService.listaProgetti();
                });

                this.get('/progetti/dettaglio', () => {
                    return MonithonMockedService.dettaglioProgetto();
                });
                //mapbox passthrough
                this.passthrough('https://api.mapbox.com/**');
                this.passthrough('https://events.mapbox.com/**');

                //dc.js example
                this.passthrough('https://dc-js.github.io/**');

            },
        });
    }
}

import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import * as listaProgetti from './mock/listaProgetti';
import dettagliProgetti from './mock/dettagliProgetti';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MonithonMockedService {

    constructor() { }
    private static listaProgetti(): any[] {
        return listaProgetti.listaProgetti;
    }
    private static dettaglioProgetto(codLocaleProgetto: string): any[] {
        return dettagliProgetti.filter(p => p.codLocaleProgetto == codLocaleProgetto);
    }

    public mirageJsServer(): Server {
        return new Server({
            routes(): void {
                this.namespace = 'monithon-api';
                this.urlPrefix = `${environment.server.protocol}://${environment.server.ip}:${environment.server.port}`;
                this.get('/progetti', () => {
                    return MonithonMockedService.listaProgetti();
                });

                this.get('/progetti/dettaglio/:id', (schema, request) => {
                    let codLocaleProgetto = request.params.id
                    return MonithonMockedService.dettaglioProgetto(codLocaleProgetto);
                });
                //mapbox passthrough
                this.passthrough('https://api.mapbox.com/**');
                this.passthrough('https://events.mapbox.com/**');
                this.passthrough('http://192.168.1.142:4200/**');


                // //dc.js example
                // this.passthrough('https://dc-js.github.io/**');

            },
        });
    }
}

import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import listaProgettiTotali from './mock/listaProgettiTotali';
import dettagliProgetti from './mock/dettagliProgetti';
import progettiMinimi from './mock/progettiMinimi';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MonithonMockedService {

    constructor() { }
    private static listaProgetti(): any[] {
        return listaProgettiTotali
            .map(p => ({
                'codLocaleProgetto': p.codLocaleProgetto,
                'ocCodTemaSintetico': p.ocCodTemaSintetico,
                'ocCodCategoriaSpesa': p.ocCodCategoriaSpesa,
                'coordinate': p.coordinate,
                'ocTitoloProgetto': p.ocTitoloProgetto,
                'ocDataInizioProgetto': p.ocDataInizioProgetto,
                'ocFinanzTotPubNetto': p.ocFinanzTotPubNetto
            }));
    }

    private static listaProgettiMinimi():any[]{
        return progettiMinimi;
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

                this.get('/progetti/minimi', () => {
                    return MonithonMockedService.listaProgetti();
                });
                //mapbox passthrough
                this.passthrough('https://api.mapbox.com/**');
                this.passthrough('https://events.mapbox.com/**');
                this.passthrough('http://192.168.1.142:4200/**');
                this.passthrough('http://localhost:4200/assets/*');


                // //dc.js example
                // this.passthrough('https://dc-js.github.io/**');

            },
        });
    }
}

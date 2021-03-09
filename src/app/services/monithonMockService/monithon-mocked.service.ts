import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import listaProgettiTotaliCodCategorieFixed from '../../../assets/mock/listaProgetti_v3';
import dettagliProgettiTotaliCodCategorieFixed from '../../../assets/mock/dettaglioProgetti_v3';
import temi from '../../../assets/mock/temi';
import categorie from '../../../assets/mock/categorie';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MonithonMockedService {

    constructor() { }
    private static listaProgetti(): any[] {
        return listaProgettiTotaliCodCategorieFixed
    }

    private static dettaglioProgetto(codLocaleProgetto: string): any[] {
        return dettagliProgettiTotaliCodCategorieFixed.filter(p => p.codLocaleProgetto == codLocaleProgetto);
    }

    private static temi() {
        return temi;
    }

    private static categorie() {
        return categorie;
    }
    public mirageJsServer(): Server {
        return new Server({
            routes(): void {
                this.namespace = 'monithon-api';
                this.urlPrefix = `${environment.server.protocol}://${environment.server.ip}:${environment.server.port}`;
                this.get('/progetti', () => {
                    return MonithonMockedService.listaProgetti();
                });

                this.get('/progetti/dettaglio/:id', (_schema, request) => {
                    let codLocaleProgetto = request.params.id
                    return MonithonMockedService.dettaglioProgetto(codLocaleProgetto);
                });

                this.get('/progetti/minimi', () => {
                    return MonithonMockedService.listaProgetti();
                });

                this.get('/temi', () => {
                    return MonithonMockedService.temi();
                });

                this.get('/categorie', () => {
                    return MonithonMockedService.categorie();
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

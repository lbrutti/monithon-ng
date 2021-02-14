import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import listaProgettiTotaliCodCategorieFixed from './mock/listaProgettiTotaliCodCategorieFixed';
import dettagliProgettiTotaliCodCategorieFixed from './mock/dettagliProgettiTotaliCodCategorieFixed';
dettagliProgettiTotaliCodCategorieFixed
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MonithonMockedService {

    constructor() { }
    private static listaProgetti(): any[] {
        return listaProgettiTotaliCodCategorieFixed
            // .map(p => {
            //     let processedProject = {
            //         'codLocaleProgetto': p.codLocaleProgetto,
            //         'ocCodTemaSintetico': p.ocCodTemaSintetico,
            //         'ocCodCategoriaSpesa': [...p.ocCodCategoriaSpesa.split(',').map(c => parseInt(c))],
            //         'coordinate': p.coordinate,
            //         'ocTitoloProgetto': p.ocTitoloProgetto,
            //         'ocDataInizioProgetto': p.ocDataInizioProgetto,
            //         'ocFinanzTotPubNetto': p.ocFinanzTotPubNetto,
            //         'ocStatoProgetto': p.ocStatoProgetto,
            //         'monithonReports': Math.random() * 10 > 5 ? [] : ['https://dev.monithon.it/report/view/107', 'https://dev.monithon.it/report/view/108']
            //     };
            //     return processedProject;
            // });
    }

    private static dettaglioProgetto(codLocaleProgetto: string): any[] {
        return dettagliProgettiTotaliCodCategorieFixed.filter(p => p.codLocaleProgetto == codLocaleProgetto);
    }

    private static temi() {
        return [{ 'ocCodTemaSintetico': 4 },
        { 'ocCodTemaSintetico': 5 },
        { 'ocCodTemaSintetico': 6 }];
    }

    private static categorie() {
        let codiciCategoria = [
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 17 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 18 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 19 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 20 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 21 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 22 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 23 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 84 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 85 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 86 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 87 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 88 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 89 },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': 90 },

            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': 91 },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': 92 },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': 93 },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': 94 },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': 95 },

            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 9 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 10 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 11 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 12 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 13 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 14 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 15 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 16 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 68 },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': 70 }]
        return codiciCategoria;
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

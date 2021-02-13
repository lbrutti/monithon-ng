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
                'ocFinanzTotPubNetto': p.ocFinanzTotPubNetto,
                'ocStatoProgetto': p.ocStatoProgetto,
                'monithonReports': Math.random() * 10 > 5 ? [] : ['https://dev.monithon.it/report/view/107', 'https://dev.monithon.it/report/view/108']
            }));
    }

    private static listaProgettiMinimi(): any[] {
        return progettiMinimi;
    }
    private static dettaglioProgetto(codLocaleProgetto: string): any[] {
        return dettagliProgetti.filter(p => p.codLocaleProgetto == codLocaleProgetto);
    }

    private static temi() {
        return [{ 'ocCodTemaSintetico': 4 },
                { 'ocCodTemaSintetico': 5 },
                { 'ocCodTemaSintetico': 6 }];
    }

    private static categorie() {
        let codiciCategoria = [
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "017" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "018" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "019" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "020" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "021" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "022" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "023" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "084" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "085" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "086" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "087" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "088" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "089" },
            { 'ocCodTemaSintetico': 5, 'ocCodCategoriaSpesa': "090" },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': "091" },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': "092" },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': "093" },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': "094" },
            { 'ocCodTemaSintetico': 6, 'ocCodCategoriaSpesa': "095" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "09" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "010" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "011" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "012" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "013" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "014" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "015" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "016" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "068" },
            { 'ocCodTemaSintetico': 4, 'ocCodCategoriaSpesa': "070" }]
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

                this.get('/progetti/dettaglio/:id', (schema, request) => {
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

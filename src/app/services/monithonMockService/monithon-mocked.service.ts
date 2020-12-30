import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import * as listaProgetti from './mock/listaProgetti';
import * as dettaglioProgetto from './mock/dettaglioProgetto';

@Injectable({
    providedIn: 'root'
})
export class MonithonMockedService {

    constructor() { }
    private static listaProgetti(): any[] {
        return listaProgetti;
    }
    private static dettaglioProgetto(): any[] {
        return dettaglioProgetto;
    }

    public mirageJsServer(): Server {
        return new Server({
            routes(): void {
                this.namespace = 'api';

                this.get('/progetti', () => {
                    return MonithonMockedService.listaProgetti();
                });

                this.get('/progetti/dettaglio', () => {
                    return MonithonMockedService.dettaglioProgetto();
                });
            },
        });
    }
}

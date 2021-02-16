import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import temi from '../../../assets/mock/temi';
import categorie from '../../../assets/mock/categorie';
import listaProgettiTotaliCodCategorieFixed from '../../../assets/mock/listaProgetti';
import dettagliProgettiTotaliCodCategorieFixed from '../../../assets/mock/dettaglioProgetti';
import lodash from 'lodash';
@Injectable({
    providedIn: 'root'
})
export class MonithonApiService {

    private httpClient: HttpClient;
    private url = '/monithon-api';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public getProgetti(): Observable<any[]> {
        // return this.httpClient.get<any[]>(this.url+'/progetti');
        return of(listaProgettiTotaliCodCategorieFixed);
    }

    public getDettaglio(codLocaleProgetto: string): Observable<any> {
        // return this.httpClient.get<any>(this.url + '/progetti/dettaglio/' + codLocaleProgetto);
        dettagliProgettiTotaliCodCategorieFixed
        return of(lodash.filter(dettagliProgettiTotaliCodCategorieFixed, p => p.codLocaleProgetto == codLocaleProgetto));

    }

    getCategorie() {
        // return this.httpClient.get<any[]>(this.url + '/categorie');
        return of(categorie);
    }
    getTemi() {
        // return this.httpClient.get<any[]>(this.url + '/temi');
        return of(temi);
    }
}

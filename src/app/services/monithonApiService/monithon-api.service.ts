import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
        return this.httpClient.get<any[]>(this.url+'/progetti');
    }

    public getListaProgetti(): Observable<any> {

        return this.httpClient.get<any[]>(this.url + '/progetti/minimi');
    }

    public getDettaglio(codLocaleProgetto: string): Observable<any> {
        return this.httpClient.get<any>(this.url + '/progetti/dettaglio/' + codLocaleProgetto);
    }

    getCategorie() {
        return this.httpClient.get<any[]>(this.url + '/categorie');
    }
    getTemi() {
        return this.httpClient.get<any[]>(this.url + '/temi');
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MonithonApiService {
    private httpClient: HttpClient;
    private url = '/monithon-api/progetti';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public getProgetti(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.url);
    }
    
    public getDettaglio(codLocaleProgetto:string): Observable<any> {
        return this.httpClient.get<any>(this.url + '/dettaglio/' + codLocaleProgetto);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import dettaglioProgetti from '../../../assets/mock/dettaglioProgetti_v4';
import temi from '../../../assets/mock/temi';
import categorie from '../../../assets/mock/categorie';
import lodash from 'lodash';
import { environment } from 'src/environments/environment';
import { Progetto } from 'src/app/model/progetto/progetto';
@Injectable({
    providedIn: 'root'
})
export class MonithonApiService {


    private httpClient: HttpClient;
    private url = '/monithon-api';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
        //https://api.monithon.eu/api/mapdata
        this.url = `${environment.server.protocol}://${environment.server.ip}/${environment.server.apiroute}`;

    }

    public getProgetti(): Observable<any[]> {
        // return of(mapdata);
        return this.httpClient.get<any[]>(this.url + '/mapdata')
            .pipe(
                map((res) => {
                    res = res.map((p: any) => {
                        p.lat = parseFloat(p.lat);
                        p.long = parseFloat(p.long);
                        p.ocDataInizioProgetto = parseInt(p.ocDataInizioProgetto);
                        p.ocFinanzTotPubNetto = parseFloat(p.ocFinanzTotPubNetto);
                        return p;
                    });
                    return res;
                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );
    }

    public getDettaglio(uid: string): Observable<any> {
        // return this.httpClient.get<any>(this.url + '/progetti/dettaglio/' + codLocaleProgetto);
        return of(lodash.filter(dettaglioProgetti, p => p.uid == uid));

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import temi from '../../../assets/mock/temi';
import categorie from '../../../assets/mock/categorie';
import lodash from 'lodash';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class MonithonApiService {


    private httpClient: HttpClient;
    private url = '/monithon-api';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
        this.url = `${environment.server.protocol}://${environment.server.ip}/${environment.server.apiroute}`;

    }

    public getProgetti(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.url + '/mapdata')
            .pipe(
                map((res) => {
                    return res.map((p: any) => {
                        p.lat = parseFloat(p.lat);
                        p.long = parseFloat(p.long);
                        try {
                            p.ocDataInizioProgetto = parseInt(p.ocDataInizioProgetto);

                        } catch (error) {
                            console.error(p.uid);
                            console.error(error);
                        }
                        try {
                            p.ocFinanzTotPubNetto = parseFloat(p.ocFinanzTotPubNetto);

                        } catch (error) {
                            console.error(p.uid);
                            console.error(error);

                        }
                        try {
                            p.reports = lodash.map(p.reports, (data, reportId) => ({ id: reportId, dataAggiornamento: data }));
                            p.hasReport = p.reports.length > 0;
                        } catch (error) {
                            console.error(p.uid);
                            console.error(error);

                        }
                        return p;
                    });
                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );
    }

    public getDettaglio(uid: string): Observable<any> {
        return this.httpClient.get<any>(this.url + '/mdProject/' + uid)
            .pipe(
                map((p) => {
                    p.codStatoProgetto = p.ocCodStatoProgetto;
                    delete (p.ocCodStatoProgetto);
                    try {
                        p.reports = lodash.map(p.reports, (data, reportId) => ({ id: reportId, dataAggiornamento: data }));
                        p.hasReport = p.reports.length > 0;
                    } catch (error) {
                        console.error(p.uid);
                        console.error(error);
                    }
                    return p;

                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );
        // return of(lodash.filter(dettaglioProgetti, p => p.uid == uid));

    }

    getCategorie() {
        // return this.httpClient.get<any[]>(this.url + '/categorie');
        return of(categorie);
    }
    getTemi() {
        // return this.httpClient.get<any[]>(this.url + '/temi');
        return of(temi.map(t => {
            t.isActive = true;
            return t;
        }));
    }
}

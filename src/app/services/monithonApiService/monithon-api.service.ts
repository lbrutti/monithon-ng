import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import lodash from 'lodash';
import { environment } from 'src/environments/environment';
import { Progetto } from 'src/app/model/progetto/progetto';
import { Tema } from 'src/app/model/tema/tema.interface';
import { Categoria } from 'src/app/model/categoria/categoria.interface';

import temiSintetici from '../../../assets/mock/temiSintetici';
import cicliProgrammazione from '../../../assets/mock/cicliProgrammazione';
import programmiOperativi from '../../../assets/mock/programmiOperativi';


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

    public getDettaglio(progetto: Progetto): Observable<any> {
        return this.httpClient.get<any>(this.url + '/mdProject/' + progetto.uid)
            .pipe(
                map((p: Progetto) => {
                    p.ocTitoloProgetto = p.ocTitoloProgetto.replace(/√Ç¬ø/g, '"');
                    p.ocSintesiProgetto = p.ocSintesiProgetto.replace(/√Ç¬ø/g, '"');

                    p.hasReport = progetto.hasReport;
                    return p;
                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );
    }

    public getTemi(): Observable<any> {
        //{"4":[12,10,15,14,11,13,16],"6":[95,91,94,93,92],"5":[87,86,85,19,20,84,22,17,18,88,21,89,23,500],"7":[43]}

        return this.httpClient.get<any>(this.url + '/mdTemi')
            .pipe(
                map((res: any) => {
                    let temi: Tema[] = lodash.chain(res)
                        .keys()
                        .map(tema => ({ 'ocCodTemaSintetico': tema, 'isActive': true }))
                        .value();
                    let categorie: Categoria[] = lodash.chain(res).map((cat, tema) => {
                        let categorie: Categoria[] = cat.map(c => ({ 'ocCodTemaSintetico': tema, 'ocCodCategoriaSpesa': c }));
                        return categorie;
                    }).flatten()
                        .value();
                    return {
                        temi: temi,
                        categorie: categorie
                    }
                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );

    }


    /// metodi per report
    /**
     * getListaReport
     */
    public getListaReport(): Observable<any> {
        return of([]);
    }

    /**
     * getDettaglioReport
     */
    public getDettaglioReport(uid: string | number) {

    }

    /**
     * getProgrammiOperativi
     */
    public getProgrammiOperativi(): Observable<any> {
        return of(programmiOperativi);
    }

    /**
     * getCicliProgrammazione
     */
    public getCicliProgrammazione(): Observable<any> {
        return of(cicliProgrammazione);
    }

    /**
   * getTemiSintetici
   */
    public getTemiSintetici(): Observable<any> {
        return of(temiSintetici);
    }
}

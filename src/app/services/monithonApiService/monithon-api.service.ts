import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import lodash from 'lodash';
import { environment } from 'src/environments/environment';
import { Progetto } from 'src/app/model/progetto/progetto';
import { Tema } from 'src/app/model/tema/tema.interface';
import { Categoria } from 'src/app/model/categoria/categoria.interface';


// //MOCK
import temiSintetici from '../../../assets/mock/temiSintetici.js';
import sorgenti from '../../../assets/mock/sorgenti.js';
// import cicliProgrammazione from '../../../assets/mock/cicliProgrammazione';
// import programmiOperativi from '../../../assets/mock/programmiOperativi';
// import giudiziSintetici from '../../../assets/mock/giudiziSintetici';
// import listaReport from '../../../assets/mock/mockListaReport';
// import listaDettagli from '../../../assets/mock/mockDettagliReport';
// import { CicloProgrammazione } from 'src/app/model/cicloProgrammazione/cicloProgrammazione.interface';
import { Report } from 'src/app/model/report/report';
import { GiudizioSintetico } from 'src/app/model/giudizioSintetico/giudizioSintetico.interface';
import { ProgrammaOperativo } from 'src/app/model/programmaOperativo/programmaOperativo.interface';
import { Sorgente } from 'src/app/model/sorgente.js';

@Injectable({
    providedIn: 'root'
})
export class MonithonApiService {


    private httpClient: HttpClient;
    private url = '/monithon-api';
    private reportApiUrl: string;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
        this.url = `${environment.server.protocol}://${environment.server.ip}/${environment.server.apiroute}`;
        this.reportApiUrl = `${environment.server.protocol}://${environment.server.ip}/${environment.server.apiroute}`;

    }

    //FIXME: lista progetti da ws monithon: va passato query param con codice tema per filtraggio

    public getProgetti(ocCodTemaSintetico: string = ''): Observable<any[]> {
        let url: string = this.url + '/mapdata';
        if (ocCodTemaSintetico.length) {
            url += `?tema=${ocCodTemaSintetico}`;
        }
        return this.httpClient.get<any[]>(url)
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

    //FIXME: lista temi da ws monithon: va passato query param con codice tema per filtraggio
    public getTemi_REAL(ocCodTemaSintetico: string = ''): Observable<any> {
        let url: string = this.url + '/mdTemi';
        if (ocCodTemaSintetico.length) {
            url += `?tema=${ocCodTemaSintetico}`;
        }
        //{"4":[12,10,15,14,11,13,16],"6":[95,91,94,93,92],"5":[87,86,85,19,20,84,22,17,18,88,21,89,23,500],"7":[43]}
        // from(temiSintetici)
        // return this.httpClient.get<any>(this.url + '/mdTemi')
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

    public getTemi(ocCodTemaSintetico: string = ''): Observable<any> {
        let temiMock = temiSintetici;
        if (ocCodTemaSintetico.length) {
            temiMock = {};
            lodash.set(temiMock, ocCodTemaSintetico, lodash.get(temiSintetici, ocCodTemaSintetico));
        }
        return of(temiMock)
            .pipe(
                map((res: any) => {
                    let temi: Tema[] = lodash.chain(res)
                        .keys()
                        .map(tema => ({ 'ocCodTemaSintetico': tema, 'isActive': true, stile: lodash.get(res, `[${tema}].stile`) }))
                        .value();
                    let categorie: Categoria[] = lodash.chain(res).map((props, tema) => {
                        let categorie: Categoria[] = props.categorie.map(c => ({ 'ocCodTemaSintetico': tema, 'ocCodCategoriaSpesa': c }));
                        return categorie;
                    }).flatten()
                        .value();
                    let stili: Categoria[] = lodash.chain(res).map((props, tema) => {
                        return props.stile;
                    }).flatten()
                        .value();
                    return {
                        temi: temi,
                        categorie: categorie,
                        stili: stili
                    }
                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );

    }

    public getSorgenti(): Observable<any> {
        let sorgentiMock = sorgenti;

        return of(sorgentiMock).pipe(
            map((res: any) => {
                let sorgenti: Sorgente[] = lodash.chain(res)
                    .keys()
                    .map(sorgente => ({ 'id': sorgente, 'isActive': true, stile: lodash.get(res, `[${sorgente}].stile`) }))
                    .value();
                return {
                    sorgenti: sorgenti
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
        // return of(listaReport);
        return this.httpClient.get<any[]>(this.reportApiUrl + '/reportList')
            .pipe(
                map((res) => {
                    return res.map((p: Report) => {
                        try {
                            p.dataInserimento = parseInt('' + p.dataInserimento);

                            p.ocCodCicloProgrammazione = parseInt('' + p.ocCodCicloProgrammazione);

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

    /**
     * getDettaglioReport
     */
    public getDettaglioReport(uid: string | number) {
        // let report: Report = new Report(lodash.find(listaDettagli, { uid: uid }));
        // return of(report);
        return this.httpClient.get<any>(this.reportApiUrl + `/reportDetail/${uid}`)
            .pipe(
                map((p: Report) => {
                    try {
                        p.sintesi = p.sintesi.length > 500 ? (p.sintesi.slice(0, 495) + '...') : p.sintesi;
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

    }

    /**
     * getProgrammiOperativi
     */
    public getProgrammiOperativi(): Observable<any> {
        //https://it.monithon.eu/api/reportProgrammiOperativi
        return this.httpClient.get<Array<any>>(this.reportApiUrl + `/reportOperativeProgrammes`)
            .pipe(
                map((res) => {
                    return res.map((p: ProgrammaOperativo) => {
                        try {
                            p.isActive = true;

                            p.isSelected = false;

                        } catch (error) {
                            console.error(p.ocCodProgrammaOperativo);
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

        // return of(programmiOperativi.map(p => {
        //     p.isSelected = false;
        //     p.isActive = true;
        //     return p;
        // }));
    }

    /**
     * getCicliProgrammazione
     */
    public getCicliProgrammazione(): Observable<any> {
        // return of(cicliProgrammazione);
        return this.httpClient.get<Array<any>>(this.reportApiUrl + `/reportProgramCycles`);

    }

    /**
   * getTemiSintetici
   */
    public getTemiSintetici(): Observable<any> {
        //https://it.monithon.eu/api/reportTemi
        return this.httpClient.get<any>(this.reportApiUrl + `/reportThemes`)

        // return of(temiSintetici);
    }

    /**
     * getGiudiziSintetici
     */
    public getGiudiziSintetici(): Observable<GiudizioSintetico[]> {
        // let giudizi: GiudizioSintetico[] = giudiziSintetici.map(g => ({
        //     codGiudizioSintetico: g.codGiudizioSintetico,
        //     descGiudizioSintetico: g.descGiudizioSintetico,
        //     isSelected: true,
        //     isActive: true
        // }));

        // return of(giudizi);
        return this.httpClient.get<any>(this.reportApiUrl + `/reportGS`)
            .pipe(
                map((res) => {
                    return res.map((g: GiudizioSintetico) => {

                        try {
                            g.isActive = true;
                            g.isSelected = true;

                        } catch (error) {
                            console.error(g.codGiudizioSintetico);
                            console.error(error);
                        }
                        return g;
                    });
                }),
                catchError(e => {
                    console.error(e);
                    return of(e);
                })
            );
    }
}

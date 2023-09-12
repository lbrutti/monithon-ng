/* 
giudizio sintetico : al posto delle categorie (tema fantasma...)
tema sintetico : al posto di monitorato si/no
anno/timeline : riusare chart anno
budget : riusare chart budget
programmi operativi : TODO: autocomplete?
ciclo di programmazione: al posto di stato progetto
ricerca libera su titolo del report: TODO verificare...
*/

import { CicloProgrammazione, CicloProgrammazioneNullo } from "../cicloProgrammazione/cicloProgrammazione.interface";
import { ProgrammaOperativo, ProgrammaOperativoNullo } from "../programmaOperativo/programmaOperativo.interface";


export class Report {
    uid: string = '';
    titolo: string = ''; //ocTitoloProgetto: string; mostrato in lista e dettaglio
    sintesi: string = ''; //ocSintesiProgetto: any;  mostrato in dettaglio
    dataInserimento: number = 0; //ocDataInizioProgetto: number; mostrato in dettaglio e usato per chart/filtro ANNO
    ocCodTemaSintetico: string | number = ''; //ocCodTemaSintetico: number; mostrato in dettaglio e uusato per filtro secondario con chips
    codGiudizioSintetico: string = ''; //ocCodCategoriaSpesa: Array<string>; mostrato in dettaglio, usato per filtro primario e per colore marker su mappa
    codStatoDiAvanzamento: string = 'stato_avanzamento'; //codSDA: Array<string>; mostrato in dettaglio, usato per filtro primario e per colore marker su mappa
    ocFinanzTotPubNetto: number | string = ''; //ocFinanzTotPubNetto: number | string; mostrato in dettaglio, usato per filtro BUDGET
    curr: string = 'EUR';
    ocCodProgrammaOperativo?: string = ''; //codStatoProgetto?: any; mostrato in dettaglio, usato per filtro con autocomplete?
    ocCodCicloProgrammazione?: number | string = ''; //codStatoProgetto?: string;  mostrato in dettaglio, usato per filtro secondario con chips
    link?: string; //ocLink?: string; usato in dettaglio per linkare alla pagina del report

    lat?: number;
    long?: number;

    hasReport?: boolean = false;
    reports?: Array<Report>

    //attributi funzionali all'app:
    distanza: number = Infinity;

    isWithinRange: boolean = false;
    isSelected: boolean = false;
    isHighlighted?: boolean;

    programmaOperativo?: ProgrammaOperativo = ProgrammaOperativoNullo;
    cicloProgrammazione?: CicloProgrammazione = CicloProgrammazioneNullo;

    constructor(reportData?: Report) {
        if (reportData) {
            this.uid = reportData.uid;
            this.titolo = reportData.titolo;
            this.sintesi = reportData.sintesi;
            this.dataInserimento = reportData.dataInserimento;
            this.ocCodTemaSintetico = reportData.ocCodTemaSintetico;
            this.codGiudizioSintetico = reportData.codGiudizioSintetico;
            this.ocFinanzTotPubNetto = reportData.ocFinanzTotPubNetto;
            this.ocCodProgrammaOperativo = reportData.ocCodProgrammaOperativo;
            this.ocCodCicloProgrammazione = reportData.ocCodCicloProgrammazione;
            this.link = reportData.link;
            this.lat = reportData.lat;
            this.long = reportData.long;
            this.distanza = reportData.distanza;
            this.isWithinRange = reportData.isWithinRange;
            this.isSelected = reportData.isSelected;
            this.isHighlighted = reportData.isHighlighted;
            this.codStatoDiAvanzamento = reportData.codStatoDiAvanzamento;
        }
    }
}

export const ReportNullo: Report = new Report();
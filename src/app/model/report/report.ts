/* 
giudizio sintetico : al posto delle categorie (tema fantasma...)
tema sintetico : al posto di monitorato si/no
anno/timeline : riusare chart anno
budget : riusare chart budget
programmi operativi : TODO: autocomplete?
ciclo di programmazione: al posto di stato progetto
ricerca libera su titolo del report: TODO verificare...
*/


export class Report {
    uid: string;
    titolo: string; //ocTitoloProgetto: string; mostrato in lista e dettaglio
    sintesi: string; //ocSintesiProgetto: any;  mostrato in dettaglio
    dataInserimento: number; //ocDataInizioProgetto: number; mostrato in dettaglio e usato per chart/filtro ANNO
    codTemaSintetico: string | number; //ocCodTemaSintetico: number; mostrato in dettaglio e uusato per filtro secondario con chips
    codGiudizioSintetico: string; //ocCodCategoriaSpesa: Array<string>; mostrato in dettaglio, usato per filtro primario e per colore marker su mappa
    ocFinanzTotPubNetto: number | string; //ocFinanzTotPubNetto: number | string; mostrato in dettaglio, usato per filtro BUDGET

    codProgrammaOperativo?: string; //codStatoProgetto?: any; mostrato in dettaglio, usato per filtro con autocomplete?
    codCicloProgrammazione?: number | string; //codStatoProgetto?: string;  mostrato in dettaglio, usato per filtro secondario con chips
    link?: string; //ocLink?: string; usato in dettaglio per linkare alla pagina del report

    lat: number;
    long: number;

    hasReport: boolean = false;
    reports: Array<Report>

    //attributi funzionali all'app:
    distanza: number = Infinity;

    isWithinRange: boolean = false;
    isSelected: boolean = false;
    isHighlighted?: boolean;
}
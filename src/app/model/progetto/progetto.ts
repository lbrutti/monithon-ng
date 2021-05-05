import { Report } from "../report/report";

export class Progetto {
    uid: string;
    ocTitoloProgetto: string;
    ocDataInizioProgetto: number;
    ocCodTemaSintetico: number;
    ocFinanzTotPubNetto: number | string;
    totPagamenti?:number;
    ocCodCategoriaSpesa: Array<string>;
    codStatoProgetto?: any;
    codLocaleProgetto?: string;
    ocLink?: string;
    ocSintesiProgetto: string;
    hasReport: boolean = false;
    reports: Array<Report>
    lat: number;
    long: number;
    distanza: number = Infinity;
    isWithinRange: boolean = false;
    isSelected: boolean = false;
    isHighlighted?: boolean;
}
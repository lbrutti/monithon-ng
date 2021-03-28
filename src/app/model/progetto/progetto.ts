export class Progetto {
    ocTitoloProgetto: string;
    ocStatoProgetto: string;
    ocDataInizioProgetto: number;
    ocCodTemaSintetico: number;
    ocTemaSintetico: string;
    ocFinanzTotPubNetto: number|string;
    ocCodCategoriaSpesa: Array<string>;
    ocDescrCategoriaSpesa: string;
    lat: number; 
    long: number ;
    hasReport: boolean = false;
    isSelected: boolean = false;
    codStatoProgetto?: any;
    distanza:number = Infinity;
    isWithinRange:boolean = false;
    uid: string;
    codLocaleProgetto?: string;
    ocLink?:string;
    ocSintesiProgetto: any;
}
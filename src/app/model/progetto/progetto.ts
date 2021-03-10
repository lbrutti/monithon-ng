export class Progetto {
    codLocaleProgetto: string;
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
    ocCodStatoProgetto?: any;
}
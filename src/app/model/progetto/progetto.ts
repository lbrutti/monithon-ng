export class Progetto {
    codLocaleProgetto: string;
    ocTitoloProgetto: string;
    ocStatoProgetto: string;
    ocDataInizioProgetto: number;
    ocCodTemaSintetico: number;
    ocTemaSintetico: string;
    ocFinanzTotPubNetto: number|string;
    ocCodCategoriaSpesa: string;
    ocDescrCategoriaSpesa: string;
    coordinate: { lat: string, lng: string };
    hasReport: boolean;
}
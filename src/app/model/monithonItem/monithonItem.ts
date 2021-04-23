/**
 * 
 * Mapping tra attributi MonithonItem e Progetto / Report
*    |   MonithonItem           |   Progetto               |   Report                 |
*    |--------------------------|--------------------------|--------------------------|
*    |   uid                    |   uid                    |   id                     |
*    |--------------------------|--------------------------|--------------------------|
*    |   titolo                 |   ocTitoloProgetto       |   -                      |
*    |--------------------------|--------------------------|--------------------------|
*    |   sintesi                |   ocSintesiProgetto      |   -                      |
*    |--------------------------|--------------------------|--------------------------|
*    |   data                   |   ocDataInizioProgetto   |   dataAggiornamento      |
*    |--------------------------|--------------------------|--------------------------|
*    |   ocCodTemaSintetico     |   ocCodTemaSintetico     |   ocCodTemaSintetico     |
*    |--------------------------|--------------------------|--------------------------|
*    |   ocCodCategoriaSpesa    |   ocCodCategoriaSpesa    |   ocCodCategoriaSpesa    |
*    |--------------------------|--------------------------|--------------------------|
*    |   ocFinanzTotPubNetto    |   ocFinanzTotPubNetto    |   -                      |
*    |--------------------------|--------------------------|--------------------------|
*    |   codStatoProgetto       |   codStatoProgetto       |   codStatoProgetto       |
*    |--------------------------|--------------------------|--------------------------|
*    |   codLocaleProgetto      |   codLocaleProgetto      |   codLocaleProgetto      |
*    |--------------------------|--------------------------|--------------------------|
*    |   hasReport              |   hasReport              |   -                      |
*    |--------------------------|--------------------------|--------------------------|
*    |   link                   |   ocLink                 |   -                      |
*    |--------------------------|--------------------------|--------------------------|
*    |         -                |   reports                |   -                      |
*    |--------------------------|--------------------------|--------------------------|
*    |   isWithinRange          |   isWithinRange          |   isWithinRange          |
*    |--------------------------|--------------------------|--------------------------|
*    |   isSelected             |   isSelected             |   isSelected             |
*    |--------------------------|--------------------------|--------------------------|
*    |   isHighlighted          |   isHighlighted          |   isHighlighted          |
*    |--------------------------|--------------------------|--------------------------|
*    |   lat                    |   lat                    |   lat                    |
*    |--------------------------|--------------------------|--------------------------|
*    |   long                   |   long                   |   long                   |
*    |--------------------------|--------------------------|--------------------------|
*    |   distanza               |   distanza               |   distanza               |
*    |--------------------------|--------------------------|--------------------------|
 */


export class MonithonItem {
    ocTitoloProgetto: string; // PF: titolo del progetto, RF: titolo del report
    ocStatoProgetto: string; // stato del progetto 
    ocDataInizioProgetto: number;
    ocCodTemaSintetico: number;
    ocTemaSintetico: string;
    ocFinanzTotPubNetto: number | string;
    ocCodCategoriaSpesa: Array<string>;
    ocDescrCategoriaSpesa: string;
    lat: number;
    long: number;
    hasReport: boolean = false;
    isSelected: boolean = false;
    codStatoProgetto?: any;
    distanza: number = Infinity;
    isWithinRange: boolean = false;
    uid: string;
    codLocaleProgetto?: string;
    ocLink?: string;
    ocSintesiProgetto: any;

}
//

/**
 * mock della response del servizio listaProgetti
 * Campi estratti:
 * 
 *  | COLONNA CSV ORIGINALE                 |  CAMPO JSON       |  TIPO             |
 *  |---------------------------------------|-------------------|-------------------|
 *  | COD_LOCALE_PROGETTO                   |  codice           |  string           |
 *  | OC_TITOLO_PROGETTO                    |  titolo           |  string           |
 *  | OC_STATO_PROGETTO                     |  stato            |  string           |
 *  | ANNO_INIZIO_PROGETTO                  |  annoInizio       |  number/dateTime  |
 *  | OC_TEMA_SINTETICO                     |  tema             |  string           |
 *  | OC_FINANZ_TOT_PUB_NETTO               |  costoPubblico    |  double           |
 *  | TOT_PAGAMENTI (04/01/21: non usato)   |  totalePagamenti  |  double           |
 *  | OC_DESCR_CATEGORIA_SPESA              |  descrCategoria   |  string           |
 *  | OC_COD_CATEGORIA_SPESA                |  codCategoria     |  string           |
 *  | CUP_DESCR_NATURA(04/01/21:* non usato)|  descrNatura      |  string           |
 *  | COORDINATE (*)                        |  localizzazione   |  object           |
 *  | HAS_REPORT (*)                        |  hasReport        |  bool             |
 *  |---------------------------------------|-------------------|-------------------|
 * 
 * I campi (*) sono da reperire, gli altri sono presenti nel CSV su cui si basa questo spreadsheet 
 * https://docs.google.com/spreadsheets/d/1Uol55fO96CXjhUGXza_PnYaecuUhlDIbFjmKY6RodK8/edit#gid=537025182
 *
 * 
 * Ipotesi di ordinamenti sui seguenti campi:
 * - distanza del comune selezionato
 * - ANNO_INIZIO_PROGETTO
 * - OC_FINANZ_TOT_PUB_NETTO
 */

export const listaProgetti = [
    {
        "codice": "11FR20460",//id univoco del progetto: usato per invocare ws dei dettagli 
        "titolo": "EFFICIENTAMENTO ENERGETICO DEL NUOVO OSPEDALE DI PORDENONE", //visualizzato come titolo del popup su mappa
        "stato": "In corso", //STATO AVANZAMENTO
        "annoInizio": 2015,
        "tema": "Energia e efficienza energetica",
        "costoPubblico": 7583475, 
        "totalePagamenti": 1089620.85, //spesi
        "descrCategoria": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno", //temi progetto: costituisce il tag in cui viene filtrato in https://www.sketch.com/s/c26bdbb0-ce9a-4ba3-badc-b102f4168c62/a/J1L94G
        "codCategoria":"013",
        "descrNatura": "<RECUPERARE DA OC>",
        "localizzazione": { "lat": 45.32332, "lng": 13.034234 }, //fittizio. Coordinate per localizzazione su mappa
        "hasReport": true // flag per indicare se il progetto ha dei report Monithon associati (può essere utile per filtrare successivamente i dati e/o asegnare un colore diverso ai marker su mappa)
    }
];
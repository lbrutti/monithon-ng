/**
 * mock della response del servizio dettaglioProgetto
 * Campi estratti:
 * 
 *  | COLONNA CSV ORIGINALE                 |  CAMPO JSON          |  TIPO                            |
 *  |---------------------------------------|----------------------|----------------------------------|
 *  | COD_LOCALE_PROGETTO                   |  codice              |  string                          |
 *  | OC_TITOLO_PROGETTO                    |  titolo              |  string                          |
 *  | OC_SINTESI_PROGETTO                   |  descrizione         |  string                          |
 *  | OC_STATO_PROGETTO                     |  stato               |  string                          |
 *  | OC_DATA_INIZIO_PROGETTO               |  dataInizio          |  string/dateTime                 |
 *  | OC_TEMA_SINTETICO                     |  tema                |  string                          |
 *  | OC_FINANZ_TOT_PUB_NETTO               |  costoPubblico       |  double                          |
 *  | TOT_PAGAMENTI                         |  totalePagamenti     |  double                          |
 *  | COORDINATE (*)                        |  localizzazione      |  object:{lat, lng}               |
 *  | OC_LINK                               |  ocUrl               |  string                          |
 *  | MONITHON_REPORT_SET (*)               |  monithonReportSet   |  array di url o di oggetti       |
 *  |                                       |                      |  contenenti url e info report    |
 *  | ------------------------------------------------------------------------------------------------|
 *
 *  | DA SKETCH 04/01/21: NON MOSTRO ALCUN DETTAGLIO IN APP MA REDIRIGO A OC O report                 |
 *  |quindi sono sufficenti i campi relativi ai link cui puntare                                       |
 *  |---------------------------------------|----------------------|----------------------------------|
 * 
 * I campi (*) sono da reperire, gli altri sono presenti nel CSV su cui si basa questo spreadsheet 
 * https://docs.google.com/spreadsheets/d/1Uol55fO96CXjhUGXza_PnYaecuUhlDIbFjmKY6RodK8/edit#gid=537025182
 *
 */
export const dettaglioProgetto =
{
    "codice": "11FR20460",//id univoco del progetto: usato per invocare ws dei dettagli 
    "titolo": "EFFICIENTAMENTO ENERGETICO DEL NUOVO OSPEDALE DI PORDENONE", //visualizzato come titolo del popup su mappa
    "descrizione": "REALIZZAZIONE DEL NUOVO POLO TECNOLOGICO E ALTRE OPERE EDILI E IMPIANTISTICHE DI EFFICIENTAMENTO ENERGETICO DEL NUOVO OSPEDALE",
    "stato": "In corso", //STATO AVANZAMENTO
    "dataInizio": "20150313",
    "tema": "Energia e efficienza energetica",
    "costoPubblico": 7583475,
    "totalePagamenti": 1089620.85, //spesi
    "ocUrl": "www.opencoesione.gov.it/progetti/11fr20460",
    "localizzazione": { "lat": 45.32332, "lng": 13.034234 }, //fittizio. Coordinate per localizzazione su mappa
    "monithonReportSet": ["https://dev.monithon.it/report/view/107"]//array di url a report o di oggetti con, ad esempio,  struttura {url:"https://dev.monithon.it/report/view/107", data:"6/03/2020"}
};
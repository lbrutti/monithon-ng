
/**
 * json statico con lista dei comuni d'italia geolocalizzati
 * Campi estratti:
 *  | COLONNA CSV ORIGINALE                 |  CAMPO JSON       |  TIPO             |
 *  |---------------------------------------|-------------------|-------------------|
 *  | Codice Comune formato alfanumerico    |  codice           |  string           |
 *  | Denominazione(Italiana e straniera)   |  denominazione    |  string           |
 *  | lat (*)                               |  lat              |  double           |
 *  | lon (*)                               |  lon              |  double           |
 *  | Denominazione Regione                 |  regione          |  string           |
 *  | Sigla Automobilistica                 |  prov             |  string           |
 *  |---------------------------------------|-------------------|-------------------|
 * 
 * I campi sono estratti dal foglio (1) basato su csv istat (2).
 * 
 * (*) ricavati con chiamate a API Google Maps (3)
 * 
 * (1) https://docs.google.com/spreadsheets/d/1Rsb2PMgPU9a2PmaEq4n05I-t8eZQuS7IgoA8GBQ-H8U/edit#gid=806584902
 * (2) https://www.istat.it/storage/codici-unita-amministrative/Elenco-codici-statistici-e-denominazioni-delle-unita-territoriali.zip
 * (3) http://willgeary.github.io/data/2016/11/04/Geocoding-with-Google-Sheets.html
 * 
 */
[{
    "codice": "21077",
    "denominazione": "San Candido/Innichen",
    "lat": 46.7300428,
    "lon": 12.2805214,
    "regione": "Trentino-Alto Adige/Südtirol",
    "prov": "BZ"
}]
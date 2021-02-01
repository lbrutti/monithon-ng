
/**
 * mock della response del servizio listaProgetti
 * Campi estratti:
 * 
 *  | COLONNA CSV ORIGINALE                 |  CAMPO JSON               |  TIPO             |
 *  |---------------------------------------|---------------------------|-------------------|
 *  | COD_LOCALE_PROGETTO                   |  codLocaleProgetto        |  string           |
 *  | OC_TITOLO_PROGETTO                    |  ocTitoloProgetto         |  string           |
 *  | OC_STATO_PROGETTO                     |  ocStatoProgetto          |  string           |
 *  | ANNO_INIZIO_PROGETTO                  |  ocDataInizioProgetto     |  number/dateTime  |
 *  | OC_COD_TEMA_SINTETICO                 |  ocCodTemaSintetico       |  number           |
 *  | OC_TEMA_SINTETICO                     |  ocTemaSintetico          |  string           |
 *  | OC_FINANZ_TOT_PUB_NETTO               |  ocFinanzTotPubNetto      |  double           |
 *  | OC_DESCR_CATEGORIA_SPESA              |  ocDescrCategoriaSpesa    |  string           |
 *  | OC_COD_CATEGORIA_SPESA                |  ocCodCategoriaSpesa      |  string           |
 *  | COORDINATE (*)                        |  coordinate               |  object           |
 *  | HAS_REPORT (*)                        |  hasReport                |  bool             |
 *  |---------------------------------------|---------------------------|-------------------|
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
        "codLocaleProgetto": "1MA10052",
        "ocTitoloProgetto": "REDAZIONE PROGETTO EFFICIENTAMENTO ENERGETICO IMMOBILE REGIONALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20130905.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "24226,89",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6173255, 'lng': 13.5105493},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10769",
        "ocTitoloProgetto": "SOSTITUZIONE MACCHINARI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20140805.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "132800,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5968625, 'lng': 13.5053373},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10843",
        "ocTitoloProgetto": "ENERGIA PER L\u00c3\u00a2\u00c2\u0080\u00c2\u0099ENERGIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140409.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "161626,90",
        "ocCodCategoriaSpesa": "41",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: biomassa",
        "coordinate": {'lat': 43.34187, 'lng': 13.00832},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14323",
        "ocTitoloProgetto": "NUOVA LINEA DI SALDATURA TAGLIO E CONFEZIONAMENTO AUTOMATICA  ROBOTIZZATA A 5 PISTE PER LA PRODUZIONE DI SACCHETTI IN PVC \/ POLIETILENE \/ BIODEGRADABILE MATER-BI O SIMILARE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150525.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "94760,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.47183, 'lng': 13.50906},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14363",
        "ocTitoloProgetto": "AFFIDAMENTO DELLA PROGETTAZIONE ED ESECUZIONI DEI LAVORI DI EFFICIENTAMENTO ENERGETICO DELL'IMMOBILE DI PROPRIET\u00c3\u0083\u00c2\u00a0 REGIONALE SITO IN VIA OBERDAN 1, ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20130905.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "937439,82",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6170098, 'lng': 13.5115727},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15316",
        "ocTitoloProgetto": "RIQUALIFICAZIONE ENERGETICO STABILIMENTO CON ILLUMINAZIONE A LED",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150810.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "99907,46",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5665729, 'lng': 13.5110462},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16041",
        "ocTitoloProgetto": "ACQUISTO NUOVO GRANULATORE GLATT WSG60",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120620.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "151607,62",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5787088, 'lng': 13.5010397},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16042",
        "ocTitoloProgetto": "SOSTITUZIONE COMPRESSORI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20141129.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "12000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4940334, 'lng': 13.1011339},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16043",
        "ocTitoloProgetto": "ACQUISTO PRESSA BMB EKW1000\/8500 HYBRID",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120223.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "100210,29",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.50507, 'lng': 13.16703},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2599",
        "ocTitoloProgetto": "RIQUALIFICAZIONE TERMICA PALAZZO BIANCHI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090610.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "288457,78",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.62315539999999, 'lng': 13.3937027},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2604",
        "ocTitoloProgetto": "NUOVA SEDE ISTITUTO PROFESSIONALE PER IL COMMERCIO \"PODESTI\" DI ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070201.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "5402639,58",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5675005, 'lng': 13.5184603},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2607",
        "ocTitoloProgetto": "AMPLIAMENTO DELLA SCUOLA MATERNA \"C.COLLODI\" LOCALITA' BORGHETTO - 1\u00c3\u0082\u00c2\u00b0 STRALCIO (1 SEZIONE)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060320.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "522079,11",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6011483, 'lng': 13.269942},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2802",
        "ocTitoloProgetto": "GERMAN PLAST - SOSTITUZIONE PRESS",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090428.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "148000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5265566, 'lng': 13.5236289},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2804",
        "ocTitoloProgetto": "OMAS - SOSTITUZIONE LASE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080325.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.510502, 'lng': 13.6221799},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2814",
        "ocTitoloProgetto": "CRISTIANPACK SRL - SOSTITUZIONE LINEE SALDATUR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080806.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "72400,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.47183, 'lng': 13.50906},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2816",
        "ocTitoloProgetto": "L.M. DEI F.LLI MONTICELLI - SOSTITUZIONE IMPIANTO RAFFREDDAMENT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070514.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "163870,29",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4655788, 'lng': 13.5107361},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2818",
        "ocTitoloProgetto": "GERMAN PLAST - SOSTITUZIONE MACCHINAR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090709.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "47800,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5265566, 'lng': 13.5236289},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2819",
        "ocTitoloProgetto": "FAG - SOSTITUZIONE MACCHINAR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070810.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.470952, 'lng': 13.4598101},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2827",
        "ocTitoloProgetto": "PLAST-MECCANICA SPA - SOSTITUZIONE MACCHINAR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070719.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.50507, 'lng': 13.16703},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2838",
        "ocTitoloProgetto": "TECNO PLAST - SOSTITUZIONE MACCHINARI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080709.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5961799, 'lng': 13.30838},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2841",
        "ocTitoloProgetto": "T.S. - SOSTITUZIONE IMPIANTO FRIGORIFER",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080215.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "199224,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6010032, 'lng': 13.5144349},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2843",
        "ocTitoloProgetto": "VALLI ZABBAN - SOSTITUZIONE COMPRESSOR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100729.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "19325,20",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.7094212, 'lng': 13.0953676},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2845",
        "ocTitoloProgetto": "CASALI - SOSTITUZIONE COMPRESSOR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100729.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "21564,40",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.482958, 'lng': 13.1819653},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2853",
        "ocTitoloProgetto": "SOMIPRESS SOCIET\u00c3\u0083\u00c2\u00a0 METALLI INIETTATI - SOSTITUZIONE CENTRALE COMPRESSOR",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080613.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "30914,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5260669, 'lng': 13.554671},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2857",
        "ocTitoloProgetto": "SILGA - IMPIANTO DI COGENERAZION",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080307.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4550571, 'lng': 13.5842775},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2864",
        "ocTitoloProgetto": "ECOENERGY 04 - IMPIANTO FOTOVOLTAIC",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100303.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "179974,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.502013, 'lng': 13.1317585},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2867",
        "ocTitoloProgetto": "ROTOPRESS INTERNATIONAL - MODIFICA IMPIANTISTIC",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081230.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "179600,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4273889, 'lng': 13.5829238},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA2893",
        "ocTitoloProgetto": "KOMAROS AGROENERGIE S.R.L",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070315.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "104203,01",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5665017, 'lng': 13.5266827},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3012",
        "ocTitoloProgetto": "PANNELLI SOLARI FOTOVOLTAICI, SISTEMA DI ILLUMINAZIONE BASSO CONSUMO, SOSTITUZIONE CALDAIA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090831.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "59537,69",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.713654, 'lng': 13.215346},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3022",
        "ocTitoloProgetto": "INVESTIMENTI PER IL RISPARMIO ENERGETICO E L'UTILIZZO DI ENERGIE RINNOVABILI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090907.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "35855,20",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.51248140000001, 'lng': 13.4216702},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3029",
        "ocTitoloProgetto": "INTERVENTO METALSISTEM MARCHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091013.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "105000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4884025, 'lng': 13.4785426},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3061",
        "ocTitoloProgetto": "REALIZZAZIONE IMPIANTO FOTOVOLTAICO INTEGRATO NEI LAVORI DI RISTRUTTURAZIONE DELLA \"SCUOLA ELEMENTARE CAPOLUOGO\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080310.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "132714,93",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.6141408, 'lng': 13.1569902},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3416",
        "ocTitoloProgetto": "L\u00c3\u00a2\u00c2\u0080\u00c2\u0099INTERVENTO CONSISTE NEL REALIZZARE UN IMPIANTO FOTOVOLTAICO DI POTENZA 10 KWP DA INSTALLARE SULLA FALDA ESPOSTA A SUD-EST PER UNA METRATURA PARI A 80 MQ ( SPAZIO DI FALDA DISPONIBILE 150 MQ).",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090518.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "38130,40",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4838285, 'lng': 13.320291},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3420",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN IMPIANTO FOTOVOLTAICO DA ISTALLARSI IN PARZIALE INTEGRAZIONE ARCHITETTONICA SULLA COPERTURA DI UN EDIFICIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20130711.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "44798,60",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4391419, 'lng': 12.9029047},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3441",
        "ocTitoloProgetto": "IL PRESENTE PROGETTO \u00c3\u0083\u00c5\u00a1 RELATIVO ALLA REALIZZAZIONE DI UN IMPIANTO DI PRODUZIONE DI ENERGIA ELETTRICA TRAMITE CONVERSIONE FOTOVOLTAICA, AVENTE UNA POTENZA DI PICCO PARI A 19 440 WP.     LA PRODUCIBILIT\u00c3\u0083\u00c2\u00a0 TOTALE ANNUA DELL'IMPIANTO RISULTA DI 24 000 KWH\/ANNO (2,0640 TEP\/ANNO) E PRODURR\u00c3\u0083\u00c2\u00a0 UN RIS",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081202.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "19746,80",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4352435, 'lng': 12.871528},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3462",
        "ocTitoloProgetto": "INTERVENTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093IMPIANTO FOTOVOLTAICO-    AL SERVIZIO DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099 ATTIVITA\u00c3\u00a2\u00c2\u0080\u00c2\u0099 VERRA\u00c3\u00a2\u00c2\u0080\u00c2\u0099 INSTALLATO UN IMPIANTO FOTOVOLTAICO DO POTENZIALITA\u00c3\u00a2\u00c2\u0080\u00c2\u0099 DI PICCO PARI A 6 KWP COS\u00c3\u0083\u00c2\u00ac CONCEPITO     ARCHITTETTURA DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099 IMPIANTO  L\u00c3\u00a2\u00c2\u0080\u00c2\u0099 IMPIANTO SAR\u00c3\u0083\u00c2\u00a0 COSTITUITO DA N\u00c3\u0082\u00c2\u00b0 1 CAMPO COSTITUITO DA M",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "67534,98",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.42913919999999, 'lng': 12.935166},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3464",
        "ocTitoloProgetto": "L'INTERVENTO REALIZZATO RIGUARDA L'INSTALLAZIONE DI DUE IMPIANTI FOTOVOLTAICI DI 19,44 KWP (UNO AL SERVIZIO DELLA PIZZERIA, UNO AL SERVIZIO DEL CONDOMINIO) PER LA PRODUZIONE DI ENERGIA ELETTRICA ED UTILIZZANDO PER LA CLIMATIZZAZIONE DEI LOCALI UN IMPIANTO GEOTERMICO DI 31,2 KW. TALE IMPIANTO CONSENT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080905.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "54822,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.496602, 'lng': 13.132605},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3474",
        "ocTitoloProgetto": "IMPIANTO SOLARE FOTOVOLTAICO \"GRID-CONNECTED\" - REGIME GSE DI VENDITA IN CONTO ENERGIA (DM 06.02.06)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090213.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "292450,72",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.61369, 'lng': 13.5016171},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3477",
        "ocTitoloProgetto": "IMPIANTO FOTOVOLTAICO SCUOLA MATERNA COLORELLA POLVERIGI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090311.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "145276,65",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.5249549, 'lng': 13.3937978},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3479",
        "ocTitoloProgetto": "LAVORI DI REALIZZAZIONE IMPIANTI FOTOVOLTAICI NEL TERRITORIO COMUNALE PER LA PROMOZIONE DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099ENERGIA RINNOVABILE SOLARE NELLA TRIBUNA DEL CAMPO SPORTIVO DI VIA ROMA.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090121.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "132969,99",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.4251905, 'lng': 12.8560361},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3486",
        "ocTitoloProgetto": "PROGETTO SOLARE FOTOVOLTAICO PALESTRA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20140115.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "156002,63",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.52735999999999, 'lng': 13.4416903},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3496",
        "ocTitoloProgetto": "INSTALLAZIONE DI IMPIANTO SOLARE FOTOVOLTAICO PRESSO LA SCUOLA MATERNA UMBRIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090313.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "27728,27",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.5176741, 'lng': 13.5422453},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3501",
        "ocTitoloProgetto": "FRANGISOLE FOTOVOLTAICO DEL PALAZZETTO DELLO SPORT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090310.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "114614,93",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.4360045, 'lng': 12.8586412},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3511",
        "ocTitoloProgetto": "INSTALLAZIONE DI IMPIANTO  SOLARE FOTOVOLTAICO PRESSO SCUOLA MATERNA CECI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090313.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "36869,57",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.5223679, 'lng': 13.5573838},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3531",
        "ocTitoloProgetto": "IMPIANTO FOTOVOLTAICO NEL PARCO NATURALE REGIONALE \u00c3\u00a2\u00c2\u0080\u00c2\u009cGOLA DELLA ROSSA E DI FRASASSI\u00c3\u00a2\u00c2\u0080\u00c2\u009d \u00c3\u00a2\u00c2\u0080\u00c2\u0093 ZONA CAMPING LAGO FOSSI- GENGA.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080613.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "63818,52",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.3494084, 'lng': 12.92619},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3544",
        "ocTitoloProgetto": "IMPIANTO SOLARE FOTOVOLTAICO SCUOLA MATERNA QUARTIERE MONTEDAGO ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080601.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "397663,31",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.6167855, 'lng': 13.5188848},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3548",
        "ocTitoloProgetto": "INSTALLAZIONE DI IMPIANTO SOLARE FOTOVOLTAICO PRESSO L'ASILO NIDO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090224.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "43189,06",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.5290264, 'lng': 13.5557348},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3575",
        "ocTitoloProgetto": "INSTALLAZIONE DI IMPIANTO SOLARE FOTOVOLTAICO PRESSO SCUOLA MATERNA MENGARELLI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090224.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "31642,31",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.5223679, 'lng': 13.5573838},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3587",
        "ocTitoloProgetto": "IMPIANTO SOLARE TERMICO NEL PARCO NATURALE REGIONALE \u00c3\u00a2\u00c2\u0080\u00c2\u009cGOLA DELLA ROSSA E DI FRASASSI\u00c3\u00a2\u00c2\u0080\u00c2\u009d \u00c3\u00a2\u00c2\u0080\u00c2\u0093 SEDE DEL PARCO A CASTELLETTA - FABRIANO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090317.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "15724,06",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.3494084, 'lng': 12.92619},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3595",
        "ocTitoloProgetto": "INSTALLAZIONE IMPIANTO SOLARE TERMICO PER LA PRODUZIONE DI ACQUA CALDA AD USO SANITARIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090317.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "8854,28",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.7143933, 'lng': 13.2159008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3597",
        "ocTitoloProgetto": "IMPIANTO SOLARE TERMICO SCUOLA MATERNA QUARTIERE MONTEDAGO ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080201.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "196033,31",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.6167855, 'lng': 13.5188848},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3615",
        "ocTitoloProgetto": "INSTALLAZIONE IMPIANTO SOLARE TERMICO SPOGLIATOIO CAMPI DA TENNIS",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "17816,84",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.530777, 'lng': 13.552923},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3617",
        "ocTitoloProgetto": "INSTALLAZIONE IMPIANTO SOLARE TERMICO PALAZZETTO DELLO SPORT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "26122,67",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.530777, 'lng': 13.552923},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3620",
        "ocTitoloProgetto": "INSTALLAZIONE DI IMPIANTO SOLARE TERMICO PRESSO LA SCUOLA MEDIA  \"SILVIO PELLICO\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "20898,91",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.530777, 'lng': 13.552923},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3622",
        "ocTitoloProgetto": "IMPIANTO SOLARE TERMICO ASILO NIDO QUARTIERE MONTEDAGO ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080601.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "196033,31",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.6167855, 'lng': 13.5188848},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3958",
        "ocTitoloProgetto": "SOSTITUZIONE - AMMODERNAMENTO IMPIANTI PUBBLICA ILLUMINAZIONE ESISTENTI CON CRITERI DI EFFICIENZA ENERGETICA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090120.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "285412,18",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.32054, 'lng': 12.98513},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3982",
        "ocTitoloProgetto": "LAVORI DI RISPARMIO ELETTRICO NELLA PUBBLICA ILLUMINAZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070507.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "30884,96",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.671747, 'lng': 13.1063535},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3988",
        "ocTitoloProgetto": "LAVORI DI AMMODERNAMENTO E MIGLIORAMENTO EFFICIENZA ENERGETICA PORZIONE DI PUBBLICA ILLUMINAZIONE  DI PONTE RIO DI MONTERADO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090313.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "98359,49",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.69818, 'lng': 13.091727},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4009",
        "ocTitoloProgetto": "PROGETTO PER L'ADEGUAMENTO NORMATIVO E TECNOLOGICO E PER IL RISPARMIO ENERGETICO DEGLI IMPIANTI DI ILLUMINAZIONE PUBBLICA - VIA P. NENNI, VIA L. CORSI, VIA B. BUOZZI E V.LE CAMPO SPORTIVO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090319.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "239906,89",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.34546659999999, 'lng': 12.9185285},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4010",
        "ocTitoloProgetto": "PORTONOVO IN LED",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081212.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "374760,41",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6167855, 'lng': 13.5188848},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4017",
        "ocTitoloProgetto": "LAVORI DI ADEGUAMENTO IMPIANTI DI PUBBLICA ILLUMINAZIONE AI FINI DEL RISPARMIO ENERGETICO - EFFICIENZA ENERGETICA E USO DI FONTI RINNOVABILI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090301.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "218601,87",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.4360045, 'lng': 12.8586412},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4022",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA E RIQUALIFICAZIONE URBANA ZONA ZIPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090101.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "540240,16",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5227776, 'lng': 13.243669},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4029",
        "ocTitoloProgetto": "RIQUALIFICAZIONE PUBBLICA ILLUMINAZIONE  AI FINI DEL RISPARMIO ENERGETICO   AREA URBANA COMUNE DI BARBARA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070511.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "46831,17",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.678728, 'lng': 13.106199},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4118",
        "ocTitoloProgetto": "INTERVENTO DI EFFICIENZA ENERGETICA SUGLI IMPIANTI DI PUBBLICA ILLUMINAZIONE SITUATI NELLE ZONE DEL CENTRO DEL COMUNE DI SENIGALLIA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090110.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "705414,55",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.7148337, 'lng': 13.2177939},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4157",
        "ocTitoloProgetto": "HOTEL ALESSANDRA DI AMALI ANDREA & C.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090907.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "24000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5112111, 'lng': 13.6213831},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4407",
        "ocTitoloProgetto": "IMPIANTO DI TRIGENERAZIONE POLO UNIVERSITARIO MONTE DAGO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081216.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "1353634,20",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6171442, 'lng': 13.5127759},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4419",
        "ocTitoloProgetto": "TELERISCALDAMENTO NUOVE UNIT\u00c3\u0083\u00c2\u00a0 ABITATIVE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081101.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "875177,61",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.5431619, 'lng': 13.3856226},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4435",
        "ocTitoloProgetto": "IMPIANTO GEOTERMICO SCUOLA MATERNA COLORELLA POLVERIGI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090311.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "133090,14",
        "ocCodCategoriaSpesa": "42",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: idroelettrica, geotermale e altra",
        "coordinate": {'lat': 43.5249549, 'lng': 13.3937978},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4477",
        "ocTitoloProgetto": "INTERVENTO DI RISTRUTTURAZIONE PER MIGLIORAMENTO EFFICIENZA ENERGETICA SCUOLA ELEMENTARE \"ALDO MORO\" - SENIGALLIA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090201.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "634662,96",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.7148337, 'lng': 13.2177939},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4487",
        "ocTitoloProgetto": "LOTTIZZAZIONE IP5 QUERCETTINO ALTO - AGUGLIANO - REALIZZAZIONE DI IMPIANTO DI TELERISCALDAMENTO ALIMENTATO A BIOMASSE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090728.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "488060,01",
        "ocCodCategoriaSpesa": "41",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: biomassa",
        "coordinate": {'lat': 43.5431619, 'lng': 13.3856226},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4490",
        "ocTitoloProgetto": "REALIZZAZIONE IMPIANTO TERMICO A POMPA DI CALORE CON SONDE GEOTERMICHE PRESSO IPAS \"PANZINI\" DI SENIGALLIA (AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090306.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "246946,24",
        "ocCodCategoriaSpesa": "42",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: idroelettrica, geotermale e altra",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4515",
        "ocTitoloProgetto": "INSTALLAZIONE DI IMPIANTO SOLARE TERMICO PRESSO SPOGLIATOIO DEL CAMPO SPORTIVO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "28032,99",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.530777, 'lng': 13.552923},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4516",
        "ocTitoloProgetto": "IMPIANTO SOLARE TERMICO NEL PARCO NATURALE REGIONALE \"GOLA DELLA ROSSA E DI FRASASSI\" - ZONA CAMPING LAGO FOSSI-GENGA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090124.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "9468,00",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.3494084, 'lng': 12.92619},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4520",
        "ocTitoloProgetto": "REALIZZAZIONE IMPIANTO SOLARE TERRITORIO NELLO SPOGLIATOIO DELLO STADIO COMUNALE DI VIA ROMA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090201.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "23678,76",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.4360045, 'lng': 12.8586412},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4561",
        "ocTitoloProgetto": "INTERVENTO RM DIMENSIONE CLIMA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090704.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "57225,29",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6097289, 'lng': 13.5173827},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7004",
        "ocTitoloProgetto": "ACANTO COUNTRY HOUSE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090617.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "5564,79",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.51914, 'lng': 13.5928},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7009",
        "ocTitoloProgetto": "HOTEL METROPOL",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090907.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6919117, 'lng': 13.2613242},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7025",
        "ocTitoloProgetto": "RISPARMIO ENERGETICO HOTEL DEI GALLI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090907.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "32110,49",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.7346496, 'lng': 13.194245},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7294",
        "ocTitoloProgetto": "CENTRO SPORTIVO GREEN SRL - REALIZZAZIONE IMPIANTO FOTOVOLTAICO INSTALLAZIONE POMPA ARIA ACQUA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090717.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "48010,26",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.48597, 'lng': 13.54872},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7457",
        "ocTitoloProgetto": "AMMODERNAMENTO E MIGLIORAMENTO DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099EFFICIENZA ENERGETICA DEGLI IMPIANTI DI PUBBLICA ILLUMINAZIONE DEL TERRITORIO COMUNALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090224.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "195358,35",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.530777, 'lng': 13.552923},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7467",
        "ocTitoloProgetto": "LAVORI DI MIGLIORAMENTO EFFICIENZA ENERGETICA IMPIANTI DI PUBBLICA ILLUMINAZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090301.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "356152,86",
        "ocCodCategoriaSpesa": "43",
        "ocDescrCategoriaSpesa": "Efficienza dell'energia, cogenerazione, gestione dell'energia",
        "coordinate": {'lat': 43.6125686, 'lng': 13.5042465},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7477",
        "ocTitoloProgetto": "REALIZZAZIONE NUOVO IMPIANTO FOTOVOLTAICO PRESSO CENTRO PER L'IMPIEGO, L'ORIENTAMENTO E LA FORMAZIONE DI ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090220.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "85831,69",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9022",
        "ocTitoloProgetto": "REALIZZAZIONE IMPIANTO FOTOVOLTAICO SULLA COPERTURA \"PALAZZO LI MADOU\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20101125.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "63599,36",
        "ocCodCategoriaSpesa": "40",
        "ocDescrCategoriaSpesa": "Energia rinnovabile: solare",
        "coordinate": {'lat': 43.6104284, 'lng': 13.507493},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEC248_03611",
        "ocTitoloProgetto": "LAVORI DI MESSA IN SICUREZZA ED EFFICIENTAMENTO ENERGETICO DELLA CENTRALE TERMICA DELLA SCUOLA ELEMENTARE ANNA FRANK DI VIALE DELLO SPORT E DELLA CENTRALE TERMICA DELLA SEDE COMUNALE DI VIA CACIAMPA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20191019.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "46458,26",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4903892, 'lng': 13.0836829},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUED965_05518",
        "ocTitoloProgetto": "LAVORI DI EFFICENTAMENTO ENERGETICO IMPIANTO DI PUBBLICA ILLUMINAZIONE IN LOC. SAN VITTORE E GENGA CAPOLUOGO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190416.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "50000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.42913919999999, 'lng': 12.935166},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF145_01369",
        "ocTitoloProgetto": "IMPIANTO FOTOVOLTAICO CASA MUNICIPALE E IMPIANTI DI ILLUMINAZIONE FOTOVOLTAICI AUTOALIMENTATI STRADE COMUNALI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190926.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "50000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4719105, 'lng': 13.0371047},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEG157_01713_0868181994",
        "ocTitoloProgetto": "LAVORI DI EFFICIENTAMENTO ENERGETICO DEL MAXI PARCHEGGIO SITO IN OSIMO IN VIA C.COLOMBO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20191016.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "130000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4884025, 'lng': 13.4785426},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEM318_00916",
        "ocTitoloProgetto": "ADEGUAMENTO IMPIANTI DI PUBBLICA ILLUMINAZIONE CON TECNOLOGIA AL LED",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "70000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6896089, 'lng': 13.1163739},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA13730",
        "ocTitoloProgetto": "CODICE PROGETTO: 13730 - PROGRAMMA OPERATIVO REGIONALE (POR) MARCHE FESR 2014\/2020 ASSE 4, AZIONE 13.2. \u00c2\u00bf INTERVENTO 13.2.1 \u00c2\u00bfINTERVENTI DI EFFICIENZA ENERGETICA E UTILIZZO DI FONTI RINNOVABILI NELLA PUBBLICA ILLUMINAZIONE\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181016.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "185404,58",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.655652, 'lng': 13.126452},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA13817",
        "ocTitoloProgetto": "CODICE PROGETTO: 13817 - PROGRAMMA OPERATIVO REGIONALE (POR) MARCHE FESR 2014\/2020 ASSE 4 \u00c2\u00bf AZIONE 13.1.2B \u00c2\u00bfINTERVENTI DI EFFICIENZA ENERGETICA NEGLI EDIFICI PUBBLICI  ADIBITI AD ATTIVIT\u00c3\u00a0 SPORTIVE\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180517.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "284598,50",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.5173798, 'lng': 13.2381919},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14254",
        "ocTitoloProgetto": "CODICE PROGETTO: 14254 - PROGRAMMA OPERATIVO REGIONALE (POR) MARCHE FESR 2014\/2020 ASSE 4 \u00c2\u00bf AZIONE 13.1.2B \u00c2\u00bfINTERVENTI DI EFFICIENZA ENERGETICA NEGLI EDIFICI PUBBLICI  ADIBITI AD ATTIVIT\u00c3\u00a0 SPORTIVE\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180803.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "300000,00",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.5948161, 'lng': 13.5106171},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14688",
        "ocTitoloProgetto": "CODICE PROGETTO: 14688 - PROGRAMMA OPERATIVO REGIONALE (POR) MARCHE FESR 2014\/2020  ASSE 4 \u00c2\u00bf AZIONE 13.1.2A \u00c2\u00bfINTERVENTI DI EFFICIENZA ENERGETICA NEGLI EDIFICI PUBBLICI\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190802.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "232500,02",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.5738048, 'lng': 13.2085854},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14765",
        "ocTitoloProgetto": "FONDO ENERGIA E MOBILIT\u00c3\u00a0 GESTIONE ARTIGIANCASSA S.P.A",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160609.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "16427998,66",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.563864, 'lng': 13.5131738},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18089",
        "ocTitoloProgetto": "CODICE PROGETTO: 18089 - POR MARCHE FESR 2014-2020 - ASSE 8 - AZIONE 25.1.2 - INTERVENTI DI EFFICIENZA ENERGETICA NEGLI EDIFICI PUBBLICI - EDILIZIA ERDIS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190927.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "689865,17",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.5913376, 'lng': 13.5151292},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18210",
        "ocTitoloProgetto": "CODICE PROGETTO: 18210 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 25.1 -INTERVENTO 25.1.4 - NUOVA PALAZZINA DIREZIONE SANITARIA, DIREZIONALE E AMMINISTRATIVA DELL'OSPEDALE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190731.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "4431314,52",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": {'lat': 43.6019431, 'lng': 13.4547895},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10078",
        "ocTitoloProgetto": "TASSI ALBERTO & C. S.A.S. (MANUTENZIONE STRAORDINARIA, IMPIANTI ARREDI ED ATTREZZATURE NELL'HOTEL ARGENTINA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080331.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "64738,91",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7096857,
            "lng": 13.2326466
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10135",
        "ocTitoloProgetto": "NUMANA BLU' S.P.A. (RISTRUTTURAZIONE, AMMODERNAMENTO, ADEGUAMENTO ALLE NORMATIVE DI SICUREZZA, ARREDAMENTO, ATTREZZATURE ED IMPIANTI NEL CAMPEGGIO NUMANA BL\u00c3\u0083\u00c2\u00b9 A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091120.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "91436,33",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4761111,
            "lng": 13.6330556
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10149",
        "ocTitoloProgetto": "LOCANDA OLIVI S.A.S. DI EMILI RAFFAELE (2\u00c3\u0082\u00c2\u00b0 STRALCIO MANUTENZIONE STRAORDINARIA, IMPIANTI, ARREDI ED ATTREZZATURE NELLA STRUTTURA RICETTIVA \"OSTERIA DI ADAMO CAMERE\" A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8996,06",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7066922,
            "lng": 13.1846033
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10161",
        "ocTitoloProgetto": "COUNTRY HOUSE IL TIGLIO DI FEBI PATRIZIA (AMMODERNAMENTO E REALIZZAZIONE DI IMPIANTI SPORTIVI NELL'ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"COUNTRY HOUSE IL TIGLIO\" A MERGO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090210.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7155,40",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4748824,
            "lng": 13.0410837
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10164",
        "ocTitoloProgetto": "HOTEL ATLANTIC DI MODESTI PAOLA E C. S.A.S. (1\u00c3\u0082\u00c2\u00b0 STRALCIO MANUTENZIONE STRAORDINARIA, IMPIANTI, ARREDI ED ATTREZZATURE NELL'HOTEL ATLANTIC A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "120027,03",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6820908,
            "lng": 13.2790527
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10170",
        "ocTitoloProgetto": "ACQUISIZIONE IN ECONOMIA DI MATERIALE PROMOZIONALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091001.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "119999,89",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10172",
        "ocTitoloProgetto": "ACQUISIZIONE IN ECONOMIA PUBBLICAZIONI PROMOZIONALI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091014.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "119999,59",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10223",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE TEATRO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20111018.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39968,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10298",
        "ocTitoloProgetto": "SERTORI ROBERTO (RIUSO DI EDIFICI CON TRASFORMAZIONE IN CASE ED APPARTAMENTI PER VACANZE \"IL VILLINO\" A LORETO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070515.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20190,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4443141,
            "lng": 13.6436986
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10540",
        "ocTitoloProgetto": "LA TABERNA SAS DI MARZELLA ANNAMARIA & C. (RIUSO DI EDIFICI CON TRASFORMAZIONE IN ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"LA TABERNA\" A CASTELFIDARDO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090909.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "27954,22",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.490915,
            "lng": 13.568777
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10545",
        "ocTitoloProgetto": "PINCINI FILIPPO (RISTRUTTURAZIONE ED AMPLIAMENTO DI UN COMPLESSO IMMOBILIARE DESTINATO AD AFFITTA CAMERE DI PROPRIET\u00c3\u0083\u00c2\u00a0 DI PINCINI FILIPPO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61014,21",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.550105,
            "lng": 13.4168622
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10667",
        "ocTitoloProgetto": "INIZIATIVA SISTEMI ON LINE - SITO IN LINGUA CINESE E GIAPPONESE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091022.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36907,50",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10961",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE MUSEI E BIBLIOTECHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110912.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10964",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE MUSEI E BIBLIOTECHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20121007.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11582",
        "ocTitoloProgetto": "REALIZZAZIONE \"CENTRO ESPOSITIVO DI ARTE CONTEMPORANEA\" PRESSO PALAZZO SCALZI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110120.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "299835,22",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4312903,
            "lng": 12.8573502
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11688",
        "ocTitoloProgetto": "BORSE LAVORO NEL SETTORE VALORIZZAZIONE BENI CULTURALI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20130210.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11811",
        "ocTitoloProgetto": "MOSTRA CENTENARIO GIOVAN BATTISTA SALVI DETTO IL SASSOFERRATO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120717.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61174,74",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.4360045,
            "lng": 12.8586412
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11835",
        "ocTitoloProgetto": "SISTEMAZIONE AREE ESTERNE ED ADIACENTI LE MURA CASTELLANE DEL CAPOLUOGO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090529.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "251916,21",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.612717,
            "lng": 13.158168
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11845",
        "ocTitoloProgetto": "PALAZZO PIANETTI - REALIZZAZIONE MUSEO ARCHEOLOGICO - VIA XV SETTEMBRE- RESTAURO FACCIATE E REALIZZAZIONE SALE MUSEALI AL PIANO TERRA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1072644,62",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5270861,
            "lng": 13.2463797
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11886",
        "ocTitoloProgetto": "CENTENARIO DI GIOVAN BATTISTA PERGOLESI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080616.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.5218089,
            "lng": 13.2441627
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA12039",
        "ocTitoloProgetto": "LAVORI DI RIQUALIFICAZIOE DI PIAZZA CAVOUR - FONDI PAR_FAS 2007-2013 INTERVENTO 5.3.1.3 RIQUALIFICAZIONE DELL'AREA URBANA AL CENTRO DELLA CITT\u00c3\u0083\u00c2\u00a0 DI ANCONA - ACCORDO DI PROGRAMMA QUADRO GENERALE (APQR)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20051129.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1900000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.6168737,
            "lng": 13.5170765
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA12207",
        "ocTitoloProgetto": "PALAZZO DELLA SIGNORIA - ALLESTIMENTO SALA LETTURA PRESSO LA \"SALARA\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091201.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "124929,96",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5270861,
            "lng": 13.2463797
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA12236",
        "ocTitoloProgetto": "PALAZZO DELLA SIGNORIA: REALIZZAZIONE DI UN SOPPALCO METALLICO, SCAFFALATURA ED ARREDI, IMPIANTO TERMICO ED ELETTRICO",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": null,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "140000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5270861,
            "lng": 13.2463797
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13144",
        "ocTitoloProgetto": "RESTAURO DEL TEATRO-CENTRO CULTURALE POLIVALENTE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120621.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4326531,
            "lng": 13.1866586
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13145",
        "ocTitoloProgetto": "INTERVENTO SU PALAZZO MADONNA DEL BUON GES\u00c3\u0083\u00c2\u00b9",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.3355002,
            "lng": 12.9034382
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13151",
        "ocTitoloProgetto": "INTERVENTO SUL PALAZZO DEL PODEST\u00c3\u0083\u00c2\u00a0 2\u00c3\u0082\u00c2\u00b0 LOTTO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "400000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.3449672,
            "lng": 12.9062153
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13453",
        "ocTitoloProgetto": "SISTEMAZIONE E RESTAURO GIARDINI DEL POIO E REALIZZAZIONE DELLA NUOVA STRUTTURA DI COLLEGAMENTO TRA PALAZZO DEL PODEST\u00c3\u0083\u00c2\u00a0 E PALAZZO DEL BUON GES\u00c3\u0083\u00c2\u00b9",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "318400,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.3449672,
            "lng": 12.9062153
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13465",
        "ocTitoloProgetto": "AMPLIAMENTO E RIORGANIZZAZIONE DEGLI SPAZI ESPOSITIVI DELL'ATTUALE MUSEO DI ARTE STORIA E TERRITORIO PRESSO PALAZZO FIUMI SERMATTEI E REALIZZAZIONE DELLA BIBLIOTECA E DELL'ARCHIVIO STORICO PRESSO L'EX MUNICIPIO - 2\u00c3\u0082\u00c2\u00b0 STRALCIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120301.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "261279,04",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4291392,
            "lng": 12.935166
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13660",
        "ocTitoloProgetto": "LIRICA INSIEME",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20101210.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.4861459,
            "lng": 13.4817969
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13966",
        "ocTitoloProgetto": "RIQUALIFICAZIONE E VALORIZZAZIONE DI VECCHIE STRADE VICINALI ATTUALMENTE DISMESSE PER REALIZZAZIONE DI PERCORSI AGRITURISTICI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081103.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "349999,58",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.5808096,
            "lng": 13.0246911
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14017",
        "ocTitoloProgetto": "RECUPERO E RIQUALIFICAZIONE DEL COMPLESSO MONUMENTALE EX CONVENTO SACRO CUORE. PRIMO STRALCIO FUNZIONALE. TEATRO SPERIMENTALE E AUDITORIUM.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20050901.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "957598,34",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5766937,
            "lng": 13.2061722
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14018",
        "ocTitoloProgetto": "RESTAURO E VALORIZZAZIONE EX CONVENTO DELLE CLARISSE. MUSEO INTERNAZIONALE DELL'IMMAGINE POSTALE E CANTINE DEI VECCHI SAPORI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070626.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "899992,47",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5804029,
            "lng": 13.166622
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14019",
        "ocTitoloProgetto": "VALORIZZAZIONE DEL PATRIMONIO STORICO ARCHITETTONICO CULTURALE. RESTAURO E RIQUALIFICAZIONE DEL TORRIONE DELL'OROLOGIO E AMPLIAMENTO MUSEO COMUNALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090314.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "132777,41",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5256583,
            "lng": 13.062963
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14020",
        "ocTitoloProgetto": "PROGETTO DI RIPRISTINO DEGLI EQUILIBRI NATURALI DELLE AREE DI PERTINENZA FLUVIALE IN DESTRA IDROGRAFICA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20120531.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "41991,00",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.5371076,
            "lng": 13.2899882
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15321",
        "ocTitoloProgetto": "RESTAURO DELLA FONTANA DELLA COSTA D'ANCONA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150301.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4413345,
            "lng": 13.6056396
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15322",
        "ocTitoloProgetto": "RESTAURO DELLA FONTE DEL CARPINE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150301.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90400,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4319705,
            "lng": 13.6082737
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15337",
        "ocTitoloProgetto": "RESTAURO DELLA FONTANA DELLA VIA DELLA CROCE, SCALINATA E CROCE MONUMENTALE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20130801.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4383438,
            "lng": 13.6068867
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15343",
        "ocTitoloProgetto": "INIZIATIVE STRAORDINARIE DI PROMOZIONE TURISTICA DELLA CITT\u00c3\u0083\u00c2\u00a0 DI SENIGALLIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140529.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "101761,58",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7148218,
            "lng": 13.2181036
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16552",
        "ocTitoloProgetto": "FIERE ESTERE I\u00c3\u0082\u00c2\u00b0 SEMESTRE 2015",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150310.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16615",
        "ocTitoloProgetto": "HOTEL ITALIA DI PASQUINI P., SARTIRANA A.M.A. & C. - S.N.C. (AMMODERNAMENTO DELL'HOTEL ITALIA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34550,47",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7084591,
            "lng": 13.2344723
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16808",
        "ocTitoloProgetto": "INIZIATIVA PROMOZIONALE ALL'ESTERO DENOMINATA WTM 2015 WORLD TRAVEL MARKET - LONDRA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150803.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38430,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17273",
        "ocTitoloProgetto": "HOTEL UNIVERSAL DI ALBONETTI ROBERTA & C. S.N.C. (AMMODERNAMENTO, RIQUALIFICAZIONE, STRAORDINARIA MANUTENZIONE, ADEGUAMENTO ALLE NORMATIVE DI SICUREZZA E ARREDAMENTO NELL'HOTEL UNIVERSAL A SENIGALLIA- AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61517,88",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7225328,
            "lng": 13.2142781
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17321",
        "ocTitoloProgetto": "ALBERGO BEL SIT DEI F.LLI MANFREDI S.N.C. (MANUTENZIONE STRAORDINARIA, IMPIANTI, ARREDI ED ATTREZZATURE NELL'ALBERGO BEL SIT A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080331.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24308,02",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7171987,
            "lng": 13.1724578
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17532",
        "ocTitoloProgetto": "HOTEL CRISTALLO DI ZOPPINI E. & C. S.N.C. (AMMODERNAMENTO E REALIZZAZIONE IMPIANTI SPORTIVI NELL'HOTEL CRISTALLO A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "144470,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7151758,
            "lng": 13.224758
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17536",
        "ocTitoloProgetto": "GRILLI MARCO (REALIZZAZIONE DI CASE ED APPARTAMENTI PER VACANZE A SIROLO - AN)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "144470,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5325469,
            "lng": 13.6051674
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17730",
        "ocTitoloProgetto": "AVVIO PROCEDURA NEGOZIATA ATTUAZIONE PIANO DI COMUNIC. INTEGRATO E FOCALIZZAZIONE MARCHIGIANA DELLE CLIP E DELLA SERIE TV \"CHE DIO CI AIUTI 3\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20151229.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39500,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6105194,
            "lng": 13.5103008
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA18087",
        "ocTitoloProgetto": "PALAZZO PIANETTI - MANUTENZIONE STRAORDINARIA FACCIATE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20080905.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "199671,04",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5212428,
            "lng": 13.2420911
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3663",
        "ocTitoloProgetto": "PARCO DELLE SIGARAIE: OPERAZIONE DI COMPLETAMENTO E RIQUALIFICAZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "648307,70",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5997269,
            "lng": 13.325532
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3680",
        "ocTitoloProgetto": "GREENWAY DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099ESINO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 MACROLOTTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 1\u00c3\u0082\u00c2\u00b0 STRALCIO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 INTERVENTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 SOTTOSPAZIO (TERRAIN VAGUE TRA FIUME E VIADOTTO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "198672,68",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.4471034,
            "lng": 13.0154659
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3708",
        "ocTitoloProgetto": "POR FESR 2007-2013 ASSE 5 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 VALORIZZAZIONE CULTURALE : RISANAMENTO CONSERVATIVO E RESTAURO CASTELLO DEL CASSERO NEL COMUNE DI CAMERATA PICENA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081015.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "172280,53",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.578705,
            "lng": 13.3521829
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3775",
        "ocTitoloProgetto": "GREENWAY DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099ESINO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 MACROLOTTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 3\u00c3\u0082\u00c2\u00b0 STRALCIO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 INTERVENTO A \u00c3\u00a2\u00c2\u0080\u00c2\u0093 COMPLETAMENTO INFRASTRUTTURAZIONE AMBIENTALE NEL TRATTO SAN VITTORE \u00c3\u00a2\u00c2\u0080\u00c2\u0093 GROTTE DI FRASASSI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "191641,18",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.3494084,
            "lng": 12.92619
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3781",
        "ocTitoloProgetto": "RIQUALIFICAZIONE DEI GIARDINI FUORI PORTA (FOR' D' PORTA) CON COSTRUZIONE ANNESSO BAR UBICATI IN VIA LORETANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070213.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "467365,52",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.530777,
            "lng": 13.552923
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3785",
        "ocTitoloProgetto": "F.L.U.M.E.N. - PARCO FLUVIALE LINEARE LUNGO LE SPONDE DEL FIUME ESINO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20020101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "748511,95",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.5634345,
            "lng": 13.2505178
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3787",
        "ocTitoloProgetto": "LAVORI DI RISANAMENTO CONSERVATIVO PRESSO IL TEATRO COMUNALE \"V. ALFIERI\" DI MONTEMARCIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20051201.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "162110,61",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.639684,
            "lng": 13.3109985
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3796",
        "ocTitoloProgetto": "INTERVENTO 5.2.2.58.01 - RIQUALIFICAZIONE E VALORIZZAZIONE DI AREE E COMPLESSI DI PREGIO STORICO-ARCHITETTONICO \u00c3\u00a2\u00c2\u0080\u00c2\u0093RIFACIMENTO DELLA PAVIMENTAZIONE DELLE VIE INTERNE ALLE MURA E RESTAURO DELLE MURA DELLA FRAZIONE DI CASTEL D\u00c3\u00a2\u00c2\u0080\u00c2\u0099EMILIO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20051227.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "474016,11",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5431619,
            "lng": 13.3856226
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3797",
        "ocTitoloProgetto": "RIFACIMENTO DEL MURO DI CINTA NEL PARCO \u00c3\u00a2\u00c2\u0080\u00c2\u009cG. LEOPARDI\u00c3\u00a2\u00c2\u0080\u00c2\u009d PROSPICENTE VIALE MARTIRI DELLA RESISTENZA.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20050503.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "384096,75",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.499921,
            "lng": 12.939746
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3814",
        "ocTitoloProgetto": "PIT  \"MISA - SUASA\" - RECUPERO E VALORIZZAZIONE STORICO - CULTURALE - RESTAURO E RIUSO FUNZIONALE DEL PALZZO DE POCCINTIBUS - SECONDO LOTTO FUNZIONALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080606.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "346940,78",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.6127599,
            "lng": 13.1572752
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3827",
        "ocTitoloProgetto": "RECUPERO EDIFICIO STORICO TESTIMONIALE \"TORRIONE\" DI VIA PORTA LOMBARDA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080601.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "187485,13",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4961036,
            "lng": 13.3108492
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3830",
        "ocTitoloProgetto": "RECUPERO VALORIZZAZIONE E RIQUALIFICAZIONE DEL LAGO GRANDE DI PORTONOVO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090406.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "190000,00",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.6167855,
            "lng": 13.5188848
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3831",
        "ocTitoloProgetto": "RECUPERO E VALORIZZAZIONE DELLA ROCCA MEDIOEVALE DI OFFAGNA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081016.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "214849,79",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.52736,
            "lng": 13.4416903
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3869",
        "ocTitoloProgetto": "POR FESR 2007-2013 ASSE 5 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 VALORIZZAZIONE CULTURALE: RECUPERO FONTANE,LAVATOI,VECCHIE SORGENTI DI USO PUBBLICO NEL TERRITORIO DEL COMUNE DI POLVERIGI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080922.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "249205,03",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.5249549,
            "lng": 13.3937978
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3896",
        "ocTitoloProgetto": "RECUPERO E VALORIZZAZIONE STORICO-CULTURALE - RISTRUTTURAZIONE VILLINO ROMUALDO II STRALCIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20021219.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "589867,78",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.671747,
            "lng": 13.1063535
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3897",
        "ocTitoloProgetto": "RECUPERO E VALORIZZAZIONE STORICO-CULTURALE - SUASA, DOMUS REPUBBICANA - PROGETTO DI RESTAURO E DI MUSEALIZZAZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090108.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "220805,77",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.6073717,
            "lng": 12.9763244
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7621",
        "ocTitoloProgetto": "RIQUALIFICAZIONE E RIFUNZIONALIZZAZIONE DEL CINEMA TEATRO CASANOVA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080301.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "560076,65",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.3188834,
            "lng": 12.9860296
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7738",
        "ocTitoloProgetto": "PROGETTO PALCOSCENICO MARCHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "360000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6179716,
            "lng": 13.515591
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7757",
        "ocTitoloProgetto": "MOSTRA GIUSEPPE MARTINI. LA VITA, LE OPERE.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100623.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "35424,90",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.486718,
            "lng": 13.4844786
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7914",
        "ocTitoloProgetto": "MARCHE FILM COMMISSION 2009-2011",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091222.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "70000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6073642,
            "lng": 13.5124658
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7923",
        "ocTitoloProgetto": "L'ACQUA E LA MEMORIA",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20080617.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "240000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.5270861,
            "lng": 13.2463797
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7923",
        "ocTitoloProgetto": "L'ACQUA E LA MEMORIA",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20080617.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "240000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.4744199,
            "lng": 13.1148347
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7932",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN PLANETARIO MULTIMEDIALE DIGITALE SEMIFISSO PRESSO IL CENTRO SERVIZI DEL PARCO GOLA DELLA ROSSA E DI FRASASSI SITO IN LOC. CASTELLETTA DEL COMUNE DI FABRIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100618.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "88414,80",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.4028547,
            "lng": 13.0072526
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7987",
        "ocTitoloProgetto": "VALORIZZAZIONE DI ITINERARI ARCHEOLOGICI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100119.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25000,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.5189205,
            "lng": 13.6181668
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8041",
        "ocTitoloProgetto": "CASA MUSEO G.SPONTINI: REALIZZAZIONE E ADEGUAMENTO IMPIANTI TECNOLOGICI (D.M. 37\/2008)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100123.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "111449,01",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4805968,
            "lng": 13.1364848
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8087",
        "ocTitoloProgetto": "EREDI DI PASQUINI PIERANGELO(RISTRUTTURAZIONE HOTEL KON TIKI A NUMANA- AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61916,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.488214,
            "lng": 13.629606
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8095",
        "ocTitoloProgetto": "MA.GI.A. SAS DI TIRIBOCO R. & C. (AMPLIAMENTO, MANUTENZIONE STRAORDINARIA, RIQUALIFICAZIONE E SUPERAMENTO BARRIERE ARCHITETTONICHE, OPERE DI PASSAGGIO A CLASSE SUPERIORE E ARREDAMENTO DELL'HOTEL ANCORE A SENIGALLIA (AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070430.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "52494,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7361814,
            "lng": 13.1917204
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8096",
        "ocTitoloProgetto": "HOTEL ATLANTIC DI MODESTI PAOLA, NORINA & C. S.A.S. (MANUTENZIONE STRAORDINARIA, AMMODERNAMENTO, RIQUALIFICAZIONE, ADEGUAMENTO ALLE ESIGENZE DELL'HANDICAP DELL'HOTEL ATLANTIC A SENIGALLIA AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "54311,10",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6821134,
            "lng": 13.279016
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8101",
        "ocTitoloProgetto": "HOTEL CRISTALLO DI ZOPPINI E. & C. S.N.C. (MANUTENZIONE STRAORDINARIA E AMMODERNAMENTO DELL'ALBERGO CRISTALLO A SENIGALLIA AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070208.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33449,41",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7151758,
            "lng": 13.224758
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8113",
        "ocTitoloProgetto": "HOTEL EMILIA S.R.L. (MANUTENZIONE STRAORDINARIA, AMMODERNAMENTO HOTEL EMILIA AD ANCONA)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070315.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "49129,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5625225,
            "lng": 13.5826134
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8116",
        "ocTitoloProgetto": "HOTEL NUMANA S.R.L. (STRAORDINARIA MANUTENZIONE, AMMODERNAMENTO, ATTREZZATURE E IMPIANTI E ADEGUAMENTO ALLE NORME DI SICUREZZA DELL'HOTEL NUMANA PALACE A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070126.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38640,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4967281,
            "lng": 13.6250946
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8124",
        "ocTitoloProgetto": "COMPLETAMENTO LAVORI DI RISANAMENTO CONSERVATIVO DELLE EX CANTINE DEL MONASTERO DI SAN LORENZO PER UN MUSEO DELLA CITT\u00c3\u0083\u00c2\u00a0 DI CUPRAMONTANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080923.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "188531,91",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4463181,
            "lng": 13.116565
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8125",
        "ocTitoloProgetto": "RIPRISTINO E RISANAMENTO DELLA FONTE DELLE BELLEZZE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "56624,84",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4445537,
            "lng": 13.6046814
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8137",
        "ocTitoloProgetto": "METROPOL S.A.S. DI SCHULTZ LIES EDELGARD E C. (RISTRUTTURAZIONE E RIQUALIFICAZIONE TRAMITE SUPERAMENTO DELLE BARRIERE ARCHITETTONICHE DELL'HOTEL METROPOL A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "73118,76",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7008288,
            "lng": 13.2466219
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8140",
        "ocTitoloProgetto": "HOTEL MAREBLU' SRL (AMMODERNAMENTO, RIQUALIFICAZIONE TRAMITE INTERVENTI DI ADEGUAMENTO ALLE ESIGENZE DELL'HANDICAP, ANCHE SENSORIALE, COMPRESO IL SUPERAMENTO DELLE BARRIERE ARCHITETTONICHE, IMPIEGO DI TECNOLOGIE E BIOEDILIZIA, INTRODUZIONE DI INNOVAZIONI TECNOLOGICHE, INSTALLAZIONE DI IMPIANTISTICA,",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070131.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15752,94",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7231093,
            "lng": 13.2132598
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8188",
        "ocTitoloProgetto": "HOTEL PINETA SRL. (COSTRUZIONE HOTEL PINETA A MONSANO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080606.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5628386,
            "lng": 13.2763585
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8283",
        "ocTitoloProgetto": "PROGETTAZIONE E PRODUZIONE DI FILMATI PUBBLICITARI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091007.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "401549,26",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8285",
        "ocTitoloProgetto": "RECUPERO FUNZIONALE DEL COMPLESSO SAN FRANCESCO PER REALIZZAZIONE POLO BIBLIOTECARIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1705501,24",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.335907,
            "lng": 12.9044838
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8296",
        "ocTitoloProgetto": "MOSTRA \"RITORNO A LORETO DELL'ANNUNCIAZIONE DI FEDERICO BAROCCI\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20000,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.4410346,
            "lng": 13.6109412
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8318",
        "ocTitoloProgetto": "MORGANTI SNC DI MORGANTI ANDREA E C. (MANUTENZIONE STRAORDINARIA DELL'HOTEL DEI GALLI A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "14436,24",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7346496,
            "lng": 13.194245
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8344",
        "ocTitoloProgetto": "MOSTRA \"PASQUALINO ROSSI. LE MARCHE E I CAPOLAVORI DI S. LUCIA\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080801.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "72752,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.44816,
            "lng": 13.0140907
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8348",
        "ocTitoloProgetto": "MOROBELLO DI SANTONI ALDO (ADESIONE A SISTEMI DI GESTIONE AMBIENTALE RELATIVI AD UN UTILIZZO OCULATO DELLE RISORSE, ELIMINANDO GLI SPRECHI, FAVORENDO IL RICICLO, IL RIUTILIZZO E LA RACCOLTA DIFFERENZIATA NELL'ALBERGO MOROBELLO RESORT A SAN MARCELLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "134600,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5784484,
            "lng": 13.2217604
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8509",
        "ocTitoloProgetto": "RECUPERO E RIPRISTINO DEL COMPLESSO MONUMENTALE \"EREMO DEL SASSO\" IN VALLEREMITA DI FABRIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090223.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3411000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.2970333,
            "lng": 12.873029
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8537",
        "ocTitoloProgetto": "RESTAURO DELLA FONTANA DEI GALLI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84706,06",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4398241,
            "lng": 13.6075145
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8543",
        "ocTitoloProgetto": "RESTAURO DELLA FONTE DELLA BUFFOLARECCIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20080101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "155000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.4397131,
            "lng": 13.6192917
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8870",
        "ocTitoloProgetto": "PROGETTO \"GIORGIO FU\u00c3\u0083\u00c2\u00a0. UN IMPRENDITORE DI CULTURA\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091113.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21363,94",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": 43.6171442,
            "lng": 13.5127759
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8889",
        "ocTitoloProgetto": "IMMOBILIARE SAN FRANCESCO S.R.L. (TRASFORMAZIONE IN ALBERGO PALAZZO RUSCHIONI A CAMERANO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "95566,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5309814,
            "lng": 13.5525802
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8898",
        "ocTitoloProgetto": "NUMANA BLU' S.P.A. (RICOSTRUZIONE PISCINA E SERVIZI E OPERE DI MANUTENZIONE STRAORDINARIA CAMPING NUMANA BLU A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "96600,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4767515,
            "lng": 13.6361377
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8899",
        "ocTitoloProgetto": "NUOVO FIORE COOPERATIVA SOCIALE A R.L. (AMMODERNAMENTO E RIQUALIFICAZIONE DEL CAMPING SPIAGGIA DI VELLUTO A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "27593,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7009001,
            "lng": 13.2469048
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8990",
        "ocTitoloProgetto": "CESARETTI GABRIELLA (REALIZZAZIONE ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE LE BETULLE AD ARCEVIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070129.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "107190,63",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4823458,
            "lng": 12.9976686
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8998",
        "ocTitoloProgetto": "AIRONE COUNTRY HOUSE (RISTRUTTURAZIONE PER TRASFORMAZIONE IN ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"AIRONE\" A OSIMO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070130.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "51148,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5124814,
            "lng": 13.4216702
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8999",
        "ocTitoloProgetto": "BENIGNI GIUSEPPE (REALIZZAZIONE DI NUOVA ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"VILLA CORALIA\" A OSIMO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071213.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "134600,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4882633,
            "lng": 13.5291668
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9115",
        "ocTitoloProgetto": "PICCHIO BEACH SRL (RISTRUTTURAZIONE DI STABILIMENTO BALNEARE PICCHIO BEACH A FALCONARA MARITTIMA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070510.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33810,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6282768,
            "lng": 13.4027815
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9199",
        "ocTitoloProgetto": "SOCIETA' IMMOBILIARE RIVIERA ADRIATICA - S.I.R.A. S.P.A. (STRAORDINARIA MANUTENZIONE DELL'HOTEL RITZ A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080208.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34264,97",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.706756,
            "lng": 13.23682
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9214",
        "ocTitoloProgetto": "ALBERGO ELENA DI ROMAGNOLI LUIGI E C. S.N.C. (STRAORDINARIA MANUTENZIONE ALBERGO ELENA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091125.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7127,40",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.725776,
            "lng": 13.2060752
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9321",
        "ocTitoloProgetto": "MA.GI.A. SAS DI TIRIBOCO R. & C. (RISTRUTTURAZIONE E AMPLIAMENTO HOTEL ANCORE A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091110.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8902,73",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7361814,
            "lng": 13.1917204
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9356",
        "ocTitoloProgetto": "HOTEL BOLOGNA S.R.L. (RISTRUTTURAZIONE HOTEL BOLOGNA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091202.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "32175,12",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7238013,
            "lng": 13.2118028
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9361",
        "ocTitoloProgetto": "ACANTO COUNTRY HOUSE SNC DI BURATTINI GIANLUCA (2O STRALCIO RISTRUTTURAZIONE DI UN RUSTICO DA ADIBIRE A ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE ACANTO COUNTRY HOUSE A SIROLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080131.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15574,96",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.51914,
            "lng": 13.5928
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9366",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE MUSEI E BIBLIOTECHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20111018.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "122527,60",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9371",
        "ocTitoloProgetto": "LA CIMINIERA 1846 DI TOMASSETTI GIANCARLO & C. S.A.S. (MANUTENZIONE STRAORDINARIA SULL'IMMOBILE DESTINATO AD ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"LA CIMINIERA 1846\" A STAFFOLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080227.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "10690,78",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4363424,
            "lng": 13.1883748
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9374",
        "ocTitoloProgetto": "AIRONE SNC (2\u00c3\u0082\u00c2\u00b0 STRALCIO RISTRUTTURAZIONE DI FABBRICATI RURALI DA DESTINARE AD ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"AIRONE\" A GENGA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091123.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "99373,67",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.407987,
            "lng": 12.936847
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9376",
        "ocTitoloProgetto": "LES PARASOLS DI PINCINI FILIPPO & C. S.A.S (RISTRUTTURAZIONE STABILIMENTO BALNEARE LES PARASOLS A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8623,65",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.4977671,
            "lng": 13.6249215
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9377",
        "ocTitoloProgetto": "CAKAO BEACH CLUB DI MAZZI MARIO E C. SAS (DEMOLIZIONE E RICOSTRUZIONE DI STABILIMENTO BALNEARE CAKAO BEACH CLUB AD ANCONA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7127,40",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.616867,
            "lng": 13.4243638
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9378",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN'AREA UMIDA CONTIGUA AL FIUME MUSONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060824.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "68293,26",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": 43.4562943,
            "lng": 13.6286299
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9380",
        "ocTitoloProgetto": "BORGOPARVO S.R.L. (RIUSO DI EDIFICI CON TRASFORMAZIONE IN ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"COUNTRY-HOUSE BORGOPARVO\" AD ANCONA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "89463,60",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5147749,
            "lng": 13.5832227
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9382",
        "ocTitoloProgetto": "HOTEL PERLA DI MAIOLATESI DONATELLA E C. SNC (MANUTENZIONE STRAORDINARIA E AMMODERNAMENTO HOTEL PERLA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7636,50",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.69989,
            "lng": 13.249
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9383",
        "ocTitoloProgetto": "HOTEL EMILIA S.R.L. (AMMODERNAMENTO HOTEL EMILIA AD ANCONA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090930.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "50492,27",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.5608791,
            "lng": 13.6021938
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9624",
        "ocTitoloProgetto": "RESTAURO E SISTEMAZIONE DI VIA OTTORINO MANNI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20041201.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "191696,26",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.7154806,
            "lng": 13.2197376
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9625",
        "ocTitoloProgetto": "RESTAURO, MIGLIORAMENTO SISMICO E ABBATTIMENTO BARRIERE ARCHITETTONICHE DI PALAZZETTO BAVIERA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20060315.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1313633,74",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": 43.7152807,
            "lng": 13.2194919
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9788",
        "ocTitoloProgetto": "BIQUBO S.R.L. (MANUTENZIONE STRAORDINARIA, IMPIANTI ARREDI ED ATTREZZATURE NELLA STRUTTURA RICETTIVA \"RELAIS DEL BORGO HOTEL & SPA\" A STAFFOLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "115576,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.432505,
            "lng": 13.18606
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9790",
        "ocTitoloProgetto": "ALBERGO RISTORANTE PINETA S.A.S. DI DELL'UOMO T. & N. (AMMODERNAMENTO E REALIZZAZIONE IMPIANTI TERMICI NELL'ALBERGO RISTORANTE PINETA A FABRIANO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080430.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7153,31",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.2287217,
            "lng": 12.8681255
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9865",
        "ocTitoloProgetto": "INIZIATIVA SISTEMI ON LINE SITO WEB MARCHE VOYAGER",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090601.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "11900,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9866",
        "ocTitoloProgetto": "REALIZZAZIONE PUBBLICIT\u00c3\u0083\u00c2\u00a0 RADIOFONICA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090325.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "105633,01",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9877",
        "ocTitoloProgetto": "FIERE, BORSE ED INIZIATIVE PROMOZIONALI IN ITALIA E ALL'ESTERO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090325.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "104468,48",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEB77H14002320001",
        "ocTitoloProgetto": "VERSO L'EXPO 2015 DA MARCHE ENDURANCE LIFESTYLE 2014 A TIPICIT\u00c3\u00afA' MARCHE 2015",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20140414.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "650000,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": 43.7148337,
            "lng": 13.2177939
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-ANCONA",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA, RESTAURO, PROTEZIONE E VALORIZZAZIONE DELL'ANFITEATRO ROMANO DI ANCONA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20191001.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1500000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.6236517,
            "lng": 13.5110149
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-BELLAGUGLIANO",
        "ocTitoloProgetto": "RESTAURO E CONSOLIDAMENTO DELLA TORRE CAMPANARIA DELLA CHIESA S. FRANCESCO IN VIA CONVENTO - AGUGLIANO (AN)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160501.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.5651726,
            "lng": 13.3856365
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-CITTADELLAANCONA",
        "ocTitoloProgetto": "RECUPERO E RIQUALIFICAZIONE DEL COMPLESSO DELLA CITTADELLA DI ANCONA - RECUPERO E RESTAURO DELLA CINTA MURARIA E PULIZIA CORTILE E AREE INTERNE ALLE MURA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20180501.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3000000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.6133583,
            "lng": 13.5085674
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-NUMANA",
        "ocTitoloProgetto": "ALLESTIMENTO POLO MUSEALE E CENTRO DI VISITA PER LA VALORIZZAZIONE DEL PATRIMONIO CULTURALE PICENO NELL'AREA DEL PARCO DEL CONERO PRESSO L'IMMOBILE EX SCUOLA \"ELIA\" DI NUMANA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "800000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.513985,
            "lng": 13.620673
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-POLVERIGI",
        "ocTitoloProgetto": "RIQUALIFICAZIONE DEL COMPLESSO EDILIZIO DENOMINATO  VILLA NAPPI - POLVERIGI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "300000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.5250171,
            "lng": 13.3977573
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00123",
        "ocTitoloProgetto": "LAVORI DI REALIZZAZIONE NUOVO CAMPO SPORTIVO__POLIVALENTE E COPERTURA CAMPO CALCIO A 5, VIA W. TOBAGI FRAZIONE STAZIONE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181001.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "375000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.4871213,
            "lng": 13.145121
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00183",
        "ocTitoloProgetto": "REALIZZAZIONE IMPIANTO SPORTIVO POLIVALENTE COPERTO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181201.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "300000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.5248517,
            "lng": 13.3938723
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00253",
        "ocTitoloProgetto": "LAVORI DI RESTAURO E RISANAMENTO CONSERVATIVO DELLE FACCIATE DEL PALASPORT BADIALI . 1_ STRALCIO COMUNE DI FALCONARA MARITTIMA - VIA DELLO STADIO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20181201.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "129250,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.6220339,
            "lng": 13.3702811
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00254",
        "ocTitoloProgetto": "RISTRUTTURAZIONE DOCCE E SERVIZI IGIENICI DI DUE SPOGLIATOI DEL PALASPORT GIANFRANCO BADIALI COMUNE DI FALCONARA MARITTIMA VIA STADIO N.12",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20181001.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30250,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.6220339,
            "lng": 13.3702811
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEA769_05322",
        "ocTitoloProgetto": "INTERVENTO LOCALE DI CONSOLIDAMENTO RIPRISTINO DANNI DEI LOCALI DEL CENTRO DI AGGREGAZIONE GIOVANILE (CAG) DANNEGGIATI DAL SISMA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190730.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "50000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.5830655,
            "lng": 13.1690011
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEC060_01660",
        "ocTitoloProgetto": "LAVORI PER ADEGUAMENTO ALLE NORMATIVE ANTINCENDIO EX TEATRO \"B GIGLI\" SITO NEL CAPOLUOGO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191009.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33780,83",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.4871213,
            "lng": 13.145121
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEC100_06288",
        "ocTitoloProgetto": "LAVORI DI EFFICIENTAMENTO ENERGETICO MEDIANTE SOSTITUZIONE DELLA TAMPONATURA ESTERNA DEL PALAZZETTO DELLO SPORT SITO IN PIAZZALE OLIMPIA DEL COMUNE DI CASTELFIDARDO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191029.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "177879,52",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.4631153,
            "lng": 13.5514218
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF600_01398",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA PER EFFICIENTAMENTO ENERGETICO DELL'IMPIANTO TERMICO DELLA SALA POLIVALENTE DI VIA BRUNO BUOZZI N. 9",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190920.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "49684,44",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.4815672,
            "lng": 13.1385238
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF634_02665",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA PER L'EFFICIENTAMENTO E RIQUALIFICAZIONE ENERGETICA DEGLI IMPIANTI DI ILLUMINAZIONE IN VARI IMPIANTI SPORTIVI COMUNALI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21864,80",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.6006049,
            "lng": 13.2721197
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF634_02943",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA PER L'EFFICIENTAMENTO E RIQUALIFICAZIONE ENERGETICA DELL'IMPIANTO DI CLIMATIZZAZIONE DEL CENTRO TURISTICO CARLO URBANI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46425,41",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.6006049,
            "lng": 13.2721197
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11940",
        "ocTitoloProgetto": "CODICE PROGETTO: 11940 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11944",
        "ocTitoloProgetto": "CODICE PROGETTO: 11944 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING CECILIA GOBBI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "13285,80",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11974",
        "ocTitoloProgetto": "CODICE PROGETTO: 11974 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING  SAURO SCORTICHINI",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20161107.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3660,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11983",
        "ocTitoloProgetto": "CODICE PROGETTO: 11983 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161005.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2440,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11985",
        "ocTitoloProgetto": "CODICE PROGETTO: 11985 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "14640,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11986",
        "ocTitoloProgetto": "CODICE PROGETTO: 11986 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161004.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11988",
        "ocTitoloProgetto": "CODICE PROGETTO: 11988 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161004.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11989",
        "ocTitoloProgetto": "CODICE PROGETTO: 11989 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11994",
        "ocTitoloProgetto": "CODICE PROGETTO: 11994 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11996",
        "ocTitoloProgetto": "CODICE PROGETTO: 11996 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11997",
        "ocTitoloProgetto": "CODICE PROGETTO: 11997 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "9760,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11998",
        "ocTitoloProgetto": "CODICE PROGETTO: 11998 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "23180,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA12015",
        "ocTitoloProgetto": "CODICE PROGETTO: 12015 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA12016",
        "ocTitoloProgetto": "CODICE PROGETTO: 12016 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84399,05",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA13790",
        "ocTitoloProgetto": "CODICE PROGETTO: 13790 - ACQUISIZIONE MEDIANTE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEL SERVIZIO DI  PERSONALIZZAZIONE DEL SOFTWARE PER IL POTENZIAMENTO DEL SISTEMA INFORMATIVO PER  IL TURISTA E DEL BOOKING ON LINE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43920,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14277",
        "ocTitoloProgetto": "CODICE PROGETTO: 14277 - ACQUISIZIONE MEDIANTE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEL SERVIZIO DI  PERSONALIZZAZIONE DEL SOFTWARE, FORMAZIONE E POPOLAMENTO DATI PER LA  RILEVAZIONE DEI FLUSSI TURISTICI",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20180222.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "16080,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14467",
        "ocTitoloProgetto": "CODICE PROGETTO: 14467 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) DEL SERVIZIO DI INSERZIONI PUBBLICITARIE DELLA MOSTRA \"LA DEVOTA BELLEZZA\" SOCIET\u00c3\u00a0 A.MANZONI SPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171110.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14552",
        "ocTitoloProgetto": "CODICE PROGETTO: 14552 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) DEL SERVIZIO DI INSERZIONI PUBBLICITARIE DELLA MOSTRA \"LA DEVOTA BELLEZZA\" SOCIET\u00c3\u00a0 SPEED SPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171110.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14922",
        "ocTitoloProgetto": "COMUNE DI CORINALDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20161109.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1281653,93",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.6488939,
            "lng": 13.0472908
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14989",
        "ocTitoloProgetto": "CODICE PROGETTO: 14989 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171229.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14990",
        "ocTitoloProgetto": "CODICE PROGETTO: 14990 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171227.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14991",
        "ocTitoloProgetto": "CODICE PROGETTO: 14991 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171213.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6015272,
            "lng": 13.5023602
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14992",
        "ocTitoloProgetto": "CODICE PROGETTO: 14992 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171214.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14993",
        "ocTitoloProgetto": "CODICE PROGETTO: 14993 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46702,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15005",
        "ocTitoloProgetto": "CODICE PROGETTO: 15005 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171230.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15007",
        "ocTitoloProgetto": "CODICE PROGETTO: 15007 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171221.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "65000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15018",
        "ocTitoloProgetto": "CODICE PROGETTO: 15018 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15020",
        "ocTitoloProgetto": "CODICE PROGETTO: 15020 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15021",
        "ocTitoloProgetto": "DGR N. 1143\/2015 - DGR 44\/2018 - D. LGS. 50\/2016 ART.36 COMMA 2 LETTERA A). ACQUISIZIONE TRAMITE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEI SERVIZI DI UFFICIO STAMPA PER IL PROGETTO MOSTRARE LE MARCHE ANNO 2018- \u00c2\u0082\u00ac 20.000,00 (IVA ESCLUSA) \u00c2\u00bf CAP. 2070210026 \u00c2\u00bf 2070210027 \u00c2\u00bf 2070210028 - POR MARCHE FESR 2014-2020, BIL. 2018-2020 ANNUALIT\u00c3\u00a0 2018. SMART CIG Z78220C0F6 \u00c2\u00bf CUP B79H18000040009",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24290,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15022",
        "ocTitoloProgetto": "CODICE PROGETTO: 15022 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48788,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15023",
        "ocTitoloProgetto": "CODICE PROGETTO: 15023 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15024",
        "ocTitoloProgetto": "CODICE PROGETTO: 15024 - DGR N. 1108\/2017 \u00c2  D.A. 64\/2017 - POR FESR MARCHE 2014-2020 ASSE 6 AZIONE 17.1 DESTINAZIONE MARCHE - PARTECIPAZIONE FIERE ENIT 2017 -TORBIDONI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "160500,01",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15031",
        "ocTitoloProgetto": "CODICE PROGETTO: 15031 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "161731,74",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15032",
        "ocTitoloProgetto": "CODICE PROGETTO: 15032 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48312,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15033",
        "ocTitoloProgetto": "CODICE PROGETTO: 15033 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47214,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15035",
        "ocTitoloProgetto": "CODICE PROGETTO: 15035 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45750,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15041",
        "ocTitoloProgetto": "CODICE PROGETTO: 15041 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 VALORIZZAZIONE DEI LUOGHI E DEI PERCORSI DELLA CIVILT\u00c3\u00a0 PICENA - RIQUALIFICAZIONE DELL`ANTIQUARIUM - NUMANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180410.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.5132966,
            "lng": 13.620969
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15042",
        "ocTitoloProgetto": "CODICE PROGETTO: 15042 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "65875,43",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15046",
        "ocTitoloProgetto": "CODICE PROGETTO: 15046 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15047",
        "ocTitoloProgetto": "CODICE PROGETTO: 15047 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48739,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15049",
        "ocTitoloProgetto": "CODICE PROGETTO: 15049 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46360,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15050",
        "ocTitoloProgetto": "CODICE PROGETTO: 15050 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47018,80",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15051",
        "ocTitoloProgetto": "CODICE PROGETTO: 15051 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "13200,40",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15054",
        "ocTitoloProgetto": "CODICE PROGETTO: 15054 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - RECCHI STEFANO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47464,76",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15083",
        "ocTitoloProgetto": "CODICE PROGETTO: 15083 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "166805,60",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15220",
        "ocTitoloProgetto": "CODICE PROGETTO: 15220 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "103754,75",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15221",
        "ocTitoloProgetto": "CODICE PROGETTO: 15221 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30507,50",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15222",
        "ocTitoloProgetto": "CODICE PROGETTO: 15222 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171017.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "146400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15241",
        "ocTitoloProgetto": "CODICE PROGETTO: 15241 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "212566,50",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6022012,
            "lng": 13.4973851
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15317",
        "ocTitoloProgetto": "CODICE PROGETTO: 15317 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) AREA STAND PREALLESTITO PERSONALIZZATO E SERVIZI, IN RELAZIONE ALLA PARTECIPAZIONE DELLA REGIONE MARCHE ALLA FIERA 2017-54\u00c2\u00b0 INTERNATIONAL TOURISM MARKEPLACE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "146515,90",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15557",
        "ocTitoloProgetto": "CODICE PROGETTO: 15557 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "35990,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16315",
        "ocTitoloProgetto": "CODICE PROGETTO: 16315 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 VALORIZZAZIONE DEI LUOGHI E DEI PERCORSI DELLA CIVILT\u00c3\u00a0 PICENA - AREA ARCHEOLOGICA \"I PINI\" - SIROLO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180829.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "99425,51",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.5195361,
            "lng": 13.6179025
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16390",
        "ocTitoloProgetto": "COMUNE DI SASSOFERRATO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20170525.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.4312125,
            "lng": 12.8573026
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16392",
        "ocTitoloProgetto": "CODICE PROGETTO: 16392 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46238,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16395",
        "ocTitoloProgetto": "CODICE PROGETTO: 16395 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36478,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16396",
        "ocTitoloProgetto": "CODICE PROGETTO: 16396 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16402",
        "ocTitoloProgetto": "CODICE PROGETTO: 16402 - POR FESR 2014\/2020 - ASSE 6, AZIONE 16.2 \"REALIZZAZIONE DI INTERVENTI RIVOLTI AL MIGLIORAMENTO DELLA FUNZIONE ED AL POTENZIAMENTO DEI CANALI DI ACCESSO E DI DIVULGAZIONE DELLA CONOSCENZA DEL PATRIMONIO CULTURALE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180522.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "98656,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.6167855,
            "lng": 13.5188848
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16412",
        "ocTitoloProgetto": "CODICE PROGETTO: 16412 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  VALORIZZAZIONE DEI LUOGHI, DELLE ATTIVIT\u00c3\u00a0 E DELLE FONTI DOCUMENTARIE LEGATE ALLA FISARMONICA ED ALLA SUA PRODUZIONE ARTISTICA ED ARTIGIANALE - CASTELFIDARDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180716.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.4644804,
            "lng": 13.546319
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16467",
        "ocTitoloProgetto": "CODICE PROGETTO: 16467 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20181022.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "96864,89",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.50787,
            "lng": 13.6215113
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16573",
        "ocTitoloProgetto": "CODICE PROGETTO: 16573 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "37865,36",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16596",
        "ocTitoloProgetto": "CODICE PROGETTO: 16596 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  TEATRO ALL`APERTO E MUSEO DEL ROSARIO - \"BASTIONE DI PORTA MARINA\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181017.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "375000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.4410768,
            "lng": 13.61017
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16938",
        "ocTitoloProgetto": "CODICE PROGETTO: 16938 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20181203.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "51340,30",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.6231554,
            "lng": 13.3937027
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16945",
        "ocTitoloProgetto": "CODICE PROGETTO: 16945 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180910.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "32771,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.5195361,
            "lng": 13.6179025
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16953",
        "ocTitoloProgetto": "CODICE PROGETTO: 16953 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180914.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "28852,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.6626136,
            "lng": 13.3196604
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16982",
        "ocTitoloProgetto": "CODICE PROGETTO: 16982 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  RISTRUTTURAZIONE AREA INTERNA ED ESTERNA - \"BASTIONE SANGALLO\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181030.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "365000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.4400679,
            "lng": 13.606699
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16991",
        "ocTitoloProgetto": "CODICE PROGETTO: 16991 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  CATALOGAZIONE ARCHIVIO STORICO - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181030.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.4400679,
            "lng": 13.606699
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16994",
        "ocTitoloProgetto": "CODICE PROGETTO: 16994 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "10351,07",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16995",
        "ocTitoloProgetto": "CODICE PROGETTO: 16995 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48556,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16996",
        "ocTitoloProgetto": "CODICE PROGETTO: 16996 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17015",
        "ocTitoloProgetto": "CODICE PROGETTO: 17015 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 ACCESSO PEDONALE \"CANTINE BRAMANTESCHE\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181112.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.4404369,
            "lng": 13.6083401
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17041",
        "ocTitoloProgetto": "CODICE PROGETTO: 17041 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "478450,84",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17136",
        "ocTitoloProgetto": "CODICE PROGETTO: 17136 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45277,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17489",
        "ocTitoloProgetto": "CODICE PROGETTO: 17489 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "4758,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17557",
        "ocTitoloProgetto": "CODICE PROGETTO: 17557 - AZIONE 17.1.3. 1 \u00c2\u00bfI CAMMINI LAURETANI\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.4403063,
            "lng": 13.6076647
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17587",
        "ocTitoloProgetto": "CODICE PROGETTO: 17587 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45689,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17594",
        "ocTitoloProgetto": "CODICE PROGETTO: 17594 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12200,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17608",
        "ocTitoloProgetto": "CODICE PROGETTO: 17608 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "176352,26",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17619",
        "ocTitoloProgetto": "CODICE PROGETTO: 17619 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "176900,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17648",
        "ocTitoloProgetto": "CODICE PROGETTO: 17648 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47104,20",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17649",
        "ocTitoloProgetto": "CODICE PROGETTO: 17649 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "676931,52",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17832",
        "ocTitoloProgetto": "CODICE PROGETTO: 17832 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "37454,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17839",
        "ocTitoloProgetto": "CODICE PROGETTO: 17839 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17840",
        "ocTitoloProgetto": "CODICE PROGETTO: 17840 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48312,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17845",
        "ocTitoloProgetto": "CODICE PROGETTO: 17845 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "219600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17854",
        "ocTitoloProgetto": "CODICE PROGETTO: 17854 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "761931,92",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17856",
        "ocTitoloProgetto": "CODICE PROGETTO: 17856 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "213500,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17857",
        "ocTitoloProgetto": "CODICE PROGETTO: 17857 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "77470,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17858",
        "ocTitoloProgetto": "CODICE PROGETTO: 17858 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "128100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17863",
        "ocTitoloProgetto": "CODICE PROGETTO: 17863 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "85400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17864",
        "ocTitoloProgetto": "CODICE PROGETTO: 17864 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17865",
        "ocTitoloProgetto": "CODICE PROGETTO: 17865 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40872,44",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17873",
        "ocTitoloProgetto": "CODICE PROGETTO: 17873 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17895",
        "ocTitoloProgetto": "CODICE PROGETTO: 17895 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "186523,52",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17903",
        "ocTitoloProgetto": "CODICE PROGETTO: 17903 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30324,61",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17938",
        "ocTitoloProgetto": "CODICE PROGETTO: 17938 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "74742,77",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17962",
        "ocTitoloProgetto": "CODICE PROGETTO: 17962 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45232,11",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17988",
        "ocTitoloProgetto": "CODICE PROGETTO: 17988 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42151,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17993",
        "ocTitoloProgetto": "CODICE PROGETTO: 17993 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48191,22",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17996",
        "ocTitoloProgetto": "CODICE PROGETTO: 17996 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2 - IRENE MANZI - 2018",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20181113.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46970,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18059",
        "ocTitoloProgetto": "CODICE PROGETTO: 18059 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42517,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18076",
        "ocTitoloProgetto": "CODICE PROGETTO: 18076 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18084",
        "ocTitoloProgetto": "CODICE PROGETTO: 18084 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90280,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18098",
        "ocTitoloProgetto": "CODICE PROGETTO: 18098 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21660,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18114",
        "ocTitoloProgetto": "CODICE PROGETTO: 18114 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "74742,77",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18124",
        "ocTitoloProgetto": "CODICE PROGETTO: 18124 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21660,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18134",
        "ocTitoloProgetto": "CODICE PROGETTO: 18134 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84546,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18139",
        "ocTitoloProgetto": "CODICE PROGETTO: 18139 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18143",
        "ocTitoloProgetto": "CODICE PROGETTO: 18143 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18162",
        "ocTitoloProgetto": "CODICE PROGETTO: 18162 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18163",
        "ocTitoloProgetto": "CODICE PROGETTO: 18163 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18172",
        "ocTitoloProgetto": "CODICE PROGETTO: 18172 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18173",
        "ocTitoloProgetto": "CODICE PROGETTO: 18173 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38649,60",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18174",
        "ocTitoloProgetto": "CODICE PROGETTO: 18174 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18177",
        "ocTitoloProgetto": "CODICE PROGETTO: 18177 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18179",
        "ocTitoloProgetto": "CODICE PROGETTO: 18179 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "29816,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18181",
        "ocTitoloProgetto": "CODICE PROGETTO: 18181 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48676,99",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18188",
        "ocTitoloProgetto": "CODICE PROGETTO: 18188 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25235,70",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18193",
        "ocTitoloProgetto": "CODICE PROGETTO: 18193 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "9028,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18239",
        "ocTitoloProgetto": "CODICE PROGETTO: 18239 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18240",
        "ocTitoloProgetto": "CODICE PROGETTO: 18240 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48800,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18294",
        "ocTitoloProgetto": "CODICE PROGETTO: 18294 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "682894,97",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18296",
        "ocTitoloProgetto": "CODICE PROGETTO: 18296 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "182878,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18333",
        "ocTitoloProgetto": "CODICE PROGETTO: 18333 - POR MARCHE FESR 2014\/2020 - ASSE 6 - AZIONE 17.1.3 - \"VALORIZZAZIONE TURISTICA DEI CLUSTER ATTRAVERSO INTERVENTI DI QUALIFICAZIONE DEI PRODOTTI E DEI TERRITORI\" - MARCHIO DI QUALIT\u00c3\u00a0 DELLE STRUTTURE RICETTIVE \"OSPITALIT\u00c3\u00a0 ITALIANA - REGIONE MARCHE\" - ANNO 2019\/2020",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190903.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6167855,
            "lng": 13.5188848
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18359",
        "ocTitoloProgetto": "CODICE PROGETTO: 18359 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38610,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18363",
        "ocTitoloProgetto": "CODICE PROGETTO: 18363 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18370",
        "ocTitoloProgetto": "CODICE PROGETTO: 18370 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47946,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18376",
        "ocTitoloProgetto": "CODICE PROGETTO: 18376 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3261,06",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18394",
        "ocTitoloProgetto": "CODICE PROGETTO: 18394 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43432,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18398",
        "ocTitoloProgetto": "CODICE PROGETTO: 18398 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18117,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18400",
        "ocTitoloProgetto": "CODICE PROGETTO: 18400 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7015,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18412",
        "ocTitoloProgetto": "CODICE PROGETTO: 18412 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "31402,80",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18413",
        "ocTitoloProgetto": "CODICE PROGETTO: 18413 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12276,25",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18419",
        "ocTitoloProgetto": "CODICE PROGETTO: 18419 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8838,90",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18421",
        "ocTitoloProgetto": "CODICE PROGETTO: 18421 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39650,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18424",
        "ocTitoloProgetto": "CODICE PROGETTO: 18424 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5978,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18471",
        "ocTitoloProgetto": "CODICE PROGETTO: 18471 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34207,89",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18484",
        "ocTitoloProgetto": "CODICE PROGETTO: 18484 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61989,48",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18494",
        "ocTitoloProgetto": "CODICE PROGETTO: 18494 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "66702,70",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18580",
        "ocTitoloProgetto": "CODICE PROGETTO: 18580 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18620",
        "ocTitoloProgetto": "CODICE PROGETTO: 18620 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18844",
        "ocTitoloProgetto": "CODICE PROGETTO: 18844 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5040,43",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19051",
        "ocTitoloProgetto": "CODICE PROGETTO: 19051 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  VALORIZZAZIONE DELLA TRADIZIONE OPIFICIA LOCALE CON PARTICOLARE RIFERIMENTO ALLA MUSICA E AGLI STRUMENTI MUSICALI - CAMERANO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190311.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.5301043,
            "lng": 13.5523002
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19303",
        "ocTitoloProgetto": "CODICE PROGETTO: 19303 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19346",
        "ocTitoloProgetto": "CODICE PROGETTO: 19346 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 29.1 -INTERVENTO 29.1.1 -INTERVENTI DI VALORIZZAZIONE E MESSA IN RETE DEL PATRIMONIO CULTURALE, MATERIALE E IMMATERIALE, NELLE AREE DI ATTRAZIONE DI RILEVANZA STRATEGICA TALI DA CONSOLIDARE E PROMUOVERE PROCESSI DI SVILUPPO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190503.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48777,07",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.3361195,
            "lng": 12.905113
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19372",
        "ocTitoloProgetto": "CODICE PROGETTO: 19372 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5040,43",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19373",
        "ocTitoloProgetto": "CODICE PROGETTO: 19373 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18208,50",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19374",
        "ocTitoloProgetto": "CODICE PROGETTO: 19374 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39900,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19375",
        "ocTitoloProgetto": "CODICE PROGETTO: 19375 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12444,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19379",
        "ocTitoloProgetto": "CODICE PROGETTO: 19379 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15616,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19380",
        "ocTitoloProgetto": "CODICE PROGETTO: 19380 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46360,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19381",
        "ocTitoloProgetto": "CODICE PROGETTO: 19381 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19382",
        "ocTitoloProgetto": "CODICE PROGETTO: 19382 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12139,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19383",
        "ocTitoloProgetto": "CODICE PROGETTO: 19383 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "4880,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19384",
        "ocTitoloProgetto": "CODICE PROGETTO: 19384 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19385",
        "ocTitoloProgetto": "CODICE PROGETTO: 19385 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19465",
        "ocTitoloProgetto": "CODICE PROGETTO: 19465 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97842,51",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19467",
        "ocTitoloProgetto": "CODICE PROGETTO: 19467 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "273750,84",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19478",
        "ocTitoloProgetto": "CODICE PROGETTO: 19478 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "180560,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19516",
        "ocTitoloProgetto": "CODICE PROGETTO: 19516 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43310,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19521",
        "ocTitoloProgetto": "CODICE PROGETTO: 19521 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "31110,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA33690",
        "ocTitoloProgetto": "CODICE PROGETTO: 33690 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA33881",
        "ocTitoloProgetto": "CODICE PROGETTO: 33881 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7190,68",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA36235",
        "ocTitoloProgetto": "CODICE PROGETTO: 36235 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191017.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21106,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA36403",
        "ocTitoloProgetto": "CODICE PROGETTO: 36403 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191017.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "19154,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA44994",
        "ocTitoloProgetto": "CODICE PROGETTO: 44994 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "228262,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45013",
        "ocTitoloProgetto": "CODICE PROGETTO: 45013 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "19154,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45014",
        "ocTitoloProgetto": "CODICE PROGETTO: 45014 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21106,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45015",
        "ocTitoloProgetto": "CODICE PROGETTO: 45015 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "62830,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45022",
        "ocTitoloProgetto": "CODICE PROGETTO: 45022 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45038",
        "ocTitoloProgetto": "CODICE PROGETTO: 45038 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "55000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6098591,
            "lng": 13.5091686
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45070",
        "ocTitoloProgetto": "CODICE PROGETTO: 45070 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48191,22",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45077",
        "ocTitoloProgetto": "CODICE PROGETTO: 45077 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42700,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45231",
        "ocTitoloProgetto": "CODICE PROGETTO: 45231 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45240",
        "ocTitoloProgetto": "CODICE PROGETTO: 45240 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "54899,98",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45242",
        "ocTitoloProgetto": "CODICE PROGETTO: 45242 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": 43.6101964,
            "lng": 13.5093069
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7MAPRATT15551",
        "ocTitoloProgetto": "RISTRUTTURAZIONE PALLONE TENSO STATICO DI VIA SCANDALLI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181219.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "86321,25",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": 43.530777,
            "lng": 13.552923
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10042741",
        "ocTitoloProgetto": "RESTORING THE MEMORY OF ADRIATIC PORTS SITES.MARITIME CULTURE TO FOSTER BALANCED TERRITORIAL GROWTH",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2813460,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.6171442,
            "lng": 13.5127759
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043021",
        "ocTitoloProgetto": "INTEGRATED SYSTEM OF THE NATURAL AND CULTURAL HERITAGE AND THE CULTURAL ACTIVITIES",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1176243,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.6161908,
            "lng": 13.5054829
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043021",
        "ocTitoloProgetto": "INTEGRATED SYSTEM OF THE NATURAL AND CULTURAL HERITAGE AND THE CULTURAL ACTIVITIES",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1176243,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.510502,
            "lng": 13.6221799
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043061",
        "ocTitoloProgetto": "ZERO WASTE BLUE SPORT EVENTS FOR TERRITORIAL DEVELOPMENT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180419.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "861435,70",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10047361",
        "ocTitoloProgetto": "DEVELOPMENT OF A CROSSBORDER  NETWORK  FOR THE PROMOTION OF THE ACCESSIBLE  TOURISM DESTINATIONS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2509328,35",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": 43.5270861,
            "lng": 13.2463797
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10048184",
        "ocTitoloProgetto": "MANAGEMENT AND DEVELOPMENT OF INLANDS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 6,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2218069,31",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": 43.6158299,
            "lng": 13.518915
        },
        "hasReport": true
    }, {
        "codLocaleProgetto": "1MA10250",
        "ocTitoloProgetto": "FIUME MUSONE E FOSSI: SISTEMAZIONI IDRAULICHE - LOCALIT\u00c3\u0083\u00c2\u00a0 OSIMO, CAMERANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "4786,14",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.4861459, 'lng': 13.4817969},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10252",
        "ocTitoloProgetto": "FIUME ESINO: SISTEMAZIONI IDRAULICHE - LOCALIT\u00c3\u0083\u00c2\u00a0 GENGA, APIRO. MERGO, JESI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "34881,08",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.5227776, 'lng': 13.243669},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10257",
        "ocTitoloProgetto": "FIUME MUSONE: SISTEMAZIONI IDRAULICHE - LOCALIT\u00c3\u0083\u00c2\u00a0 FALCONARA M.MA, CAMERANO, OSIMO, CASTELFIDARDO, LORETO, OFFAGNA, FILOTTRANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110301.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "69781,03",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.5309814, 'lng': 13.5525802},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10731",
        "ocTitoloProgetto": "INT. 5.1.2.53.02 - INTERVENTI IDEAULICI LUNGO IL FIUME MISA NEI TERRITORI COMUNALI DI SENIGALLIA E TRECASTELLI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20140303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "473830,19",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.7148337, 'lng': 13.2177939},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13964",
        "ocTitoloProgetto": "CONVERSIONE IMPIANTO COMPOSTAGGIO RSU DI CORINALDO IN IMPIANTO TMB DEL RIFIUTO URBANO INDIFFERENZIATO DELL'ATO 2 DELLA REGIONE MARCHE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20130909.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "6381187,68",
        "ocCodCategoriaSpesa": "44",
        "ocDescrCategoriaSpesa": "Gestione dei rifiuti domestici e industriali",
        "coordinate": {'lat': 43.6202926, 'lng': 13.0412883},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16496",
        "ocTitoloProgetto": "SISTEMAZIONI AREE IN FRANA - GROTTE DI FRASASSI - COMUNE DI GENGA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "120000,00",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.43253, 'lng': 12.93554},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3666",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA BIENNALE IN AREE PAI A RISCHIO IDROGEOLOGICO R3 E R4. FIUME ESINO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090209.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "744917,44",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3675",
        "ocTitoloProgetto": "BONIFICA SITO EX GALVANOTECNICA CARLONI VIA DON BOSCO 15, BONIFICA DEI TERRENI DALLA PRESENZA DEL CROMO ESAVALENTE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110221.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "900584,56",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.6167855, 'lng': 13.5188848},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3682",
        "ocTitoloProgetto": "PERCORRIMISA - SISTEMAZIONE DI PERCORSI DI CONTROLLO E DI GUARDIA LUNGO IL CORSO DEL FIUME MISA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20030116.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "574632,74",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.7148337, 'lng': 13.2177939},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3713",
        "ocTitoloProgetto": "BONIFICA DELLE ACQUE DI FALDA FREATICA CONTAMINATE DA SOLVENTI CLORURATI NEI QUARTIERI  CAMPO SPORTIVO -  SANTA MARIA DI FABRIANO (AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110701.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "759985,20",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.3361011, 'lng': 12.90447},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3737",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN PERCORSO LUNGO IL FIUME ESINO (RISCHIO IDROGEOLOGICO )",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "296158,45",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.614781, 'lng': 13.5183697},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3747",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA BIENNALE IN AREE PAI A RISCHIO IDROGEOLOGICO R3 E R4. FIUME MUSONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090209.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "747258,15",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3761",
        "ocTitoloProgetto": "BONIFICA CON MISURE DI SICUREZZA SITO CONTAMINATO EDIFICIO RURALE PRESSO AREA P.I.P. CAMPO DELL'OLMO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 FABRIANO (AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060215.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "118122,10",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.3361011, 'lng': 12.90447},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3762",
        "ocTitoloProgetto": "REDAZIONE ELABORATO TECNICO R.I.R. DELLO STABILIMENTO GOLDENGAS DI JESI  E REALIZZAZIONE DI UNA ROTATORIA SULLA STRADA DI ACCESSO ALLO STESSO STABILIMENTO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100329.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "122331,74",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.5227776, 'lng': 13.243669},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3772",
        "ocTitoloProgetto": "BONIFICA DA CROMO ESAVALENTE: - IMPIANTISTICA ELETTRICA E IDRAULICA PER ESECUZIONE DI INDAGINI NELLA FASE 0.- BONIFICA AREA COMPRESA TRA VIA S. UBALDO E VIA CASSOLO, I\u00c3\u0082\u00c2\u00b0 STRALCIO DELLA FASE 1.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20010222.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "117033,65",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.563557, 'lng': 13.25024},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3783",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA BIENNALE IN AREE PAI A RISCHIO IDROGEOLOGICO R3 E R4. FIUMI MISA-CESANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090209.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "747229,21",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3791",
        "ocTitoloProgetto": "LAVORI DI BONIFICA E SISTEMAZIONE DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099AREA VERDE COMUNALE SITUATA NEL CENTRO STORICO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 VERSANTE CONTRADA PRATELLI - CON PERICOLO DI FRANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "166140,03",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.482994, 'lng': 13.0691675},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3834",
        "ocTitoloProgetto": "\u00c3\u00a2\u00c2\u0080\u00c2\u009cINTERVENTO DI RIASSETTO IDROGEOLOGICO NELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099AREA PAI F12-0829 A PERICOLOSITA\u00c3\u00a2\u00c2\u0080\u00c2\u0099 P3 NELLA PROPRIETA\u00c3\u00a2\u00c2\u0080\u00c2\u0099 COMUNALE IN VIA S. BARTOLOMEO\u00c3\u00a2\u00c2\u0080\u00c2\u009d",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090301.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "67450,29",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.4454184, 'lng': 13.1157209},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3853",
        "ocTitoloProgetto": "BONIFICA SITO VIA DEGLI ARTIGIANI, 22 - JESI (AN) (INQUINAMENTO DA CROMO ESAVALENTE)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20010810.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "218411,87",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.5227776, 'lng': 13.243669},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3866",
        "ocTitoloProgetto": "BONIFICA SITO SANTA MARIA DEL PIANO- JESI (INQUINAMENTO DA IDROCARBURI)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070322.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "43795,94",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.5227776, 'lng': 13.243669},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3872",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA RETICOLI IDROGRAFICI AREE PAI RISCHIO R3-R4. LAVORI ESEGUITI 2007-2009",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060630.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "781074,37",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3879",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN PERCORSO PEDO-CICLABILE DI SORVEGLIANZA E DI FUGA LUNGO LA SPONDA SINISTRA DEL FIUME ESINO (PARTE RISCHIO IDROGEOLOGICO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "89675,15",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.614781, 'lng': 13.5183697},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3892",
        "ocTitoloProgetto": "PROGETTO DI BONIFICA DI UN'AREA DI PROP. COMUNALE SITA IN C.DA VALLE DELLE LAME COMUNE SAN PAOLO DI JESI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20061223.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "241631,59",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.4550249, 'lng': 13.1740998},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3898",
        "ocTitoloProgetto": "LAVORI DI MIGLIORAMENTO IDROGEOLOGICO E STATICO VERSANTE IN LOCALITA\u00c3\u00a2\u00c2\u0080\u00c2\u0099 BORGO SAN SEBASTIANO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090402.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "20837,61",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.432903, 'lng': 13.186347},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3913",
        "ocTitoloProgetto": "COMPLETAMENTO DI VIA DI FUGA -PERCORSO CICLABILE SULLA DESTRA OROGRAFICA DEL FIUME ESINO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20040901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "245277,92",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.62315539999999, 'lng': 13.3937027},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4474",
        "ocTitoloProgetto": "BONIFICA SITO INQUINATO EX GALVANICA NOBILI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090610.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "875832,07",
        "ocCodCategoriaSpesa": "50",
        "ocDescrCategoriaSpesa": "Bonifica di siti industriali e di terreni contaminati",
        "coordinate": {'lat': 43.46446479999999, 'lng': 13.5465537},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4479",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN PERCORSO LUNGO IL FIUME ESINO (PARTE RISCHIO TECNOLOGICO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "107544,36",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.614781, 'lng': 13.5183697},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA4526",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN PERCORSO PEDO-CICLABILE DI SORVEGLIANZA E FUGA LUNGO LA SPONDA SINISTRA DEL FIUME ESINO (PARTE RISCHIO TECNOLOGICO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "197285,36",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.614781, 'lng': 13.5183697},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8523",
        "ocTitoloProgetto": "BONIFICA DALL'AMIANTO DEL \"PALAZZO DI VETRO\" SEDE DELLA PROVINCIA DI ANCONA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060320.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "5592179,65",
        "ocCodCategoriaSpesa": "54",
        "ocDescrCategoriaSpesa": "Altre misure per tutelare l'ambiente e prevenire i rischi",
        "coordinate": {'lat': 43.6169811, 'lng': 13.513879},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0226",
        "ocTitoloProgetto": "DEP- 20 (I STRALCIO) - COLLETTAMENTO DEI REFLUI DELLA FRAZIONE ASPIO ALLA STAZIONE DI SOLLEVAMENTO DI OSIMO STAZIONE - I STRALCIO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1748000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4884025, 'lng': 13.4785426},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0250",
        "ocTitoloProgetto": "ESTENSIONE DELLA RETE FOGNARIA NELLA ZONA SUD-EST DI CAMERANO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150520.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2400280,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.5313513, 'lng': 13.5489586},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0251",
        "ocTitoloProgetto": "COLLETTAMENTO ACQUE REFLUE DELL\u00c2\u00bfAGGLOMERATO DI FALCONARA MARITTIMA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3170754,76",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.5792055, 'lng': 13.3523223},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0251",
        "ocTitoloProgetto": "COLLETTAMENTO ACQUE REFLUE DELL\u00c2\u00bfAGGLOMERATO DI FALCONARA MARITTIMA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3170754,76",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6032301, 'lng': 13.3298525},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0251",
        "ocTitoloProgetto": "COLLETTAMENTO ACQUE REFLUE DELL\u00c2\u00bfAGGLOMERATO DI FALCONARA MARITTIMA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3170754,76",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6220339, 'lng': 13.3702811},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0251",
        "ocTitoloProgetto": "COLLETTAMENTO ACQUE REFLUE DELL\u00c2\u00bfAGGLOMERATO DI FALCONARA MARITTIMA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140303.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3170754,76",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6394889, 'lng': 13.3071192},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0252",
        "ocTitoloProgetto": "COMPLETAMENTO DELLE OPERE DI COLLETTAMENTO DELLE ACQUE REFLUE NEL VERSANTE SUD DI POLVERIGI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160510.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1238209,46",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.5248517, 'lng': 13.3938723},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0253",
        "ocTitoloProgetto": "LAVORI DI ADEGUAMENTO E POTENZIAMENTO DELL\u00c2\u00bfIMPIANTO DI DEPURAZIONE COMUNALE DI SANTA MARIA NUOVA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20161215.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2395554,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4963268, 'lng': 13.308849},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0254",
        "ocTitoloProgetto": "OPERE DI COLLETTAMENTO REFLUI - AGGLOMERATO DI SASSOFERRATO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140110.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3005178,18",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4308068, 'lng': 12.8576733},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0380",
        "ocTitoloProgetto": "COLLETTAMENTO REFLUI A DEPURATORE CERRETO D'ESI MONTERUSTICO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20190729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "990852,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.3240955, 'lng': 12.9881823},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0381",
        "ocTitoloProgetto": "COLLETTAMENTO REFLUI DI CUPRAMONTANA ALL'IMPIANTO DI CASTELBELLINO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20190729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "970000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4458495, 'lng': 13.1154335},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0382",
        "ocTitoloProgetto": "FOGNE E COLLETTORI DELL'AGGLOMERATO DI MACINE BORGO LORETO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20190729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "538000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4903892, 'lng': 13.0836829},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0383",
        "ocTitoloProgetto": "COLLETTAMENTO REFLUI ZONA EST DI RIPE AL DEPURATORE DI RIPE",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20190729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1608000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6896089, 'lng': 13.1163739},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0384",
        "ocTitoloProgetto": "APM_DEP-03 COLLETTAMENTO FRAZIONE CROCETTE - VERSANTE NORD AL COLLETTORE DI OSIMO NORD E QUINDI AL DEPURATORE DI CASTELFIDARDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "725000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4631153, 'lng': 13.5514218},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0385",
        "ocTitoloProgetto": "ASTEA_DEP-20 COLLETTAMENTO DEI REFLUI DELLA FRAZIONE ASPIO ALLA STAZIONE DI SOLLEVAMENTO DI OSIMO STAZIONE - II STRALCIO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140901.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1370000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4884025, 'lng': 13.4785426},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_22_0393",
        "ocTitoloProgetto": "AMPLIAMENTO DEPURATORE DI CASTELBELLINO (AN)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190729.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "5690160,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.4871213, 'lng': 13.145121},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_25_0199",
        "ocTitoloProgetto": "COMPLETAMENTO DELLE OPERE DI DIFESA COSTIERA NEI COMUNI DI MONTEMARCIANO E FALCONARA NORD",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181129.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "11790000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6220339, 'lng': 13.3702811},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MATTMDGSTA_25_0199",
        "ocTitoloProgetto": "COMPLETAMENTO DELLE OPERE DI DIFESA COSTIERA NEI COMUNI DI MONTEMARCIANO E FALCONARA NORD",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181129.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "11790000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6394889, 'lng': 13.3071192},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISE11IR212\/G1",
        "ocTitoloProgetto": "SISTEMAZIONE IDRAULICA FIUME MISA E GESTIONE DEL TERRITORIO AGRICOLO - LOTTO 1",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180715.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "321530,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {'lat': 43.6101587, 'lng': 13.509167},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEAN004A\/10",
        "ocTitoloProgetto": "COMUNE DI SIROLO (AN). LOCALIT\u00c3\u00a0 CONSOLIDAMENTO VERSANTE NE CAPOLUOGO. TIRANTI \u00c2\u00bf RETI DI PROTEZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20121213.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "729088,98",
        "ocCodCategoriaSpesa": "53",
        "ocDescrCategoriaSpesa": "Prevenzione dei rischi (inclusa elaborazione e attuazione di piani e provvedimenti))",
        "coordinate": {'lat': 43.5191009, 'lng': 13.6217034},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEMARI05",
        "ocTitoloProgetto": "LAVORI DI AMPLIAMENTO ED ADEGUAMENTO FUNZIONALE DEL DEPURATORE SASSOFERRATO - COMUNE DI SASSOFERRATO (AGGLOMERATO SASSOFERRATO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100927.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2288497,17",
        "ocCodCategoriaSpesa": "46",
        "ocDescrCategoriaSpesa": "Trattamento delle acque (potabili)",
        "coordinate": {'lat': 43.4308068, 'lng': 12.8576733},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEMARI08",
        "ocTitoloProgetto": "COLLETTORE FOGNARIO ACQUE NERE FRAZIONE COSTABIANCA - 1\u00c2\u00b0 LOTTO - COMUNE DI LORETO (AGGLOMERATO PORTO RECANATI)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120509.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "731844,85",
        "ocCodCategoriaSpesa": "54",
        "ocDescrCategoriaSpesa": "Altre misure per tutelare l'ambiente e prevenire i rischi",
        "coordinate": {'lat': 43.4363086, 'lng': 13.6189078},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEMARI11NORD",
        "ocTitoloProgetto": "COMPLETAMENTO OPERE DI COLLETTAMENTO FOGNARIO NEL COMUNE DI OSTRA - VERSANTE NORD",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20090120.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2370000,00",
        "ocCodCategoriaSpesa": "48",
        "ocDescrCategoriaSpesa": "Prevenzione e controllo integrati dell'inquinamento",
        "coordinate": {'lat': 43.6141408, 'lng': 13.1569902},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEMARI11SUD",
        "ocTitoloProgetto": "COMPLETAMENTO OPERE DI COLLETTAMENTO FOGNARIO NEL COMUNE DI OSTRA - VERSANTE SUD",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20090120.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "930500,00",
        "ocCodCategoriaSpesa": "48",
        "ocDescrCategoriaSpesa": "Prevenzione e controllo integrati dell'inquinamento",
        "coordinate": {'lat': 43.6141408, 'lng': 13.1569902},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17641",
        "ocTitoloProgetto": "CODICE PROGETTO: 17641 - POR-FESR 2014-2020 - ASSE 8 - INTERVENTO 28.1.4 - ADEGUAMENTO E MIGLIORAMENTO SISMICO (REALIZZAZIONE DI TORRI DISSIPATIVE) E DI RIQUALIFICAZIONE ENERGETICA OSPEDALE REGIONALE DI TORRETTE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20161013.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "239502,16",
        "ocCodCategoriaSpesa": "088",
        "ocDescrCategoriaSpesa": "Prevenzione e gestione dei rischi naturali non connessi al clima (ad esempio terremoti) e dei rischi collegati alle attivit\u00c3\u00a0 umane (ad esempio incidenti tecnologici), comprese le azioni di sensibiliz",
        "coordinate": {'lat': 43.6019431, 'lng': 13.4547895},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17831",
        "ocTitoloProgetto": "CODICE PROGETTO: 17831 - POR-FESR 2014-2020 - ASSE 5 - INTERVENTO 15.2.1 - INTERVENTI DI MITIGAZIONE E RIDUZIONE DEL RISCHIO IDROGEOLOGICO - FERMO FIUME ASO",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20181119.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "700000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18061",
        "ocTitoloProgetto": "CODICE PROGETTO: 18061 - POR-FESR 2014-2020 - ASSE 5 - INTERVENTO 15.2.1 - INTERVENTI DI MITIGAZIONE E RIDUZIONE DEL RISCHIO IDROGEOLOGICO - FIUME TRONTO- COMUNI SAN BENEDETTO DEL TRONTO E MONTEPRANDONE",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "330000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18113",
        "ocTitoloProgetto": "CODICE PROGETTO: 18113 - POR MARCHE FESR 2014-2020 - ASSE 8 - AZIONE 28.1.2 - INTERVENTI DI NATURA STRUTTURALE O OPERE STRETTAMENTE CONNESSE, DI ADEGUAMENTO O MIGLIORAMENTO SISMICO - EDILIZIA ERDIS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190927.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "791718,07",
        "ocCodCategoriaSpesa": "088",
        "ocDescrCategoriaSpesa": "Prevenzione e gestione dei rischi naturali non connessi al clima (ad esempio terremoti) e dei rischi collegati alle attivit\u00c3\u00a0 umane (ad esempio incidenti tecnologici), comprese le azioni di sensibiliz",
        "coordinate": {'lat': 43.5913376, 'lng': 13.5151292},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18136",
        "ocTitoloProgetto": "CODICE PROGETTO: 18136 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 28.1 -INTERVENTO 28.1.4 - ADEGUAMENTO SISMICO DEI CORPI L,N E COLLEGATI DELL'OSPEDALE REGIONALE DI TORRETTE\t",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20191202.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3316900,36",
        "ocCodCategoriaSpesa": "088",
        "ocDescrCategoriaSpesa": "Prevenzione e gestione dei rischi naturali non connessi al clima (ad esempio terremoti) e dei rischi collegati alle attivit\u00c3\u00a0 umane (ad esempio incidenti tecnologici), comprese le azioni di sensibiliz",
        "coordinate": {'lat': 43.6019431, 'lng': 13.4547895},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18191",
        "ocTitoloProgetto": "CODICE PROGETTO: 18191 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 28.1 -INTERVENTO 28.1.4 - NUOVA PALAZZINA DIREZIONE SANITARIA, DIREZIONALE E AMMINISTRATIVA DELL`OSPEDALE REGIONALE DI TORRETTE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20191011.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "4248597,47",
        "ocCodCategoriaSpesa": "088",
        "ocDescrCategoriaSpesa": "Prevenzione e gestione dei rischi naturali non connessi al clima (ad esempio terremoti) e dei rischi collegati alle attivit\u00c3\u00a0 umane (ad esempio incidenti tecnologici), comprese le azioni di sensibiliz",
        "coordinate": {'lat': 43.6019431, 'lng': 13.4547895},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18431",
        "ocTitoloProgetto": "CODICE PROGETTO: 18431 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 27.1 -INTERVENTO 27.1.1 -OPERE DI \"MITIGAZIONE DEL RISCHIO IDRAULICO DEL TORRENTE TESINO NEI COMUNI DI OFFIDA E CASTIGNANO\"",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "136002,24",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6101964, 'lng': 13.5093069},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18754",
        "ocTitoloProgetto": "CODICE PROGETTO: 18754 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 5 \u00c2\u00bfAZIONE 15.2 -INTERVENTO 15.2.1 - OPERE DI INTERVENTO DI MITIGAZIONE DEL RISCHIO IDRAULICO DEL FIUME TRONTO - LAVORI DI MESSA IN SICUREZZA DI ALCUNI TRATTI DEL FIUME TRONTO NEL COMUNE DI ASCOLI PICENO",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "330000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18755",
        "ocTitoloProgetto": "CODICE PROGETTO: 18755 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 27.1 -INTERVENTO 27.1.1 - OPERE DI \"MITIGAZIONE DEL RISCHIO IDRAULICO DEL TORRENTE TESINO NEL COMUNE DI RIPATRANSONE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "424334,08",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18837",
        "ocTitoloProgetto": "CODICE PROGETTO: 18837 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 27.1 -INTERVENTO 27.1.1 - MITIGAZIONE DEL RISCHIO IDRAULICO DI UN TRATTO DEL FIUME ASO, TRAMITE INTERVENTI DI MANUTENZIONE STRAORDINARIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1050000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18838",
        "ocTitoloProgetto": "CODICE PROGETTO: 18838 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 27.1 -INTERVENTO 27.1.1 - MITIGAZIONE DEL RISCHIO IDRAULICO DEL TRATTO DEL FIUME TENNA, MEDIANTE INTERVENTI DI MANUTENZIONE STRAORDINARIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "450000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18841",
        "ocTitoloProgetto": "CODICE PROGETTO: 18841 - POR-FESR 2014-2020 - ASSE 5 - INTERVENTO 15.2.1 - INTERVENTI DI MITIGAZIONE E  RIDUZIONE DEL RISCHIO IDROGEOLOGICO - FIUME ESINO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20191016.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "900000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6153643, 'lng': 13.3618856},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18870",
        "ocTitoloProgetto": "CODICE PROGETTO: 18870 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 5 \u00c2\u00bfAZIONE 15.2 -INTERVENTO 15.2.1 - \"MITIGAZIONE DEL RISCHIO IDRAULICO DEL TRATTO DEL FIUME ASO IN SX IDROGRAFICA (ALTIDONA) A MONTE DEL DEPURATORE DI PEDASO\".",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20191111.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "97079,58",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18871",
        "ocTitoloProgetto": "CODICE PROGETTO: 18871 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 5 \u00c2\u00bfAZIONE 15.2 -INTERVENTO 15.2.1 - \" MITIGAZIONE DEL RISCHIO IDRAULICO DEL TRATTO DEL FIUME ASO IN DX IDROGRAFICA (CAMPOFILONE) A MONTE DEL DEPURATORE DI PEDASO\"",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20191111.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "97079,59",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45040",
        "ocTitoloProgetto": "CODICE PROGETTO: 45040 - POR-FESR 2014-2020 - ASSE 5 - INTERVENTO 15.2.1 - INTERVENTI DI MITIGAZIONE E RIDUZIONE DEL RISCHIO IDROGEOLOGICO - MACERATA - FIUME CHIENTI TRATTO 1 - DALLA FOCE A MARE AL VIADOTTO DELL`AUTOSTRADA A14. COMUNI DI CIVITANOVA MARCHE-PORTO SANT`ELPIDIO E SANT`ELPIDIO A MARE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180928.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "700000,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10041641",
        "ocTitoloProgetto": "CAPITALIZATION ACTIONS FOR ADRIATIC MARINE ENVIRONMENT PROTECTION AND ECOSYSTEM BASED MANAGEMENT",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "934405,00",
        "ocCodCategoriaSpesa": "085",
        "ocDescrCategoriaSpesa": "Tutela e valorizzazione della biodiversit\u00c3\u00a0, protezione della natura e infrastrutture \"verdi\"",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10041704",
        "ocTitoloProgetto": "RESILIENCE ENHANCEMENT OF ADRIATIC BASIN FROM FIRE AND SEISMIC HAZARDS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1151250,00",
        "ocCodCategoriaSpesa": "088",
        "ocDescrCategoriaSpesa": "Prevenzione e gestione dei rischi naturali non connessi al clima (ad esempio terremoti) e dei rischi collegati alle attivit\u00c3\u00a0 umane (ad esempio incidenti tecnologici), comprese le azioni di sensibiliz",
        "coordinate": {'lat': 43.6101964, 'lng': 13.5093069},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10042301",
        "ocTitoloProgetto": "ECOLOGICAL OBSERVING SYSTEM IN THE ADRIATIC SEA: OCEANOGRAPHIC OBSERVATIONS FOR BIODIVERSITY",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "3317468,92",
        "ocCodCategoriaSpesa": "086",
        "ocDescrCategoriaSpesa": "Tutela, ripristino e uso sostenibile dei siti Natura 2000",
        "coordinate": {'lat': 43.6131574, 'lng': 13.501918},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043643",
        "ocTitoloProgetto": "SOUNDSCAPES IN THE NORT ADRIATIC SEA AND THEIR IMPACT ON MARINE BIOLOGICAL RESOURCES",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2066263,00",
        "ocCodCategoriaSpesa": "086",
        "ocDescrCategoriaSpesa": "Tutela, ripristino e uso sostenibile dei siti Natura 2000",
        "coordinate": {'lat': 43.6158299, 'lng': 13.518915},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10044130",
        "ocTitoloProgetto": "WATER MANAGEMENT SOLUTIONS FOR REDUCING MICROBIAL ENVIRONMENT IMPACT IN COASTAL AREAS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2833019,40",
        "ocCodCategoriaSpesa": "084",
        "ocDescrCategoriaSpesa": "Prevenzione e riduzione integrate dell'inquinamento",
        "coordinate": {'lat': 43.6157452, 'lng': 13.5172798},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10046144",
        "ocTitoloProgetto": "MANAGED USE OF TREATED URBAN WASTEWATER FOR THE QUALITY OF THE ADRIATIC SEA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2035703,13",
        "ocCodCategoriaSpesa": "084",
        "ocDescrCategoriaSpesa": "Prevenzione e riduzione integrate dell'inquinamento",
        "coordinate": {'lat': 43.6171442, 'lng': 13.5127759},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10046722",
        "ocTitoloProgetto": "NEW TECHNOLOGIES FOR MACRO AND MICROPLASTIC DETECTION AND ANALYSIS IN THE ADRIATIC BASIN",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2400532,00",
        "ocCodCategoriaSpesa": "084",
        "ocDescrCategoriaSpesa": "Prevenzione e riduzione integrate dell'inquinamento",
        "coordinate": {'lat': 43.6158299, 'lng': 13.518915},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10046731",
        "ocTitoloProgetto": "SUSTAINABLE FISHERIES WITH DRONES DATA PROCESSING",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "1703440,00",
        "ocCodCategoriaSpesa": "085",
        "ocDescrCategoriaSpesa": "Tutela e valorizzazione della biodiversit\u00c3\u00a0, protezione della natura e infrastrutture \"verdi\"",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10046849",
        "ocTitoloProgetto": "STRATEGIES TO ADAPT TO CLIMATE CHANGE IN ADRIATIC REGIONS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2144048,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6158299, 'lng': 13.518915},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10046849",
        "ocTitoloProgetto": "STRATEGIES TO ADAPT TO CLIMATE CHANGE IN ADRIATIC REGIONS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2144048,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6394889, 'lng': 13.3071192},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10046878",
        "ocTitoloProgetto": "GREEN ECONOMY AND CO2",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2443590,25",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6158299, 'lng': 13.518915},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10047543",
        "ocTitoloProgetto": "ECOSUSTAINABLE MANAGEMENT OF MARINE AND TOURIST PORTS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "2668800,61",
        "ocCodCategoriaSpesa": "085",
        "ocDescrCategoriaSpesa": "Tutela e valorizzazione della biodiversit\u00c3\u00a0, protezione della natura e infrastrutture \"verdi\"",
        "coordinate": {'lat': 43.6158299, 'lng': 13.518915},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10252001",
        "ocTitoloProgetto": "CLIMATE CHANGE INFORMATION, MONITORING AND MANAGEMENT TOOLS FOR ADAPTATION STRATEGIES IN ADRIATIC COASTAL AREAS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20200101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "8823415,00",
        "ocCodCategoriaSpesa": "087",
        "ocDescrCategoriaSpesa": "Misure di adattamento ai cambiamenti climatici, prevenzione e gestione dei rischi connessi al clima, quali erosione, incendi, inondazioni, tempeste e siccit\u00c3\u00a0, comprese azioni di sensibilizzazione, pr",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10255153",
        "ocTitoloProgetto": "SHARED GOVERNANCE OF SUSTAINABLE FISHERIES AND AQUACULTURE ACTIVITIES AS LEVERAGE TO PROTECT MARINE RESOURCES IN THE ADRIATIC SEA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20200401.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "5725155,00",
        "ocCodCategoriaSpesa": "085",
        "ocDescrCategoriaSpesa": "Tutela e valorizzazione della biodiversit\u00c3\u00a0, protezione della natura e infrastrutture \"verdi\"",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10255941",
        "ocTitoloProgetto": "COASTAL AND MARINE WATERS INTEGRATED MONITORING SYSTEMS FOR ECOSYSTEMS PROTECTION AND MANAGEMENT",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20200101.0,
        "ocCodTemaSintetico": 5,
        "ocTemaSintetico": "Ambiente e prevenzione dei rischi",
        "ocFinanzTotPubNetto": "5817547,00",
        "ocCodCategoriaSpesa": "086",
        "ocDescrCategoriaSpesa": "Tutela, ripristino e uso sostenibile dei siti Natura 2000",
        "coordinate": {'lat': 43.6105194, 'lng': 13.5103008},
        "hasReport": true
    }
];
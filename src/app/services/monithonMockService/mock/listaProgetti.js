
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
        "codLocaleProgetto": "5MA13730",
        "ocTitoloProgetto": "CODICE PROGETTO: 13730 - PROGRAMMA OPERATIVO REGIONALE (POR) MARCHE FESR 2014\/2020 ASSE 4, AZIONE 13.2. \u00c2\u00bf INTERVENTO 13.2.1 \u00c2\u00bfINTERVENTI DI EFFICIENZA ENERGETICA E UTILIZZO DI FONTI RINNOVABILI NELLA PUBBLICA ILLUMINAZIONE\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181016.0,
        "ocCodTemaSintetico": 4,
        "ocTemaSintetico": "Energia e efficienza energetica",
        "ocFinanzTotPubNetto": "185404,58",
        "ocCodCategoriaSpesa": "013",
        "ocDescrCategoriaSpesa": "Rinnovo di infrastrutture pubbliche sul piano dell'efficienza energetica, progetti dimostrativi e misure di sostegno",
        "coordinate": { "lat": 43.655652, "lng": 13.126452 },
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
        "coordinate": { "lat": 43.5173798, "lng": 13.2381919 },
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
        "coordinate": { "lat": 43.5948161, "lng": 13.5106171 },
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
        "coordinate": { "lat": 43.5738048, "lng": 13.2085854 },
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
        "coordinate": { "lat": 43.563864, "lng": 13.5131738 },
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
        "coordinate": { "lat": 43.5913376, "lng": 13.5151292 },
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
        "coordinate": { "lat": 43.6019431, "lng": 13.4547895 },
        "hasReport": true
    }
    ,

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
        "coordinate": { 'lat': 43.6019431, 'lng': 13.4547895 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.5913376, 'lng': 13.5151292 },
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
        "coordinate": { 'lat': 43.6019431, 'lng': 13.4547895 },
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
        "coordinate": { 'lat': 43.6019431, 'lng': 13.4547895 },
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
        "coordinate": { 'lat': 43.6101964, 'lng': 13.5093069 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6153643, 'lng': 13.3618856 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6101964, 'lng': 13.5093069 },
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
        "coordinate": { 'lat': 43.6131574, 'lng': 13.501918 },
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
        "coordinate": { 'lat': 43.6158299, 'lng': 13.518915 },
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
        "coordinate": { 'lat': 43.6157452, 'lng': 13.5172798 },
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
        "coordinate": { 'lat': 43.6171442, 'lng': 13.5127759 },
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
        "coordinate": { 'lat': 43.6158299, 'lng': 13.518915 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6158299, 'lng': 13.518915 },
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
        "coordinate": { 'lat': 43.6394889, 'lng': 13.3071192 },
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
        "coordinate": { 'lat': 43.6158299, 'lng': 13.518915 },
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
        "coordinate": { 'lat': 43.6158299, 'lng': 13.518915 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
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
        "coordinate": { 'lat': 43.6105194, 'lng': 13.5103008 },
        "hasReport": true
    }
];
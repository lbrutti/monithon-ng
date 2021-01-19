//

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
        "codLocaleProgetto": "1MA10078",
        "ocTitoloProgetto": "TASSI ALBERTO & C. S.A.S. (MANUTENZIONE STRAORDINARIA, IMPIANTI ARREDI ED ATTREZZATURE NELL'HOTEL ARGENTINA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080331.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "64738,91",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7096857",
            "lng": "13,2326466"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10135",
        "ocTitoloProgetto": "NUMANA BLU' S.P.A. (RISTRUTTURAZIONE, AMMODERNAMENTO, ADEGUAMENTO ALLE NORMATIVE DI SICUREZZA, ARREDAMENTO, ATTREZZATURE ED IMPIANTI NEL CAMPEGGIO NUMANA BL\u00c3\u0083\u00c2\u00b9 A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091120.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "91436,33",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4761111",
            "lng": "13,6330556"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10149",
        "ocTitoloProgetto": "LOCANDA OLIVI S.A.S. DI EMILI RAFFAELE (2\u00c3\u0082\u00c2\u00b0 STRALCIO MANUTENZIONE STRAORDINARIA, IMPIANTI, ARREDI ED ATTREZZATURE NELLA STRUTTURA RICETTIVA \"OSTERIA DI ADAMO CAMERE\" A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8996,06",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7066922",
            "lng": "13,1846033"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10161",
        "ocTitoloProgetto": "COUNTRY HOUSE IL TIGLIO DI FEBI PATRIZIA (AMMODERNAMENTO E REALIZZAZIONE DI IMPIANTI SPORTIVI NELL'ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"COUNTRY HOUSE IL TIGLIO\" A MERGO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090210.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7155,40",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4748824",
            "lng": "13,0410837"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10164",
        "ocTitoloProgetto": "HOTEL ATLANTIC DI MODESTI PAOLA E C. S.A.S. (1\u00c3\u0082\u00c2\u00b0 STRALCIO MANUTENZIONE STRAORDINARIA, IMPIANTI, ARREDI ED ATTREZZATURE NELL'HOTEL ATLANTIC A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "120027,03",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6820908",
            "lng": "13,2790527"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10170",
        "ocTitoloProgetto": "ACQUISIZIONE IN ECONOMIA DI MATERIALE PROMOZIONALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "119999,89",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10172",
        "ocTitoloProgetto": "ACQUISIZIONE IN ECONOMIA PUBBLICAZIONI PROMOZIONALI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091014.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "119999,59",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10223",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE TEATRO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20111018.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39968,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10298",
        "ocTitoloProgetto": "SERTORI ROBERTO (RIUSO DI EDIFICI CON TRASFORMAZIONE IN CASE ED APPARTAMENTI PER VACANZE \"IL VILLINO\" A LORETO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070515.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20190,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4443141",
            "lng": "13,6436986"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10540",
        "ocTitoloProgetto": "LA TABERNA SAS DI MARZELLA ANNAMARIA & C. (RIUSO DI EDIFICI CON TRASFORMAZIONE IN ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"LA TABERNA\" A CASTELFIDARDO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090909.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "27954,22",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,490915",
            "lng": "13,568777"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10545",
        "ocTitoloProgetto": "PINCINI FILIPPO (RISTRUTTURAZIONE ED AMPLIAMENTO DI UN COMPLESSO IMMOBILIARE DESTINATO AD AFFITTA CAMERE DI PROPRIET\u00c3\u0083\u00c2\u00a0 DI PINCINI FILIPPO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61014,21",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,550105",
            "lng": "13,4168622"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10667",
        "ocTitoloProgetto": "INIZIATIVA SISTEMI ON LINE - SITO IN LINGUA CINESE E GIAPPONESE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091022.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36907,50",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10961",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE MUSEI E BIBLIOTECHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110912.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA10964",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE MUSEI E BIBLIOTECHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20121007.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11582",
        "ocTitoloProgetto": "REALIZZAZIONE \"CENTRO ESPOSITIVO DI ARTE CONTEMPORANEA\" PRESSO PALAZZO SCALZI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110120.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "299835,22",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4312903",
            "lng": "12,8573502"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11688",
        "ocTitoloProgetto": "BORSE LAVORO NEL SETTORE VALORIZZAZIONE BENI CULTURALI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20130210.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11811",
        "ocTitoloProgetto": "MOSTRA CENTENARIO GIOVAN BATTISTA SALVI DETTO IL SASSOFERRATO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120717.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61174,74",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,4360045",
            "lng": "12,8586412"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11835",
        "ocTitoloProgetto": "SISTEMAZIONE AREE ESTERNE ED ADIACENTI LE MURA CASTELLANE DEL CAPOLUOGO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090529.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "251916,21",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,612717",
            "lng": "13,158168"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11845",
        "ocTitoloProgetto": "PALAZZO PIANETTI - REALIZZAZIONE MUSEO ARCHEOLOGICO - VIA XV SETTEMBRE- RESTAURO FACCIATE E REALIZZAZIONE SALE MUSEALI AL PIANO TERRA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1072644,62",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA11886",
        "ocTitoloProgetto": "CENTENARIO DI GIOVAN BATTISTA PERGOLESI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080616.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,5218089",
            "lng": "13,2441627"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA12039",
        "ocTitoloProgetto": "LAVORI DI RIQUALIFICAZIOE DI PIAZZA CAVOUR - FONDI PAR_FAS 2007-2013 INTERVENTO 5.3.1.3 RIQUALIFICAZIONE DELL'AREA URBANA AL CENTRO DELLA CITT\u00c3\u0083\u00c2\u00a0 DI ANCONA - ACCORDO DI PROGRAMMA QUADRO GENERALE (APQR)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20051129.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1900000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,6168737",
            "lng": "13,5170765"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA12207",
        "ocTitoloProgetto": "PALAZZO DELLA SIGNORIA - ALLESTIMENTO SALA LETTURA PRESSO LA \"SALARA\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "124929,96",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA12236",
        "ocTitoloProgetto": "PALAZZO DELLA SIGNORIA: REALIZZAZIONE DI UN SOPPALCO METALLICO, SCAFFALATURA ED ARREDI, IMPIANTO TERMICO ED ELETTRICO",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "140000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13144",
        "ocTitoloProgetto": "RESTAURO DEL TEATRO-CENTRO CULTURALE POLIVALENTE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120621.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4326531",
            "lng": "13,1866586"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13145",
        "ocTitoloProgetto": "INTERVENTO SU PALAZZO MADONNA DEL BUON GES\u00c3\u0083\u00c2\u00b9",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,3355002",
            "lng": "12,9034382"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13151",
        "ocTitoloProgetto": "INTERVENTO SUL PALAZZO DEL PODEST\u00c3\u0083\u00c2\u00a0 2\u00c3\u0082\u00c2\u00b0 LOTTO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "400000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,3449672",
            "lng": "12,9062153"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13453",
        "ocTitoloProgetto": "SISTEMAZIONE E RESTAURO GIARDINI DEL POIO E REALIZZAZIONE DELLA NUOVA STRUTTURA DI COLLEGAMENTO TRA PALAZZO DEL PODEST\u00c3\u0083\u00c2\u00a0 E PALAZZO DEL BUON GES\u00c3\u0083\u00c2\u00b9",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "318400,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,3449672",
            "lng": "12,9062153"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13465",
        "ocTitoloProgetto": "AMPLIAMENTO E RIORGANIZZAZIONE DEGLI SPAZI ESPOSITIVI DELL'ATTUALE MUSEO DI ARTE STORIA E TERRITORIO PRESSO PALAZZO FIUMI SERMATTEI E REALIZZAZIONE DELLA BIBLIOTECA E DELL'ARCHIVIO STORICO PRESSO L'EX MUNICIPIO - 2\u00c3\u0082\u00c2\u00b0 STRALCIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "261279,04",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4291392",
            "lng": "12,935166"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13660",
        "ocTitoloProgetto": "LIRICA INSIEME",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20101210.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,4861459",
            "lng": "13,4817969"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA13966",
        "ocTitoloProgetto": "RIQUALIFICAZIONE E VALORIZZAZIONE DI VECCHIE STRADE VICINALI ATTUALMENTE DISMESSE PER REALIZZAZIONE DI PERCORSI AGRITURISTICI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081103.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "349999,58",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,5808096",
            "lng": "13,0246911"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14017",
        "ocTitoloProgetto": "RECUPERO E RIQUALIFICAZIONE DEL COMPLESSO MONUMENTALE EX CONVENTO SACRO CUORE. PRIMO STRALCIO FUNZIONALE. TEATRO SPERIMENTALE E AUDITORIUM.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20050901.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "957598,34",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5766937",
            "lng": "13,2061722"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14018",
        "ocTitoloProgetto": "RESTAURO E VALORIZZAZIONE EX CONVENTO DELLE CLARISSE. MUSEO INTERNAZIONALE DELL'IMMAGINE POSTALE E CANTINE DEI VECCHI SAPORI.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070626.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "899992,47",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5804029",
            "lng": "13,166622"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14019",
        "ocTitoloProgetto": "VALORIZZAZIONE DEL PATRIMONIO STORICO ARCHITETTONICO CULTURALE. RESTAURO E RIQUALIFICAZIONE DEL TORRIONE DELL'OROLOGIO E AMPLIAMENTO MUSEO COMUNALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090314.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "132777,41",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5256583",
            "lng": "13,062963"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA14020",
        "ocTitoloProgetto": "PROGETTO DI RIPRISTINO DEGLI EQUILIBRI NATURALI DELLE AREE DI PERTINENZA FLUVIALE IN DESTRA IDROGRAFICA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20120531.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "41991,00",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,5371076",
            "lng": "13,2899882"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15321",
        "ocTitoloProgetto": "RESTAURO DELLA FONTANA DELLA COSTA D'ANCONA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4413345",
            "lng": "13,6056396"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15322",
        "ocTitoloProgetto": "RESTAURO DELLA FONTE DEL CARPINE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90400,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4319705",
            "lng": "13,6082737"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15337",
        "ocTitoloProgetto": "RESTAURO DELLA FONTANA DELLA VIA DELLA CROCE, SCALINATA E CROCE MONUMENTALE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20130801.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4383438",
            "lng": "13,6068867"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA15343",
        "ocTitoloProgetto": "INIZIATIVE STRAORDINARIE DI PROMOZIONE TURISTICA DELLA CITT\u00c3\u0083\u00c2\u00a0 DI SENIGALLIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140529.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "101761,58",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7148218",
            "lng": "13,2181036"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16552",
        "ocTitoloProgetto": "FIERE ESTERE I\u00c3\u0082\u00c2\u00b0 SEMESTRE 2015",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150310.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16615",
        "ocTitoloProgetto": "HOTEL ITALIA DI PASQUINI P., SARTIRANA A.M.A. & C. - S.N.C. (AMMODERNAMENTO DELL'HOTEL ITALIA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34550,47",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7084591",
            "lng": "13,2344723"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA16808",
        "ocTitoloProgetto": "INIZIATIVA PROMOZIONALE ALL'ESTERO DENOMINATA WTM 2015 WORLD TRAVEL MARKET - LONDRA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150803.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38430,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17273",
        "ocTitoloProgetto": "HOTEL UNIVERSAL DI ALBONETTI ROBERTA & C. S.N.C. (AMMODERNAMENTO, RIQUALIFICAZIONE, STRAORDINARIA MANUTENZIONE, ADEGUAMENTO ALLE NORMATIVE DI SICUREZZA E ARREDAMENTO NELL'HOTEL UNIVERSAL A SENIGALLIA- AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61517,88",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7225328",
            "lng": "13,2142781"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17321",
        "ocTitoloProgetto": "ALBERGO BEL SIT DEI F.LLI MANFREDI S.N.C. (MANUTENZIONE STRAORDINARIA, IMPIANTI, ARREDI ED ATTREZZATURE NELL'ALBERGO BEL SIT A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080331.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24308,02",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7171987",
            "lng": "13,1724578"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17532",
        "ocTitoloProgetto": "HOTEL CRISTALLO DI ZOPPINI E. & C. S.N.C. (AMMODERNAMENTO E REALIZZAZIONE IMPIANTI SPORTIVI NELL'HOTEL CRISTALLO A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "144470,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7151758",
            "lng": "13,224758"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17536",
        "ocTitoloProgetto": "GRILLI MARCO (REALIZZAZIONE DI CASE ED APPARTAMENTI PER VACANZE A SIROLO - AN)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "144470,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5325469",
            "lng": "13,6051674"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA17730",
        "ocTitoloProgetto": "AVVIO PROCEDURA NEGOZIATA ATTUAZIONE PIANO DI COMUNIC. INTEGRATO E FOCALIZZAZIONE MARCHIGIANA DELLE CLIP E DELLA SERIE TV \"CHE DIO CI AIUTI 3\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20151229.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39500,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6105194",
            "lng": "13,5103008"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA18087",
        "ocTitoloProgetto": "PALAZZO PIANETTI - MANUTENZIONE STRAORDINARIA FACCIATE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20080905.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "199671,04",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5212428",
            "lng": "13,2420911"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3663",
        "ocTitoloProgetto": "PARCO DELLE SIGARAIE: OPERAZIONE DI COMPLETAMENTO E RIQUALIFICAZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "648307,70",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5997269",
            "lng": "13,325532"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3680",
        "ocTitoloProgetto": "GREENWAY DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099ESINO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 MACROLOTTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 1\u00c3\u0082\u00c2\u00b0 STRALCIO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 INTERVENTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 SOTTOSPAZIO (TERRAIN VAGUE TRA FIUME E VIADOTTO)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "198672,68",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,4471034",
            "lng": "13,0154659"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3708",
        "ocTitoloProgetto": "POR FESR 2007-2013 ASSE 5 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 VALORIZZAZIONE CULTURALE : RISANAMENTO CONSERVATIVO E RESTAURO CASTELLO DEL CASSERO NEL COMUNE DI CAMERATA PICENA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081015.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "172280,53",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,578705",
            "lng": "13,3521829"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3775",
        "ocTitoloProgetto": "GREENWAY DELL\u00c3\u00a2\u00c2\u0080\u00c2\u0099ESINO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 MACROLOTTO 1 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 3\u00c3\u0082\u00c2\u00b0 STRALCIO \u00c3\u00a2\u00c2\u0080\u00c2\u0093 INTERVENTO A \u00c3\u00a2\u00c2\u0080\u00c2\u0093 COMPLETAMENTO INFRASTRUTTURAZIONE AMBIENTALE NEL TRATTO SAN VITTORE \u00c3\u00a2\u00c2\u0080\u00c2\u0093 GROTTE DI FRASASSI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "191641,18",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,3494084",
            "lng": "12,92619"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3781",
        "ocTitoloProgetto": "RIQUALIFICAZIONE DEI GIARDINI FUORI PORTA (FOR' D' PORTA) CON COSTRUZIONE ANNESSO BAR UBICATI IN VIA LORETANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070213.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "467365,52",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,530777",
            "lng": "13,552923"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3785",
        "ocTitoloProgetto": "F.L.U.M.E.N. - PARCO FLUVIALE LINEARE LUNGO LE SPONDE DEL FIUME ESINO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20020101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "748511,95",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,5634345",
            "lng": "13,2505178"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3787",
        "ocTitoloProgetto": "LAVORI DI RISANAMENTO CONSERVATIVO PRESSO IL TEATRO COMUNALE \"V. ALFIERI\" DI MONTEMARCIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20051201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "162110,61",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,639684",
            "lng": "13,3109985"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3796",
        "ocTitoloProgetto": "INTERVENTO 5.2.2.58.01 - RIQUALIFICAZIONE E VALORIZZAZIONE DI AREE E COMPLESSI DI PREGIO STORICO-ARCHITETTONICO \u00c3\u00a2\u00c2\u0080\u00c2\u0093RIFACIMENTO DELLA PAVIMENTAZIONE DELLE VIE INTERNE ALLE MURA E RESTAURO DELLE MURA DELLA FRAZIONE DI CASTEL D\u00c3\u00a2\u00c2\u0080\u00c2\u0099EMILIO.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20051227.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "474016,11",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5431619",
            "lng": "13,3856226"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3797",
        "ocTitoloProgetto": "RIFACIMENTO DEL MURO DI CINTA NEL PARCO \u00c3\u00a2\u00c2\u0080\u00c2\u009cG. LEOPARDI\u00c3\u00a2\u00c2\u0080\u00c2\u009d PROSPICENTE VIALE MARTIRI DELLA RESISTENZA.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20050503.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "384096,75",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,499921",
            "lng": "12,939746"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3814",
        "ocTitoloProgetto": "PIT  \"MISA - SUASA\" - RECUPERO E VALORIZZAZIONE STORICO - CULTURALE - RESTAURO E RIUSO FUNZIONALE DEL PALZZO DE POCCINTIBUS - SECONDO LOTTO FUNZIONALE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080606.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "346940,78",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,6127599",
            "lng": "13,1572752"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3827",
        "ocTitoloProgetto": "RECUPERO EDIFICIO STORICO TESTIMONIALE \"TORRIONE\" DI VIA PORTA LOMBARDA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080601.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "187485,13",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4961036",
            "lng": "13,3108492"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3830",
        "ocTitoloProgetto": "RECUPERO VALORIZZAZIONE E RIQUALIFICAZIONE DEL LAGO GRANDE DI PORTONOVO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090406.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "190000,00",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,6167855",
            "lng": "13,5188848"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3831",
        "ocTitoloProgetto": "RECUPERO E VALORIZZAZIONE DELLA ROCCA MEDIOEVALE DI OFFAGNA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081016.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "214849,79",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,52736",
            "lng": "13,4416903"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3869",
        "ocTitoloProgetto": "POR FESR 2007-2013 ASSE 5 \u00c3\u00a2\u00c2\u0080\u00c2\u0093 VALORIZZAZIONE CULTURALE: RECUPERO FONTANE,LAVATOI,VECCHIE SORGENTI DI USO PUBBLICO NEL TERRITORIO DEL COMUNE DI POLVERIGI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080922.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "249205,03",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,5249549",
            "lng": "13,3937978"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3896",
        "ocTitoloProgetto": "RECUPERO E VALORIZZAZIONE STORICO-CULTURALE - RISTRUTTURAZIONE VILLINO ROMUALDO II STRALCIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20021219.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "589867,78",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,671747",
            "lng": "13,1063535"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA3897",
        "ocTitoloProgetto": "RECUPERO E VALORIZZAZIONE STORICO-CULTURALE - SUASA, DOMUS REPUBBICANA - PROGETTO DI RESTAURO E DI MUSEALIZZAZIONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090108.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "220805,77",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,6073717",
            "lng": "12,9763244"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7621",
        "ocTitoloProgetto": "RIQUALIFICAZIONE E RIFUNZIONALIZZAZIONE DEL CINEMA TEATRO CASANOVA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "560076,65",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,3188834",
            "lng": "12,9860296"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7738",
        "ocTitoloProgetto": "PROGETTO PALCOSCENICO MARCHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "360000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6179716",
            "lng": "13,515591"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7757",
        "ocTitoloProgetto": "MOSTRA GIUSEPPE MARTINI. LA VITA, LE OPERE.",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100623.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "35424,90",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,486718",
            "lng": "13,4844786"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7914",
        "ocTitoloProgetto": "MARCHE FILM COMMISSION 2009-2011",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091222.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "70000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6073642",
            "lng": "13,5124658"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7923",
        "ocTitoloProgetto": "L'ACQUA E LA MEMORIA",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20080617.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "240000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7923",
        "ocTitoloProgetto": "L'ACQUA E LA MEMORIA",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20080617.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "240000,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,4744199",
            "lng": "13,1148347"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7932",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN PLANETARIO MULTIMEDIALE DIGITALE SEMIFISSO PRESSO IL CENTRO SERVIZI DEL PARCO GOLA DELLA ROSSA E DI FRASASSI SITO IN LOC. CASTELLETTA DEL COMUNE DI FABRIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100618.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "88414,80",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,4028547",
            "lng": "13,0072526"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA7987",
        "ocTitoloProgetto": "VALORIZZAZIONE DI ITINERARI ARCHEOLOGICI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100119.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25000,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,5189205",
            "lng": "13,6181668"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8041",
        "ocTitoloProgetto": "CASA MUSEO G.SPONTINI: REALIZZAZIONE E ADEGUAMENTO IMPIANTI TECNOLOGICI (D.M. 37\/2008)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100123.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "111449,01",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4805968",
            "lng": "13,1364848"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8087",
        "ocTitoloProgetto": "EREDI DI PASQUINI PIERANGELO(RISTRUTTURAZIONE HOTEL KON TIKI A NUMANA- AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61916,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,488214",
            "lng": "13,629606"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8095",
        "ocTitoloProgetto": "MA.GI.A. SAS DI TIRIBOCO R. & C. (AMPLIAMENTO, MANUTENZIONE STRAORDINARIA, RIQUALIFICAZIONE E SUPERAMENTO BARRIERE ARCHITETTONICHE, OPERE DI PASSAGGIO A CLASSE SUPERIORE E ARREDAMENTO DELL'HOTEL ANCORE A SENIGALLIA (AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070430.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "52494,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7361814",
            "lng": "13,1917204"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8096",
        "ocTitoloProgetto": "HOTEL ATLANTIC DI MODESTI PAOLA, NORINA & C. S.A.S. (MANUTENZIONE STRAORDINARIA, AMMODERNAMENTO, RIQUALIFICAZIONE, ADEGUAMENTO ALLE ESIGENZE DELL'HANDICAP DELL'HOTEL ATLANTIC A SENIGALLIA AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "54311,10",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6821134",
            "lng": "13,279016"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8101",
        "ocTitoloProgetto": "HOTEL CRISTALLO DI ZOPPINI E. & C. S.N.C. (MANUTENZIONE STRAORDINARIA E AMMODERNAMENTO DELL'ALBERGO CRISTALLO A SENIGALLIA AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070208.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33449,41",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7151758",
            "lng": "13,224758"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8113",
        "ocTitoloProgetto": "HOTEL EMILIA S.R.L. (MANUTENZIONE STRAORDINARIA, AMMODERNAMENTO HOTEL EMILIA AD ANCONA)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070315.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "49129,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5625225",
            "lng": "13,5826134"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8116",
        "ocTitoloProgetto": "HOTEL NUMANA S.R.L. (STRAORDINARIA MANUTENZIONE, AMMODERNAMENTO, ATTREZZATURE E IMPIANTI E ADEGUAMENTO ALLE NORME DI SICUREZZA DELL'HOTEL NUMANA PALACE A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070126.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38640,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4967281",
            "lng": "13,6250946"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8124",
        "ocTitoloProgetto": "COMPLETAMENTO LAVORI DI RISANAMENTO CONSERVATIVO DELLE EX CANTINE DEL MONASTERO DI SAN LORENZO PER UN MUSEO DELLA CITT\u00c3\u0083\u00c2\u00a0 DI CUPRAMONTANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080923.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "188531,91",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4463181",
            "lng": "13,116565"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8125",
        "ocTitoloProgetto": "RIPRISTINO E RISANAMENTO DELLA FONTE DELLE BELLEZZE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "56624,84",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4445537",
            "lng": "13,6046814"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8137",
        "ocTitoloProgetto": "METROPOL S.A.S. DI SCHULTZ LIES EDELGARD E C. (RISTRUTTURAZIONE E RIQUALIFICAZIONE TRAMITE SUPERAMENTO DELLE BARRIERE ARCHITETTONICHE DELL'HOTEL METROPOL A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "73118,76",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7008288",
            "lng": "13,2466219"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8140",
        "ocTitoloProgetto": "HOTEL MAREBLU' SRL (AMMODERNAMENTO, RIQUALIFICAZIONE TRAMITE INTERVENTI DI ADEGUAMENTO ALLE ESIGENZE DELL'HANDICAP, ANCHE SENSORIALE, COMPRESO IL SUPERAMENTO DELLE BARRIERE ARCHITETTONICHE, IMPIEGO DI TECNOLOGIE E BIOEDILIZIA, INTRODUZIONE DI INNOVAZIONI TECNOLOGICHE, INSTALLAZIONE DI IMPIANTISTICA,",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070131.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15752,94",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7231093",
            "lng": "13,2132598"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8188",
        "ocTitoloProgetto": "HOTEL PINETA SRL. (COSTRUZIONE HOTEL PINETA A MONSANO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080606.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5628386",
            "lng": "13,2763585"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8283",
        "ocTitoloProgetto": "PROGETTAZIONE E PRODUZIONE DI FILMATI PUBBLICITARI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091007.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "401549,26",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8285",
        "ocTitoloProgetto": "RECUPERO FUNZIONALE DEL COMPLESSO SAN FRANCESCO PER REALIZZAZIONE POLO BIBLIOTECARIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1705501,24",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,335907",
            "lng": "12,9044838"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8296",
        "ocTitoloProgetto": "MOSTRA \"RITORNO A LORETO DELL'ANNUNCIAZIONE DI FEDERICO BAROCCI\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20000,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,4410346",
            "lng": "13,6109412"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8318",
        "ocTitoloProgetto": "MORGANTI SNC DI MORGANTI ANDREA E C. (MANUTENZIONE STRAORDINARIA DELL'HOTEL DEI GALLI A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "14436,24",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7346496",
            "lng": "13,194245"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8344",
        "ocTitoloProgetto": "MOSTRA \"PASQUALINO ROSSI. LE MARCHE E I CAPOLAVORI DI S. LUCIA\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080801.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "72752,00",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,44816",
            "lng": "13,0140907"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8348",
        "ocTitoloProgetto": "MOROBELLO DI SANTONI ALDO (ADESIONE A SISTEMI DI GESTIONE AMBIENTALE RELATIVI AD UN UTILIZZO OCULATO DELLE RISORSE, ELIMINANDO GLI SPRECHI, FAVORENDO IL RICICLO, IL RIUTILIZZO E LA RACCOLTA DIFFERENZIATA NELL'ALBERGO MOROBELLO RESORT A SAN MARCELLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "134600,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5784484",
            "lng": "13,2217604"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8509",
        "ocTitoloProgetto": "RECUPERO E RIPRISTINO DEL COMPLESSO MONUMENTALE \"EREMO DEL SASSO\" IN VALLEREMITA DI FABRIANO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3411000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,2970333",
            "lng": "12,873029"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8537",
        "ocTitoloProgetto": "RESTAURO DELLA FONTANA DEI GALLI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84706,06",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4398241",
            "lng": "13,6075145"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8543",
        "ocTitoloProgetto": "RESTAURO DELLA FONTE DELLA BUFFOLARECCIA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20080101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "155000,00",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,4397131",
            "lng": "13,6192917"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8870",
        "ocTitoloProgetto": "PROGETTO \"GIORGIO FU\u00c3\u0083\u00c2\u00a0. UN IMPRENDITORE DI CULTURA\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091113.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21363,94",
        "ocCodCategoriaSpesa": "59",
        "ocDescrCategoriaSpesa": "Sviluppo delle infrastrutture culturali",
        "coordinate": {
            "lat": "43,6171442",
            "lng": "13,5127759"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8889",
        "ocTitoloProgetto": "IMMOBILIARE SAN FRANCESCO S.R.L. (TRASFORMAZIONE IN ALBERGO PALAZZO RUSCHIONI A CAMERANO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "95566,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5309814",
            "lng": "13,5525802"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8898",
        "ocTitoloProgetto": "NUMANA BLU' S.P.A. (RICOSTRUZIONE PISCINA E SERVIZI E OPERE DI MANUTENZIONE STRAORDINARIA CAMPING NUMANA BLU A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "96600,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4767515",
            "lng": "13,6361377"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8899",
        "ocTitoloProgetto": "NUOVO FIORE COOPERATIVA SOCIALE A R.L. (AMMODERNAMENTO E RIQUALIFICAZIONE DEL CAMPING SPIAGGIA DI VELLUTO A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "27593,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7009001",
            "lng": "13,2469048"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8990",
        "ocTitoloProgetto": "CESARETTI GABRIELLA (REALIZZAZIONE ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE LE BETULLE AD ARCEVIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070129.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "107190,63",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4823458",
            "lng": "12,9976686"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8998",
        "ocTitoloProgetto": "AIRONE COUNTRY HOUSE (RISTRUTTURAZIONE PER TRASFORMAZIONE IN ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"AIRONE\" A OSIMO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070130.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "51148,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5124814",
            "lng": "13,4216702"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA8999",
        "ocTitoloProgetto": "BENIGNI GIUSEPPE (REALIZZAZIONE DI NUOVA ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"VILLA CORALIA\" A OSIMO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071213.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "134600,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4882633",
            "lng": "13,5291668"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9115",
        "ocTitoloProgetto": "PICCHIO BEACH SRL (RISTRUTTURAZIONE DI STABILIMENTO BALNEARE PICCHIO BEACH A FALCONARA MARITTIMA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070510.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33810,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6282768",
            "lng": "13,4027815"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9199",
        "ocTitoloProgetto": "SOCIETA' IMMOBILIARE RIVIERA ADRIATICA - S.I.R.A. S.P.A. (STRAORDINARIA MANUTENZIONE DELL'HOTEL RITZ A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080208.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34264,97",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,706756",
            "lng": "13,23682"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9214",
        "ocTitoloProgetto": "ALBERGO ELENA DI ROMAGNOLI LUIGI E C. S.N.C. (STRAORDINARIA MANUTENZIONE ALBERGO ELENA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091125.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7127,40",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,725776",
            "lng": "13,2060752"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9321",
        "ocTitoloProgetto": "MA.GI.A. SAS DI TIRIBOCO R. & C. (RISTRUTTURAZIONE E AMPLIAMENTO HOTEL ANCORE A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091110.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8902,73",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7361814",
            "lng": "13,1917204"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9356",
        "ocTitoloProgetto": "HOTEL BOLOGNA S.R.L. (RISTRUTTURAZIONE HOTEL BOLOGNA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091202.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "32175,12",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7238013",
            "lng": "13,2118028"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9361",
        "ocTitoloProgetto": "ACANTO COUNTRY HOUSE SNC DI BURATTINI GIANLUCA (2O STRALCIO RISTRUTTURAZIONE DI UN RUSTICO DA ADIBIRE A ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE ACANTO COUNTRY HOUSE A SIROLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080131.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15574,96",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,51914",
            "lng": "13,5928"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9366",
        "ocTitoloProgetto": "BORSE LAVORO SETTORE MUSEI E BIBLIOTECHE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20111018.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "122527,60",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9371",
        "ocTitoloProgetto": "LA CIMINIERA 1846 DI TOMASSETTI GIANCARLO & C. S.A.S. (MANUTENZIONE STRAORDINARIA SULL'IMMOBILE DESTINATO AD ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"LA CIMINIERA 1846\" A STAFFOLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080227.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "10690,78",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4363424",
            "lng": "13,1883748"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9374",
        "ocTitoloProgetto": "AIRONE SNC (2\u00c3\u0082\u00c2\u00b0 STRALCIO RISTRUTTURAZIONE DI FABBRICATI RURALI DA DESTINARE AD ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"AIRONE\" A GENGA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091123.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "99373,67",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,407987",
            "lng": "12,936847"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9376",
        "ocTitoloProgetto": "LES PARASOLS DI PINCINI FILIPPO & C. S.A.S (RISTRUTTURAZIONE STABILIMENTO BALNEARE LES PARASOLS A NUMANA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8623,65",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,4977671",
            "lng": "13,6249215"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9377",
        "ocTitoloProgetto": "CAKAO BEACH CLUB DI MAZZI MARIO E C. SAS (DEMOLIZIONE E RICOSTRUZIONE DI STABILIMENTO BALNEARE CAKAO BEACH CLUB AD ANCONA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7127,40",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,616867",
            "lng": "13,4243638"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9378",
        "ocTitoloProgetto": "REALIZZAZIONE DI UN'AREA UMIDA CONTIGUA AL FIUME MUSONE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060824.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "68293,26",
        "ocCodCategoriaSpesa": "56",
        "ocDescrCategoriaSpesa": "Tutela e sviluppo del patrimonio naturale",
        "coordinate": {
            "lat": "43,4562943",
            "lng": "13,6286299"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9380",
        "ocTitoloProgetto": "BORGOPARVO S.R.L. (RIUSO DI EDIFICI CON TRASFORMAZIONE IN ATTIVIT\u00c3\u0083\u00c2\u00a0 RICETTIVA RURALE \"COUNTRY-HOUSE BORGOPARVO\" AD ANCONA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "89463,60",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5147749",
            "lng": "13,5832227"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9382",
        "ocTitoloProgetto": "HOTEL PERLA DI MAIOLATESI DONATELLA E C. SNC (MANUTENZIONE STRAORDINARIA E AMMODERNAMENTO HOTEL PERLA A SENIGALLIA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7636,50",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,69989",
            "lng": "13,249"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9383",
        "ocTitoloProgetto": "HOTEL EMILIA S.R.L. (AMMODERNAMENTO HOTEL EMILIA AD ANCONA - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090930.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "50492,27",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,5608791",
            "lng": "13,6021938"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9624",
        "ocTitoloProgetto": "RESTAURO E SISTEMAZIONE DI VIA OTTORINO MANNI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20041201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "191696,26",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,7154806",
            "lng": "13,2197376"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9625",
        "ocTitoloProgetto": "RESTAURO, MIGLIORAMENTO SISMICO E ABBATTIMENTO BARRIERE ARCHITETTONICHE DI PALAZZETTO BAVIERA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20060315.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1313633,74",
        "ocCodCategoriaSpesa": "58",
        "ocDescrCategoriaSpesa": "Tutela e conservazione del patrimonio culturale",
        "coordinate": {
            "lat": "43,7152807",
            "lng": "13,2194919"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9788",
        "ocTitoloProgetto": "BIQUBO S.R.L. (MANUTENZIONE STRAORDINARIA, IMPIANTI ARREDI ED ATTREZZATURE NELLA STRUTTURA RICETTIVA \"RELAIS DEL BORGO HOTEL & SPA\" A STAFFOLO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "115576,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,432505",
            "lng": "13,18606"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9790",
        "ocTitoloProgetto": "ALBERGO RISTORANTE PINETA S.A.S. DI DELL'UOMO T. & N. (AMMODERNAMENTO E REALIZZAZIONE IMPIANTI TERMICI NELL'ALBERGO RISTORANTE PINETA A FABRIANO - AN)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080430.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7153,31",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,2287217",
            "lng": "12,8681255"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9865",
        "ocTitoloProgetto": "INIZIATIVA SISTEMI ON LINE SITO WEB MARCHE VOYAGER",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090601.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "11900,00",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9866",
        "ocTitoloProgetto": "REALIZZAZIONE PUBBLICIT\u00c3\u0083\u00c2\u00a0 RADIOFONICA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090325.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "105633,01",
        "ocCodCategoriaSpesa": "60",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi culturali",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MA9877",
        "ocTitoloProgetto": "FIERE, BORSE ED INIZIATIVE PROMOZIONALI IN ITALIA E ALL'ESTERO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090325.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "104468,48",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEB77H14002320001",
        "ocTitoloProgetto": "VERSO L'EXPO 2015 DA MARCHE ENDURANCE LIFESTYLE 2014 A TIPICIT\u00c3\u00afA' MARCHE 2015",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20140414.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "650000,00",
        "ocCodCategoriaSpesa": "57",
        "ocDescrCategoriaSpesa": "Altra assistenza per migliorare i servizi turistici",
        "coordinate": {
            "lat": "43,7148337",
            "lng": "13,2177939"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-ANCONA",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA, RESTAURO, PROTEZIONE E VALORIZZAZIONE DELL'ANFITEATRO ROMANO DI ANCONA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20191001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1500000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,6236517",
            "lng": "13,5110149"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-BELLAGUGLIANO",
        "ocTitoloProgetto": "RESTAURO E CONSOLIDAMENTO DELLA TORRE CAMPANARIA DELLA CHIESA S. FRANCESCO IN VIA CONVENTO - AGUGLIANO (AN)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160501.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,5651726",
            "lng": "13,3856365"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-CITTADELLAANCONA",
        "ocTitoloProgetto": "RECUPERO E RIQUALIFICAZIONE DEL COMPLESSO DELLA CITTADELLA DI ANCONA - RECUPERO E RESTAURO DELLA CINTA MURARIA E PULIZIA CORTILE E AREE INTERNE ALLE MURA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20180501.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3000000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,6133583",
            "lng": "13,5085674"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-NUMANA",
        "ocTitoloProgetto": "ALLESTIMENTO POLO MUSEALE E CENTRO DI VISITA PER LA VALORIZZAZIONE DEL PATRIMONIO CULTURALE PICENO NELL'AREA DEL PARCO DEL CONERO PRESSO L'IMMOBILE EX SCUOLA \"ELIA\" DI NUMANA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "800000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,513985",
            "lng": "13,620673"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1MISEFSC-POLVERIGI",
        "ocTitoloProgetto": "RIQUALIFICAZIONE DEL COMPLESSO EDILIZIO DENOMINATO  VILLA NAPPI - POLVERIGI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "300000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,5250171",
            "lng": "13,3977573"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00123",
        "ocTitoloProgetto": "LAVORI DI REALIZZAZIONE NUOVO CAMPO SPORTIVO__POLIVALENTE E COPERTURA CAMPO CALCIO A 5, VIA W. TOBAGI FRAZIONE STAZIONE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "375000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,4871213",
            "lng": "13,145121"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00183",
        "ocTitoloProgetto": "REALIZZAZIONE IMPIANTO SPORTIVO POLIVALENTE COPERTO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "300000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,5248517",
            "lng": "13,3938723"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00253",
        "ocTitoloProgetto": "LAVORI DI RESTAURO E RISANAMENTO CONSERVATIVO DELLE FACCIATE DEL PALASPORT BADIALI . 1_ STRALCIO COMUNE DI FALCONARA MARITTIMA - VIA DELLO STADIO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20181201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "129250,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,6220339",
            "lng": "13,3702811"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00254",
        "ocTitoloProgetto": "RISTRUTTURAZIONE DOCCE E SERVIZI IGIENICI DI DUE SPOGLIATOI DEL PALASPORT GIANFRANCO BADIALI COMUNE DI FALCONARA MARITTIMA VIA STADIO N.12",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20181001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30250,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,6220339",
            "lng": "13,3702811"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEA769_05322",
        "ocTitoloProgetto": "INTERVENTO LOCALE DI CONSOLIDAMENTO RIPRISTINO DANNI DEI LOCALI DEL CENTRO DI AGGREGAZIONE GIOVANILE (CAG) DANNEGGIATI DAL SISMA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190730.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "50000,00",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,5830655",
            "lng": "13,1690011"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEC060_01660",
        "ocTitoloProgetto": "LAVORI PER ADEGUAMENTO ALLE NORMATIVE ANTINCENDIO EX TEATRO \"B GIGLI\" SITO NEL CAPOLUOGO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191009.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33780,83",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,4871213",
            "lng": "13,145121"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEC100_06288",
        "ocTitoloProgetto": "LAVORI DI EFFICIENTAMENTO ENERGETICO MEDIANTE SOSTITUZIONE DELLA TAMPONATURA ESTERNA DEL PALAZZETTO DELLO SPORT SITO IN PIAZZALE OLIMPIA DEL COMUNE DI CASTELFIDARDO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191029.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "177879,52",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,4631153",
            "lng": "13,5514218"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF600_01398",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA PER EFFICIENTAMENTO ENERGETICO DELL'IMPIANTO TERMICO DELLA SALA POLIVALENTE DI VIA BRUNO BUOZZI N. 9",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190920.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "49684,44",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,4815672",
            "lng": "13,1385238"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF634_02665",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA PER L'EFFICIENTAMENTO E RIQUALIFICAZIONE ENERGETICA DEGLI IMPIANTI DI ILLUMINAZIONE IN VARI IMPIANTI SPORTIVI COMUNALI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21864,80",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,6006049",
            "lng": "13,2721197"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "4IGRUEF634_02943",
        "ocTitoloProgetto": "MANUTENZIONE STRAORDINARIA PER L'EFFICIENTAMENTO E RIQUALIFICAZIONE ENERGETICA DELL'IMPIANTO DI CLIMATIZZAZIONE DEL CENTRO TURISTICO CARLO URBANI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46425,41",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,6006049",
            "lng": "13,2721197"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11940",
        "ocTitoloProgetto": "CODICE PROGETTO: 11940 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11944",
        "ocTitoloProgetto": "CODICE PROGETTO: 11944 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING CECILIA GOBBI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "13285,80",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11974",
        "ocTitoloProgetto": "CODICE PROGETTO: 11974 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING  SAURO SCORTICHINI",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20161107.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3660,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11983",
        "ocTitoloProgetto": "CODICE PROGETTO: 11983 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161005.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2440,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11985",
        "ocTitoloProgetto": "CODICE PROGETTO: 11985 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "14640,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11986",
        "ocTitoloProgetto": "CODICE PROGETTO: 11986 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161004.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11988",
        "ocTitoloProgetto": "CODICE PROGETTO: 11988 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161004.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11989",
        "ocTitoloProgetto": "CODICE PROGETTO: 11989 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11994",
        "ocTitoloProgetto": "CODICE PROGETTO: 11994 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11996",
        "ocTitoloProgetto": "CODICE PROGETTO: 11996 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11997",
        "ocTitoloProgetto": "CODICE PROGETTO: 11997 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "9760,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA11998",
        "ocTitoloProgetto": "CODICE PROGETTO: 11998 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "23180,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA12015",
        "ocTitoloProgetto": "CODICE PROGETTO: 12015 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA12016",
        "ocTitoloProgetto": "CODICE PROGETTO: 12016 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84399,05",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA13790",
        "ocTitoloProgetto": "CODICE PROGETTO: 13790 - ACQUISIZIONE MEDIANTE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEL SERVIZIO DI  PERSONALIZZAZIONE DEL SOFTWARE PER IL POTENZIAMENTO DEL SISTEMA INFORMATIVO PER  IL TURISTA E DEL BOOKING ON LINE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43920,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14277",
        "ocTitoloProgetto": "CODICE PROGETTO: 14277 - ACQUISIZIONE MEDIANTE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEL SERVIZIO DI  PERSONALIZZAZIONE DEL SOFTWARE, FORMAZIONE E POPOLAMENTO DATI PER LA  RILEVAZIONE DEI FLUSSI TURISTICI",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20180222.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "16080,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14467",
        "ocTitoloProgetto": "CODICE PROGETTO: 14467 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) DEL SERVIZIO DI INSERZIONI PUBBLICITARIE DELLA MOSTRA \"LA DEVOTA BELLEZZA\" SOCIET\u00c3\u00a0 A.MANZONI SPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171110.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14552",
        "ocTitoloProgetto": "CODICE PROGETTO: 14552 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) DEL SERVIZIO DI INSERZIONI PUBBLICITARIE DELLA MOSTRA \"LA DEVOTA BELLEZZA\" SOCIET\u00c3\u00a0 SPEED SPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171110.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14922",
        "ocTitoloProgetto": "COMUNE DI CORINALDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20161109.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1281653,93",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,6488939",
            "lng": "13,0472908"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14989",
        "ocTitoloProgetto": "CODICE PROGETTO: 14989 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171229.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14990",
        "ocTitoloProgetto": "CODICE PROGETTO: 14990 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171227.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14991",
        "ocTitoloProgetto": "CODICE PROGETTO: 14991 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171213.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6015272",
            "lng": "13,5023602"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14992",
        "ocTitoloProgetto": "CODICE PROGETTO: 14992 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171214.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA14993",
        "ocTitoloProgetto": "CODICE PROGETTO: 14993 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46702,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15005",
        "ocTitoloProgetto": "CODICE PROGETTO: 15005 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171230.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15007",
        "ocTitoloProgetto": "CODICE PROGETTO: 15007 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "65000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15018",
        "ocTitoloProgetto": "CODICE PROGETTO: 15018 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15020",
        "ocTitoloProgetto": "CODICE PROGETTO: 15020 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15021",
        "ocTitoloProgetto": "DGR N. 1143\/2015 - DGR 44\/2018 - D. LGS. 50\/2016 ART.36 COMMA 2 LETTERA A). ACQUISIZIONE TRAMITE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEI SERVIZI DI UFFICIO STAMPA PER IL PROGETTO MOSTRARE LE MARCHE ANNO 2018- \u00c2\u0082\u00ac 20.000,00 (IVA ESCLUSA) \u00c2\u00bf CAP. 2070210026 \u00c2\u00bf 2070210027 \u00c2\u00bf 2070210028 - POR MARCHE FESR 2014-2020, BIL. 2018-2020 ANNUALIT\u00c3\u00a0 2018. SMART CIG Z78220C0F6 \u00c2\u00bf CUP B79H18000040009",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24290,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15022",
        "ocTitoloProgetto": "CODICE PROGETTO: 15022 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48788,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15023",
        "ocTitoloProgetto": "CODICE PROGETTO: 15023 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15024",
        "ocTitoloProgetto": "CODICE PROGETTO: 15024 - DGR N. 1108\/2017 \u00c2  D.A. 64\/2017 - POR FESR MARCHE 2014-2020 ASSE 6 AZIONE 17.1 DESTINAZIONE MARCHE - PARTECIPAZIONE FIERE ENIT 2017 -TORBIDONI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "160500,01",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15031",
        "ocTitoloProgetto": "CODICE PROGETTO: 15031 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "161731,74",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15032",
        "ocTitoloProgetto": "CODICE PROGETTO: 15032 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48312,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15033",
        "ocTitoloProgetto": "CODICE PROGETTO: 15033 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47214,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15035",
        "ocTitoloProgetto": "CODICE PROGETTO: 15035 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45750,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15041",
        "ocTitoloProgetto": "CODICE PROGETTO: 15041 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 VALORIZZAZIONE DEI LUOGHI E DEI PERCORSI DELLA CIVILT\u00c3\u00a0 PICENA - RIQUALIFICAZIONE DELL`ANTIQUARIUM - NUMANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180410.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,5132966",
            "lng": "13,620969"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15042",
        "ocTitoloProgetto": "CODICE PROGETTO: 15042 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "65875,43",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15046",
        "ocTitoloProgetto": "CODICE PROGETTO: 15046 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15047",
        "ocTitoloProgetto": "CODICE PROGETTO: 15047 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48739,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15049",
        "ocTitoloProgetto": "CODICE PROGETTO: 15049 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46360,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15050",
        "ocTitoloProgetto": "CODICE PROGETTO: 15050 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47018,80",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15051",
        "ocTitoloProgetto": "CODICE PROGETTO: 15051 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "13200,40",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15054",
        "ocTitoloProgetto": "CODICE PROGETTO: 15054 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - RECCHI STEFANO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47464,76",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15083",
        "ocTitoloProgetto": "CODICE PROGETTO: 15083 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "166805,60",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15220",
        "ocTitoloProgetto": "CODICE PROGETTO: 15220 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "103754,75",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15221",
        "ocTitoloProgetto": "CODICE PROGETTO: 15221 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30507,50",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15222",
        "ocTitoloProgetto": "CODICE PROGETTO: 15222 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "146400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15241",
        "ocTitoloProgetto": "CODICE PROGETTO: 15241 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "212566,50",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15317",
        "ocTitoloProgetto": "CODICE PROGETTO: 15317 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) AREA STAND PREALLESTITO PERSONALIZZATO E SERVIZI, IN RELAZIONE ALLA PARTECIPAZIONE DELLA REGIONE MARCHE ALLA FIERA 2017-54\u00c2\u00b0 INTERNATIONAL TOURISM MARKEPLACE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "146515,90",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA15557",
        "ocTitoloProgetto": "CODICE PROGETTO: 15557 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "35990,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16315",
        "ocTitoloProgetto": "CODICE PROGETTO: 16315 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 VALORIZZAZIONE DEI LUOGHI E DEI PERCORSI DELLA CIVILT\u00c3\u00a0 PICENA - AREA ARCHEOLOGICA \"I PINI\" - SIROLO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180829.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "99425,51",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,5195361",
            "lng": "13,6179025"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16390",
        "ocTitoloProgetto": "COMUNE DI SASSOFERRATO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20170525.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,4312125",
            "lng": "12,8573026"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16392",
        "ocTitoloProgetto": "CODICE PROGETTO: 16392 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46238,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16395",
        "ocTitoloProgetto": "CODICE PROGETTO: 16395 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36478,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16396",
        "ocTitoloProgetto": "CODICE PROGETTO: 16396 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16402",
        "ocTitoloProgetto": "CODICE PROGETTO: 16402 - POR FESR 2014\/2020 - ASSE 6, AZIONE 16.2 \"REALIZZAZIONE DI INTERVENTI RIVOLTI AL MIGLIORAMENTO DELLA FUNZIONE ED AL POTENZIAMENTO DEI CANALI DI ACCESSO E DI DIVULGAZIONE DELLA CONOSCENZA DEL PATRIMONIO CULTURALE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180522.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "98656,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,6167855",
            "lng": "13,5188848"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16412",
        "ocTitoloProgetto": "CODICE PROGETTO: 16412 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  VALORIZZAZIONE DEI LUOGHI, DELLE ATTIVIT\u00c3\u00a0 E DELLE FONTI DOCUMENTARIE LEGATE ALLA FISARMONICA ED ALLA SUA PRODUZIONE ARTISTICA ED ARTIGIANALE - CASTELFIDARDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180716.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,4644804",
            "lng": "13,546319"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16467",
        "ocTitoloProgetto": "CODICE PROGETTO: 16467 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20181022.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "96864,89",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,50787",
            "lng": "13,6215113"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16573",
        "ocTitoloProgetto": "CODICE PROGETTO: 16573 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "37865,36",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16596",
        "ocTitoloProgetto": "CODICE PROGETTO: 16596 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  TEATRO ALL`APERTO E MUSEO DEL ROSARIO - \"BASTIONE DI PORTA MARINA\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "375000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,4410768",
            "lng": "13,61017"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16938",
        "ocTitoloProgetto": "CODICE PROGETTO: 16938 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20181203.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "51340,30",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,6231554",
            "lng": "13,3937027"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16945",
        "ocTitoloProgetto": "CODICE PROGETTO: 16945 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180910.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "32771,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,5195361",
            "lng": "13,6179025"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16953",
        "ocTitoloProgetto": "CODICE PROGETTO: 16953 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180914.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "28852,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,6626136",
            "lng": "13,3196604"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16982",
        "ocTitoloProgetto": "CODICE PROGETTO: 16982 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  RISTRUTTURAZIONE AREA INTERNA ED ESTERNA - \"BASTIONE SANGALLO\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181030.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "365000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,4400679",
            "lng": "13,606699"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16991",
        "ocTitoloProgetto": "CODICE PROGETTO: 16991 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  CATALOGAZIONE ARCHIVIO STORICO - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181030.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,4400679",
            "lng": "13,606699"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16994",
        "ocTitoloProgetto": "CODICE PROGETTO: 16994 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "10351,07",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16995",
        "ocTitoloProgetto": "CODICE PROGETTO: 16995 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48556,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA16996",
        "ocTitoloProgetto": "CODICE PROGETTO: 16996 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17015",
        "ocTitoloProgetto": "CODICE PROGETTO: 17015 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 ACCESSO PEDONALE \"CANTINE BRAMANTESCHE\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181112.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,4404369",
            "lng": "13,6083401"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17041",
        "ocTitoloProgetto": "CODICE PROGETTO: 17041 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "478450,84",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17136",
        "ocTitoloProgetto": "CODICE PROGETTO: 17136 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45277,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17489",
        "ocTitoloProgetto": "CODICE PROGETTO: 17489 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "4758,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17557",
        "ocTitoloProgetto": "CODICE PROGETTO: 17557 - AZIONE 17.1.3. 1 \u00c2\u00bfI CAMMINI LAURETANI\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,4403063",
            "lng": "13,6076647"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17587",
        "ocTitoloProgetto": "CODICE PROGETTO: 17587 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45689,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17594",
        "ocTitoloProgetto": "CODICE PROGETTO: 17594 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12200,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17608",
        "ocTitoloProgetto": "CODICE PROGETTO: 17608 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "176352,26",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17619",
        "ocTitoloProgetto": "CODICE PROGETTO: 17619 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "176900,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17648",
        "ocTitoloProgetto": "CODICE PROGETTO: 17648 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47104,20",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17649",
        "ocTitoloProgetto": "CODICE PROGETTO: 17649 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "676931,52",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17832",
        "ocTitoloProgetto": "CODICE PROGETTO: 17832 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "37454,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17839",
        "ocTitoloProgetto": "CODICE PROGETTO: 17839 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17840",
        "ocTitoloProgetto": "CODICE PROGETTO: 17840 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48312,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17845",
        "ocTitoloProgetto": "CODICE PROGETTO: 17845 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "219600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17854",
        "ocTitoloProgetto": "CODICE PROGETTO: 17854 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "761931,92",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17856",
        "ocTitoloProgetto": "CODICE PROGETTO: 17856 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "213500,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17857",
        "ocTitoloProgetto": "CODICE PROGETTO: 17857 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "77470,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17858",
        "ocTitoloProgetto": "CODICE PROGETTO: 17858 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "128100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17863",
        "ocTitoloProgetto": "CODICE PROGETTO: 17863 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "85400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17864",
        "ocTitoloProgetto": "CODICE PROGETTO: 17864 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17865",
        "ocTitoloProgetto": "CODICE PROGETTO: 17865 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40872,44",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17873",
        "ocTitoloProgetto": "CODICE PROGETTO: 17873 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17895",
        "ocTitoloProgetto": "CODICE PROGETTO: 17895 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "186523,52",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17903",
        "ocTitoloProgetto": "CODICE PROGETTO: 17903 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30324,61",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17938",
        "ocTitoloProgetto": "CODICE PROGETTO: 17938 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "74742,77",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17962",
        "ocTitoloProgetto": "CODICE PROGETTO: 17962 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45232,11",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17988",
        "ocTitoloProgetto": "CODICE PROGETTO: 17988 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42151,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17993",
        "ocTitoloProgetto": "CODICE PROGETTO: 17993 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48191,22",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA17996",
        "ocTitoloProgetto": "CODICE PROGETTO: 17996 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2 - IRENE MANZI - 2018",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20181113.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46970,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18059",
        "ocTitoloProgetto": "CODICE PROGETTO: 18059 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42517,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18076",
        "ocTitoloProgetto": "CODICE PROGETTO: 18076 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18084",
        "ocTitoloProgetto": "CODICE PROGETTO: 18084 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90280,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18098",
        "ocTitoloProgetto": "CODICE PROGETTO: 18098 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21660,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18114",
        "ocTitoloProgetto": "CODICE PROGETTO: 18114 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "74742,77",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18124",
        "ocTitoloProgetto": "CODICE PROGETTO: 18124 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21660,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18134",
        "ocTitoloProgetto": "CODICE PROGETTO: 18134 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84546,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18139",
        "ocTitoloProgetto": "CODICE PROGETTO: 18139 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18143",
        "ocTitoloProgetto": "CODICE PROGETTO: 18143 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18162",
        "ocTitoloProgetto": "CODICE PROGETTO: 18162 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18163",
        "ocTitoloProgetto": "CODICE PROGETTO: 18163 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18172",
        "ocTitoloProgetto": "CODICE PROGETTO: 18172 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18173",
        "ocTitoloProgetto": "CODICE PROGETTO: 18173 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38649,60",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18174",
        "ocTitoloProgetto": "CODICE PROGETTO: 18174 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18177",
        "ocTitoloProgetto": "CODICE PROGETTO: 18177 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18179",
        "ocTitoloProgetto": "CODICE PROGETTO: 18179 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "29816,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18181",
        "ocTitoloProgetto": "CODICE PROGETTO: 18181 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48676,99",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18188",
        "ocTitoloProgetto": "CODICE PROGETTO: 18188 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25235,70",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18193",
        "ocTitoloProgetto": "CODICE PROGETTO: 18193 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "9028,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18239",
        "ocTitoloProgetto": "CODICE PROGETTO: 18239 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18240",
        "ocTitoloProgetto": "CODICE PROGETTO: 18240 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48800,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18294",
        "ocTitoloProgetto": "CODICE PROGETTO: 18294 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "682894,97",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18296",
        "ocTitoloProgetto": "CODICE PROGETTO: 18296 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "182878,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18333",
        "ocTitoloProgetto": "CODICE PROGETTO: 18333 - POR MARCHE FESR 2014\/2020 - ASSE 6 - AZIONE 17.1.3 - \"VALORIZZAZIONE TURISTICA DEI CLUSTER ATTRAVERSO INTERVENTI DI QUALIFICAZIONE DEI PRODOTTI E DEI TERRITORI\" - MARCHIO DI QUALIT\u00c3\u00a0 DELLE STRUTTURE RICETTIVE \"OSPITALIT\u00c3\u00a0 ITALIANA - REGIONE MARCHE\" - ANNO 2019\/2020",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190903.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6167855",
            "lng": "13,5188848"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18359",
        "ocTitoloProgetto": "CODICE PROGETTO: 18359 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38610,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18363",
        "ocTitoloProgetto": "CODICE PROGETTO: 18363 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18370",
        "ocTitoloProgetto": "CODICE PROGETTO: 18370 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47946,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18376",
        "ocTitoloProgetto": "CODICE PROGETTO: 18376 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3261,06",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18394",
        "ocTitoloProgetto": "CODICE PROGETTO: 18394 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43432,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18398",
        "ocTitoloProgetto": "CODICE PROGETTO: 18398 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18117,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18400",
        "ocTitoloProgetto": "CODICE PROGETTO: 18400 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7015,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18412",
        "ocTitoloProgetto": "CODICE PROGETTO: 18412 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "31402,80",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18413",
        "ocTitoloProgetto": "CODICE PROGETTO: 18413 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12276,25",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18419",
        "ocTitoloProgetto": "CODICE PROGETTO: 18419 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8838,90",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18421",
        "ocTitoloProgetto": "CODICE PROGETTO: 18421 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39650,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18424",
        "ocTitoloProgetto": "CODICE PROGETTO: 18424 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5978,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18471",
        "ocTitoloProgetto": "CODICE PROGETTO: 18471 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34207,89",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18484",
        "ocTitoloProgetto": "CODICE PROGETTO: 18484 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61989,48",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18494",
        "ocTitoloProgetto": "CODICE PROGETTO: 18494 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "66702,70",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18580",
        "ocTitoloProgetto": "CODICE PROGETTO: 18580 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18620",
        "ocTitoloProgetto": "CODICE PROGETTO: 18620 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97600,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA18844",
        "ocTitoloProgetto": "CODICE PROGETTO: 18844 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5040,43",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19051",
        "ocTitoloProgetto": "CODICE PROGETTO: 19051 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  VALORIZZAZIONE DELLA TRADIZIONE OPIFICIA LOCALE CON PARTICOLARE RIFERIMENTO ALLA MUSICA E AGLI STRUMENTI MUSICALI - CAMERANO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190311.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,5301043",
            "lng": "13,5523002"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19303",
        "ocTitoloProgetto": "CODICE PROGETTO: 19303 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19346",
        "ocTitoloProgetto": "CODICE PROGETTO: 19346 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 29.1 -INTERVENTO 29.1.1 -INTERVENTI DI VALORIZZAZIONE E MESSA IN RETE DEL PATRIMONIO CULTURALE, MATERIALE E IMMATERIALE, NELLE AREE DI ATTRAZIONE DI RILEVANZA STRATEGICA TALI DA CONSOLIDARE E PROMUOVERE PROCESSI DI SVILUPPO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190503.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48777,07",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,3361195",
            "lng": "12,905113"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19372",
        "ocTitoloProgetto": "CODICE PROGETTO: 19372 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5040,43",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19373",
        "ocTitoloProgetto": "CODICE PROGETTO: 19373 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18208,50",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19374",
        "ocTitoloProgetto": "CODICE PROGETTO: 19374 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39900,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19375",
        "ocTitoloProgetto": "CODICE PROGETTO: 19375 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12444,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19379",
        "ocTitoloProgetto": "CODICE PROGETTO: 19379 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15616,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19380",
        "ocTitoloProgetto": "CODICE PROGETTO: 19380 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46360,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19381",
        "ocTitoloProgetto": "CODICE PROGETTO: 19381 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19382",
        "ocTitoloProgetto": "CODICE PROGETTO: 19382 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12139,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19383",
        "ocTitoloProgetto": "CODICE PROGETTO: 19383 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "4880,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19384",
        "ocTitoloProgetto": "CODICE PROGETTO: 19384 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19385",
        "ocTitoloProgetto": "CODICE PROGETTO: 19385 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19465",
        "ocTitoloProgetto": "CODICE PROGETTO: 19465 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97842,51",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19467",
        "ocTitoloProgetto": "CODICE PROGETTO: 19467 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "273750,84",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19478",
        "ocTitoloProgetto": "CODICE PROGETTO: 19478 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "180560,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19516",
        "ocTitoloProgetto": "CODICE PROGETTO: 19516 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43310,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA19521",
        "ocTitoloProgetto": "CODICE PROGETTO: 19521 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "31110,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA33690",
        "ocTitoloProgetto": "CODICE PROGETTO: 33690 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA33881",
        "ocTitoloProgetto": "CODICE PROGETTO: 33881 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7190,68",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA36235",
        "ocTitoloProgetto": "CODICE PROGETTO: 36235 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21106,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA36403",
        "ocTitoloProgetto": "CODICE PROGETTO: 36403 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "19154,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA44994",
        "ocTitoloProgetto": "CODICE PROGETTO: 44994 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "228262,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45013",
        "ocTitoloProgetto": "CODICE PROGETTO: 45013 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "19154,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45014",
        "ocTitoloProgetto": "CODICE PROGETTO: 45014 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21106,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45015",
        "ocTitoloProgetto": "CODICE PROGETTO: 45015 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "62830,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45022",
        "ocTitoloProgetto": "CODICE PROGETTO: 45022 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45038",
        "ocTitoloProgetto": "CODICE PROGETTO: 45038 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "55000,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6098591",
            "lng": "13,5091686"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45070",
        "ocTitoloProgetto": "CODICE PROGETTO: 45070 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48191,22",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45077",
        "ocTitoloProgetto": "CODICE PROGETTO: 45077 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42700,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45231",
        "ocTitoloProgetto": "CODICE PROGETTO: 45231 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45240",
        "ocTitoloProgetto": "CODICE PROGETTO: 45240 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "54899,98",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "5MA45242",
        "ocTitoloProgetto": "CODICE PROGETTO: 45242 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "ocCodCategoriaSpesa": "093",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi turistici pubblici",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7MAPRATT15551",
        "ocTitoloProgetto": "RISTRUTTURAZIONE PALLONE TENSO STATICO DI VIA SCANDALLI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181219.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "86321,25",
        "ocCodCategoriaSpesa": " ",
        "ocDescrCategoriaSpesa": " ",
        "coordinate": {
            "lat": "43,530777",
            "lng": "13,552923"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10042741",
        "ocTitoloProgetto": "RESTORING THE MEMORY OF ADRIATIC PORTS SITES.MARITIME CULTURE TO FOSTER BALANCED TERRITORIAL GROWTH",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2813460,00",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,6171442",
            "lng": "13,5127759"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043021",
        "ocTitoloProgetto": "INTEGRATED SYSTEM OF THE NATURAL AND CULTURAL HERITAGE AND THE CULTURAL ACTIVITIES",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1176243,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,6161908",
            "lng": "13,5054829"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043021",
        "ocTitoloProgetto": "INTEGRATED SYSTEM OF THE NATURAL AND CULTURAL HERITAGE AND THE CULTURAL ACTIVITIES",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1176243,00",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,510502",
            "lng": "13,6221799"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10043061",
        "ocTitoloProgetto": "ZERO WASTE BLUE SPORT EVENTS FOR TERRITORIAL DEVELOPMENT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180419.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "861435,70",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10047361",
        "ocTitoloProgetto": "DEVELOPMENT OF A CROSSBORDER  NETWORK  FOR THE PROMOTION OF THE ACCESSIBLE  TOURISM DESTINATIONS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2509328,35",
        "ocCodCategoriaSpesa": "095",
        "ocDescrCategoriaSpesa": "Sviluppo e promozione di servizi culturali pubblici",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "hasReport": true
    },
    {
        "codLocaleProgetto": "7VE10048184",
        "ocTitoloProgetto": "MANAGEMENT AND DEVELOPMENT OF INLANDS",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2218069,31",
        "ocCodCategoriaSpesa": "094",
        "ocDescrCategoriaSpesa": "Protezione, sviluppo e promozione del patrimonio culturale pubblico",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "hasReport": true
    }
];
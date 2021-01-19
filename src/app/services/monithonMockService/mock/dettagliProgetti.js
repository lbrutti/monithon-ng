/**
 * mock della response del servizio dettaglioProgetto
 * Campi estratti:
 *
 *  | COLONNA CSV ORIGINALE                 |  CAMPO JSON           |  TIPO                            |
 *  |---------------------------------------|-----------------------|----------------------------------|
 *  | COD_LOCALE_PROGETTO                   |  codLocaleProgetto    |  string                          |
 *  | OC_SINTESI_PROGETTO                   |  ocSintesiProgetto    |  string                          |
 *  | OC_STATO_PROGETTO                     |  ocStatoProgetto      |  string                          |
 *  | OC_DATA_INIZIO_PROGETTO               |  ocDataInizioProgetto |  string/dateTime                 |
 *  | OC_TEMA_SINTETICO                     |  ocTemaSintetico      |  string                          |
 *  | OC_FINANZ_TOT_PUB_NETTO               |  ocFinanzTotPubNetto  |  double                          |
 *  | TOT_PAGAMENTI                         |  totPagamenti         |  double                          |
 *  | COORDINATE (*)                        |  coordinate           |  object:{lat, lng}               |
 *  | OC_LINK                               |  ocLink               |  string                          |
 *  | MONITHON_LINK (*)                     |  monithonLink         |  array di url o di oggetti       |
 *  |                                       |                       |  contenenti url e info report    |
 *  | -------------------------------------------------------------------------------------------------|
 *
 *  | DA SKETCH 04/01/21: NON MOSTRO ALCUN DETTAGLIO IN APP MA REDIRIGO A OC O report                  |
 *  |quindi sono sufficenti i campi relativi ai link cui puntare                                        |
 *  |---------------------------------------|-----------------------|----------------------------------|
 *
 * I campi (*) sono da reperire, gli altri sono presenti nel CSV su cui si basa questo spreadsheet
 * https://docs.google.com/spreadsheets/d/1Uol55fO96CXjhUGXza_PnYaecuUhlDIbFjmKY6RodK8/edit#gid=537025182
 *
 */

export const dettagliProgetti = [
    {
        "codLocaleProgetto": "1MA10078",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080331.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "64738,91",
        "totPagamenti": "64738,91",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10078",
        "lat": "43,7096857",
        "lng": "13,2326466",
        "coordinate": {
            "lat": "43,7096857",
            "lng": "13,2326466"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10135",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091120.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "91436,33",
        "totPagamenti": "91436,33",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10135",
        "lat": "43,4761111",
        "lng": "13,6330556",
        "coordinate": {
            "lat": "43,4761111",
            "lng": "13,6330556"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10149",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8996,06",
        "totPagamenti": "8996,06",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10149",
        "lat": "43,7066922",
        "lng": "13,1846033",
        "coordinate": {
            "lat": "43,7066922",
            "lng": "13,1846033"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10161",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090210.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7155,40",
        "totPagamenti": "7155,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10161",
        "lat": "43,4748824",
        "lng": "13,0410837",
        "coordinate": {
            "lat": "43,4748824",
            "lng": "13,0410837"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10164",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "120027,03",
        "totPagamenti": "120027,03",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10164",
        "lat": "43,6820908",
        "lng": "13,2790527",
        "coordinate": {
            "lat": "43,6820908",
            "lng": "13,2790527"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10170",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "119999,89",
        "totPagamenti": "119999,89",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10170",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10172",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091014.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "119999,59",
        "totPagamenti": "119999,59",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10172",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10223",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20111018.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39968,00",
        "totPagamenti": "39968,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10223",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10298",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070515.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20190,00",
        "totPagamenti": "20190,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10298",
        "lat": "43,4443141",
        "lng": "13,6436986",
        "coordinate": {
            "lat": "43,4443141",
            "lng": "13,6436986"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10540",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090909.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "27954,22",
        "totPagamenti": "27954,22",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10540",
        "lat": "43,490915",
        "lng": "13,568777",
        "coordinate": {
            "lat": "43,490915",
            "lng": "13,568777"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10545",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61014,21",
        "totPagamenti": "61014,21",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10545",
        "lat": "43,550105",
        "lng": "13,4168622",
        "coordinate": {
            "lat": "43,550105",
            "lng": "13,4168622"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10667",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091022.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36907,50",
        "totPagamenti": "36907,50",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10667",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10961",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110912.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "totPagamenti": "30000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10961",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA10964",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20121007.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25000,00",
        "totPagamenti": "25000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma10964",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA11582",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20110120.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "299835,22",
        "totPagamenti": "299835,22",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma11582",
        "lat": "43,4312903",
        "lng": "12,8573502",
        "coordinate": {
            "lat": "43,4312903",
            "lng": "12,8573502"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA11688",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20130210.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20000,00",
        "totPagamenti": "20000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma11688",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA11811",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120717.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61174,74",
        "totPagamenti": "61174,74",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma11811",
        "lat": "43,4360045",
        "lng": "12,8586412",
        "coordinate": {
            "lat": "43,4360045",
            "lng": "12,8586412"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA11835",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090529.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "251916,21",
        "totPagamenti": "251916,21",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma11835",
        "lat": "43,612717",
        "lng": "13,158168",
        "coordinate": {
            "lat": "43,612717",
            "lng": "13,158168"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA11845",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1072644,62",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma11845",
        "lat": "43,5270861",
        "lng": "13,2463797",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA11886",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080616.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "totPagamenti": "177349,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma11886",
        "lat": "43,5218089",
        "lng": "13,2441627",
        "coordinate": {
            "lat": "43,5218089",
            "lng": "13,2441627"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA12039",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20051129.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1900000,00",
        "totPagamenti": "1652781,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma12039",
        "lat": "43,6168737",
        "lng": "13,5170765",
        "coordinate": {
            "lat": "43,6168737",
            "lng": "13,5170765"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA12207",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "124929,96",
        "totPagamenti": "278333,78",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma12207",
        "lat": "43,5270861",
        "lng": "13,2463797",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA12236",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "140000,00",
        "totPagamenti": "174941,79",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma12236",
        "lat": "43,5270861",
        "lng": "13,2463797",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13144",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120621.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "totPagamenti": "149938,55",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13144",
        "lat": "43,4326531",
        "lng": "13,1866586",
        "coordinate": {
            "lat": "43,4326531",
            "lng": "13,1866586"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13145",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13145",
        "lat": "43,3355002",
        "lng": "12,9034382",
        "coordinate": {
            "lat": "43,3355002",
            "lng": "12,9034382"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13151",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "400000,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13151",
        "lat": "43,3449672",
        "lng": "12,9062153",
        "coordinate": {
            "lat": "43,3449672",
            "lng": "12,9062153"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13453",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": null,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "318400,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13453",
        "lat": "43,3449672",
        "lng": "12,9062153",
        "coordinate": {
            "lat": "43,3449672",
            "lng": "12,9062153"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13465",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20120301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "261279,04",
        "totPagamenti": "261279,04",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13465",
        "lat": "43,4291392",
        "lng": "12,935166",
        "coordinate": {
            "lat": "43,4291392",
            "lng": "12,935166"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13660",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20101210.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "totPagamenti": "100000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13660",
        "lat": "43,4861459",
        "lng": "13,4817969",
        "coordinate": {
            "lat": "43,4861459",
            "lng": "13,4817969"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA13966",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081103.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "349999,58",
        "totPagamenti": "349999,58",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma13966",
        "lat": "43,5808096",
        "lng": "13,0246911",
        "coordinate": {
            "lat": "43,5808096",
            "lng": "13,0246911"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA14017",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20050901.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "957598,34",
        "totPagamenti": "957598,34",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma14017",
        "lat": "43,5766937",
        "lng": "13,2061722",
        "coordinate": {
            "lat": "43,5766937",
            "lng": "13,2061722"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA14018",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070626.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "899992,47",
        "totPagamenti": "899992,47",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma14018",
        "lat": "43,5804029",
        "lng": "13,166622",
        "coordinate": {
            "lat": "43,5804029",
            "lng": "13,166622"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA14019",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090314.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "132777,41",
        "totPagamenti": "132777,41",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma14019",
        "lat": "43,5256583",
        "lng": "13,062963",
        "coordinate": {
            "lat": "43,5256583",
            "lng": "13,062963"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA14020",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20120531.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "41991,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma14020",
        "lat": "43,5371076",
        "lng": "13,2899882",
        "coordinate": {
            "lat": "43,5371076",
            "lng": "13,2899882"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA15321",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma15321",
        "lat": "43,4413345",
        "lng": "13,6056396",
        "coordinate": {
            "lat": "43,4413345",
            "lng": "13,6056396"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA15322",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20150301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90400,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma15322",
        "lat": "43,4319705",
        "lng": "13,6082737",
        "coordinate": {
            "lat": "43,4319705",
            "lng": "13,6082737"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA15337",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20130801.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90000,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma15337",
        "lat": "43,4383438",
        "lng": "13,6068867",
        "coordinate": {
            "lat": "43,4383438",
            "lng": "13,6068867"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA15343",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20140529.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "101761,58",
        "totPagamenti": "75106,64",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma15343",
        "lat": "43,7148218",
        "lng": "13,2181036",
        "coordinate": {
            "lat": "43,7148218",
            "lng": "13,2181036"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA16552",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150310.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma16552",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA16615",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34550,47",
        "totPagamenti": "34550,47",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma16615",
        "lat": "43,7084591",
        "lng": "13,2344723",
        "coordinate": {
            "lat": "43,7084591",
            "lng": "13,2344723"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA16808",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20150803.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38430,00",
        "totPagamenti": "38430,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma16808",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA17273",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61517,88",
        "totPagamenti": "61517,88",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma17273",
        "lat": "43,7225328",
        "lng": "13,2142781",
        "coordinate": {
            "lat": "43,7225328",
            "lng": "13,2142781"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA17321",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080331.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24308,02",
        "totPagamenti": "24308,02",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma17321",
        "lat": "43,7171987",
        "lng": "13,1724578",
        "coordinate": {
            "lat": "43,7171987",
            "lng": "13,1724578"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA17532",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "144470,00",
        "totPagamenti": "144470,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma17532",
        "lat": "43,7151758",
        "lng": "13,224758",
        "coordinate": {
            "lat": "43,7151758",
            "lng": "13,224758"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA17536",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "144470,00",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma17536",
        "lat": "43,5325469",
        "lng": "13,6051674",
        "coordinate": {
            "lat": "43,5325469",
            "lng": "13,6051674"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA17730",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20151229.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39500,00",
        "totPagamenti": "39500,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma17730",
        "lat": "43,6105194",
        "lng": "13,5103008",
        "coordinate": {
            "lat": "43,6105194",
            "lng": "13,5103008"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA18087",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20080905.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "199671,04",
        "totPagamenti": "0,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma18087",
        "lat": "43,5212428",
        "lng": "13,2420911",
        "coordinate": {
            "lat": "43,5212428",
            "lng": "13,2420911"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3663",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090901.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "648307,70",
        "totPagamenti": "648307,70",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3663",
        "lat": "43,5997269",
        "lng": "13,325532",
        "coordinate": {
            "lat": "43,5997269",
            "lng": "13,325532"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3680",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "198672,68",
        "totPagamenti": "198672,68",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3680",
        "lat": "43,4471034",
        "lng": "13,0154659",
        "coordinate": {
            "lat": "43,4471034",
            "lng": "13,0154659"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3708",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081015.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "172280,53",
        "totPagamenti": "172280,53",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3708",
        "lat": "43,578705",
        "lng": "13,3521829",
        "coordinate": {
            "lat": "43,578705",
            "lng": "13,3521829"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3775",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "191641,18",
        "totPagamenti": "191641,18",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3775",
        "lat": "43,3494084",
        "lng": "12,92619",
        "coordinate": {
            "lat": "43,3494084",
            "lng": "12,92619"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3781",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070213.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "467365,52",
        "totPagamenti": "467365,52",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3781",
        "lat": "43,530777",
        "lng": "13,552923",
        "coordinate": {
            "lat": "43,530777",
            "lng": "13,552923"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3785",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20020101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "748511,95",
        "totPagamenti": "748511,95",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3785",
        "lat": "43,5634345",
        "lng": "13,2505178",
        "coordinate": {
            "lat": "43,5634345",
            "lng": "13,2505178"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3787",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20051201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "162110,61",
        "totPagamenti": "162110,61",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3787",
        "lat": "43,639684",
        "lng": "13,3109985",
        "coordinate": {
            "lat": "43,639684",
            "lng": "13,3109985"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3796",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20051227.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "474016,11",
        "totPagamenti": "474016,11",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3796",
        "lat": "43,5431619",
        "lng": "13,3856226",
        "coordinate": {
            "lat": "43,5431619",
            "lng": "13,3856226"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3797",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20050503.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "384096,75",
        "totPagamenti": "384096,75",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3797",
        "lat": "43,499921",
        "lng": "12,939746",
        "coordinate": {
            "lat": "43,499921",
            "lng": "12,939746"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3814",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080606.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "346940,78",
        "totPagamenti": "346940,78",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3814",
        "lat": "43,6127599",
        "lng": "13,1572752",
        "coordinate": {
            "lat": "43,6127599",
            "lng": "13,1572752"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3827",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080601.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "187485,13",
        "totPagamenti": "187485,13",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3827",
        "lat": "43,4961036",
        "lng": "13,3108492",
        "coordinate": {
            "lat": "43,4961036",
            "lng": "13,3108492"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3830",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090406.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "190000,00",
        "totPagamenti": "190000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3830",
        "lat": "43,6167855",
        "lng": "13,5188848",
        "coordinate": {
            "lat": "43,6167855",
            "lng": "13,5188848"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3831",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20081016.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "214849,79",
        "totPagamenti": "214849,79",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3831",
        "lat": "43,52736",
        "lng": "13,4416903",
        "coordinate": {
            "lat": "43,52736",
            "lng": "13,4416903"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3869",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080922.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "249205,03",
        "totPagamenti": "249205,03",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3869",
        "lat": "43,5249549",
        "lng": "13,3937978",
        "coordinate": {
            "lat": "43,5249549",
            "lng": "13,3937978"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3896",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20021219.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "589867,78",
        "totPagamenti": "589867,78",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3896",
        "lat": "43,671747",
        "lng": "13,1063535",
        "coordinate": {
            "lat": "43,671747",
            "lng": "13,1063535"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA3897",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090108.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "220805,77",
        "totPagamenti": "220805,77",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma3897",
        "lat": "43,6073717",
        "lng": "12,9763244",
        "coordinate": {
            "lat": "43,6073717",
            "lng": "12,9763244"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7621",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080301.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "560076,65",
        "totPagamenti": "560076,65",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7621",
        "lat": "43,3188834",
        "lng": "12,9860296",
        "coordinate": {
            "lat": "43,3188834",
            "lng": "12,9860296"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7738",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "360000,00",
        "totPagamenti": "360000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7738",
        "lat": "43,6179716",
        "lng": "13,515591",
        "coordinate": {
            "lat": "43,6179716",
            "lng": "13,515591"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7757",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100623.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "35424,90",
        "totPagamenti": "35424,90",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7757",
        "lat": "43,486718",
        "lng": "13,4844786",
        "coordinate": {
            "lat": "43,486718",
            "lng": "13,4844786"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7914",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091222.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "70000,00",
        "totPagamenti": "70000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7914",
        "lat": "43,6073642",
        "lng": "13,5124658",
        "coordinate": {
            "lat": "43,6073642",
            "lng": "13,5124658"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7923",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20080617.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "240000,00",
        "totPagamenti": "240000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7923",
        "lat": "43,5270861",
        "lng": "13,2463797",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7923",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20080617.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "240000,00",
        "totPagamenti": "240000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7923",
        "lat": "43,4744199",
        "lng": "13,1148347",
        "coordinate": {
            "lat": "43,4744199",
            "lng": "13,1148347"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7932",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100618.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "88414,80",
        "totPagamenti": "88414,80",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7932",
        "lat": "43,4028547",
        "lng": "13,0072526",
        "coordinate": {
            "lat": "43,4028547",
            "lng": "13,0072526"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA7987",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100119.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25000,00",
        "totPagamenti": "25000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma7987",
        "lat": "43,5189205",
        "lng": "13,6181668",
        "coordinate": {
            "lat": "43,5189205",
            "lng": "13,6181668"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8041",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20100123.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "111449,01",
        "totPagamenti": "111449,01",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8041",
        "lat": "43,4805968",
        "lng": "13,1364848",
        "coordinate": {
            "lat": "43,4805968",
            "lng": "13,1364848"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8087",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61916,00",
        "totPagamenti": "61916,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8087",
        "lat": "43,488214",
        "lng": "13,629606",
        "coordinate": {
            "lat": "43,488214",
            "lng": "13,629606"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8095",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070430.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "52494,00",
        "totPagamenti": "52494,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8095",
        "lat": "43,7361814",
        "lng": "13,1917204",
        "coordinate": {
            "lat": "43,7361814",
            "lng": "13,1917204"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8096",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "54311,10",
        "totPagamenti": "54311,10",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8096",
        "lat": "43,6821134",
        "lng": "13,279016",
        "coordinate": {
            "lat": "43,6821134",
            "lng": "13,279016"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8101",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070208.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33449,41",
        "totPagamenti": "33449,41",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8101",
        "lat": "43,7151758",
        "lng": "13,224758",
        "coordinate": {
            "lat": "43,7151758",
            "lng": "13,224758"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8113",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070315.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "49129,00",
        "totPagamenti": "49129,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8113",
        "lat": "43,5625225",
        "lng": "13,5826134",
        "coordinate": {
            "lat": "43,5625225",
            "lng": "13,5826134"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8116",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070126.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38640,00",
        "totPagamenti": "38640,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8116",
        "lat": "43,4967281",
        "lng": "13,6250946",
        "coordinate": {
            "lat": "43,4967281",
            "lng": "13,6250946"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8124",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080923.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "188531,91",
        "totPagamenti": "188531,71",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8124",
        "lat": "43,4463181",
        "lng": "13,116565",
        "coordinate": {
            "lat": "43,4463181",
            "lng": "13,116565"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8125",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "56624,84",
        "totPagamenti": "56624,84",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8125",
        "lat": "43,4445537",
        "lng": "13,6046814",
        "coordinate": {
            "lat": "43,4445537",
            "lng": "13,6046814"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8137",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "73118,76",
        "totPagamenti": "73118,76",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8137",
        "lat": "43,7008288",
        "lng": "13,2466219",
        "coordinate": {
            "lat": "43,7008288",
            "lng": "13,2466219"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8140",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070131.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15752,94",
        "totPagamenti": "15752,94",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8140",
        "lat": "43,7231093",
        "lng": "13,2132598",
        "coordinate": {
            "lat": "43,7231093",
            "lng": "13,2132598"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8188",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080606.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "totPagamenti": "200000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8188",
        "lat": "43,5628386",
        "lng": "13,2763585",
        "coordinate": {
            "lat": "43,5628386",
            "lng": "13,2763585"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8283",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091007.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "401549,26",
        "totPagamenti": "401549,26",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8283",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8285",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1705501,24",
        "totPagamenti": "1705501,24",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8285",
        "lat": "43,335907",
        "lng": "12,9044838",
        "coordinate": {
            "lat": "43,335907",
            "lng": "12,9044838"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8296",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090216.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "20000,00",
        "totPagamenti": "20000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8296",
        "lat": "43,4410346",
        "lng": "13,6109412",
        "coordinate": {
            "lat": "43,4410346",
            "lng": "13,6109412"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8318",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "14436,24",
        "totPagamenti": "14436,24",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8318",
        "lat": "43,7346496",
        "lng": "13,194245",
        "coordinate": {
            "lat": "43,7346496",
            "lng": "13,194245"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8344",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080801.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "72752,00",
        "totPagamenti": "72752,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8344",
        "lat": "43,44816",
        "lng": "13,0140907",
        "coordinate": {
            "lat": "43,44816",
            "lng": "13,0140907"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8348",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "134600,00",
        "totPagamenti": "134600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8348",
        "lat": "43,5784484",
        "lng": "13,2217604",
        "coordinate": {
            "lat": "43,5784484",
            "lng": "13,2217604"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8509",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090223.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3411000,00",
        "totPagamenti": "3398390,91",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8509",
        "lat": "43,2970333",
        "lng": "12,873029",
        "coordinate": {
            "lat": "43,2970333",
            "lng": "12,873029"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8537",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84706,06",
        "totPagamenti": "84706,06",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8537",
        "lat": "43,4398241",
        "lng": "13,6075145",
        "coordinate": {
            "lat": "43,4398241",
            "lng": "13,6075145"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8543",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20080101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "155000,00",
        "totPagamenti": "147065,95",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8543",
        "lat": "43,4397131",
        "lng": "13,6192917",
        "coordinate": {
            "lat": "43,4397131",
            "lng": "13,6192917"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8870",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091113.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21363,94",
        "totPagamenti": "21363,94",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8870",
        "lat": "43,6171442",
        "lng": "13,5127759",
        "coordinate": {
            "lat": "43,6171442",
            "lng": "13,5127759"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8889",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "95566,00",
        "totPagamenti": "95566,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8889",
        "lat": "43,5309814",
        "lng": "13,5525802",
        "coordinate": {
            "lat": "43,5309814",
            "lng": "13,5525802"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8898",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "96600,00",
        "totPagamenti": "96600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8898",
        "lat": "43,4767515",
        "lng": "13,6361377",
        "coordinate": {
            "lat": "43,4767515",
            "lng": "13,6361377"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8899",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "27593,00",
        "totPagamenti": "27593,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8899",
        "lat": "43,7009001",
        "lng": "13,2469048",
        "coordinate": {
            "lat": "43,7009001",
            "lng": "13,2469048"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8990",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070129.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "107190,63",
        "totPagamenti": "107190,63",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8990",
        "lat": "43,4823458",
        "lng": "12,9976686",
        "coordinate": {
            "lat": "43,4823458",
            "lng": "12,9976686"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8998",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070130.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "51148,00",
        "totPagamenti": "51148,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8998",
        "lat": "43,5124814",
        "lng": "13,4216702",
        "coordinate": {
            "lat": "43,5124814",
            "lng": "13,4216702"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA8999",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071213.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "134600,00",
        "totPagamenti": "134600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma8999",
        "lat": "43,4882633",
        "lng": "13,5291668",
        "coordinate": {
            "lat": "43,4882633",
            "lng": "13,5291668"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9115",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20070510.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33810,00",
        "totPagamenti": "33810,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9115",
        "lat": "43,6282768",
        "lng": "13,4027815",
        "coordinate": {
            "lat": "43,6282768",
            "lng": "13,4027815"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9199",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080208.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34264,97",
        "totPagamenti": "34264,97",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9199",
        "lat": "43,706756",
        "lng": "13,23682",
        "coordinate": {
            "lat": "43,706756",
            "lng": "13,23682"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9214",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091125.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7127,40",
        "totPagamenti": "7127,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9214",
        "lat": "43,725776",
        "lng": "13,2060752",
        "coordinate": {
            "lat": "43,725776",
            "lng": "13,2060752"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9321",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091110.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8902,73",
        "totPagamenti": "8902,73",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9321",
        "lat": "43,7361814",
        "lng": "13,1917204",
        "coordinate": {
            "lat": "43,7361814",
            "lng": "13,1917204"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9356",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091202.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "32175,12",
        "totPagamenti": "32175,12",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9356",
        "lat": "43,7238013",
        "lng": "13,2118028",
        "coordinate": {
            "lat": "43,7238013",
            "lng": "13,2118028"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9361",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080131.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15574,96",
        "totPagamenti": "15574,96",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9361",
        "lat": "43,51914",
        "lng": "13,5928",
        "coordinate": {
            "lat": "43,51914",
            "lng": "13,5928"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9366",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20111018.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "122527,60",
        "totPagamenti": "122527,60",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9366",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9371",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080227.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "10690,78",
        "totPagamenti": "10690,78",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9371",
        "lat": "43,4363424",
        "lng": "13,1883748",
        "coordinate": {
            "lat": "43,4363424",
            "lng": "13,1883748"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9374",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091123.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "99373,67",
        "totPagamenti": "99373,67",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9374",
        "lat": "43,407987",
        "lng": "12,936847",
        "coordinate": {
            "lat": "43,407987",
            "lng": "12,936847"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9376",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8623,65",
        "totPagamenti": "8623,65",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9376",
        "lat": "43,4977671",
        "lng": "13,6249215",
        "coordinate": {
            "lat": "43,4977671",
            "lng": "13,6249215"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9377",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7127,40",
        "totPagamenti": "7127,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9377",
        "lat": "43,616867",
        "lng": "13,4243638",
        "coordinate": {
            "lat": "43,616867",
            "lng": "13,4243638"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9378",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20060824.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "68293,26",
        "totPagamenti": "68293,26",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9378",
        "lat": "43,4562943",
        "lng": "13,6286299",
        "coordinate": {
            "lat": "43,4562943",
            "lng": "13,6286299"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9380",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20071221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "89463,60",
        "totPagamenti": "89463,60",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9380",
        "lat": "43,5147749",
        "lng": "13,5832227",
        "coordinate": {
            "lat": "43,5147749",
            "lng": "13,5832227"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9382",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7636,50",
        "totPagamenti": "7636,50",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9382",
        "lat": "43,69989",
        "lng": "13,249",
        "coordinate": {
            "lat": "43,69989",
            "lng": "13,249"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9383",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090930.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "50492,27",
        "totPagamenti": "50492,27",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9383",
        "lat": "43,5608791",
        "lng": "13,6021938",
        "coordinate": {
            "lat": "43,5608791",
            "lng": "13,6021938"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9624",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20041201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "191696,26",
        "totPagamenti": "191696,26",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9624",
        "lat": "43,7154806",
        "lng": "13,2197376",
        "coordinate": {
            "lat": "43,7154806",
            "lng": "13,2197376"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9625",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20060315.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1313633,74",
        "totPagamenti": "1074846,88",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9625",
        "lat": "43,7152807",
        "lng": "13,2194919",
        "coordinate": {
            "lat": "43,7152807",
            "lng": "13,2194919"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9788",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20091228.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "115576,00",
        "totPagamenti": "115576,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9788",
        "lat": "43,432505",
        "lng": "13,18606",
        "coordinate": {
            "lat": "43,432505",
            "lng": "13,18606"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9790",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20080430.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7153,31",
        "totPagamenti": "7153,31",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9790",
        "lat": "43,2287217",
        "lng": "12,8681255",
        "coordinate": {
            "lat": "43,2287217",
            "lng": "12,8681255"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9865",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090601.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "11900,00",
        "totPagamenti": "11900,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9865",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9866",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090325.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "105633,01",
        "totPagamenti": "105633,01",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9866",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MA9877",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20090325.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "104468,48",
        "totPagamenti": "104468,48",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1ma9877",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MISEB77H14002320001",
        "ocSintesiProgetto": " ",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20140414.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "650000,00",
        "totPagamenti": "800000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1miseb77h14002320001",
        "lat": "43,7148337",
        "lng": "13,2177939",
        "coordinate": {
            "lat": "43,7148337",
            "lng": "13,2177939"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MISEFSC-ANCONA",
        "ocSintesiProgetto": "MANUTENZIONE STRAORDINARIA, RESTAURO, PROTEZIONE E VALORIZZAZIONE DELL'ANFITEATRO ROMANO DI ANCONA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20191001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1500000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1misefsc-ancona",
        "lat": "43,6236517",
        "lng": "13,5110149",
        "coordinate": {
            "lat": "43,6236517",
            "lng": "13,5110149"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MISEFSC-BELLAGUGLIANO",
        "ocSintesiProgetto": "RESTAURO E CONSOLIDAMENTO DELLA TORRE CAMPANARIA DELLA CHIESA S. FRANCESCO IN VIA CONVENTO - AGUGLIANO (AN)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160501.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "totPagamenti": "12429,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1misefsc-bellagugliano",
        "lat": "43,5651726",
        "lng": "13,3856365",
        "coordinate": {
            "lat": "43,5651726",
            "lng": "13,3856365"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MISEFSC-CITTADELLAANCONA",
        "ocSintesiProgetto": "RECUPERO E RIQUALIFICAZIONE DEL COMPLESSO DELLA CITTADELLA DI ANCONA - RECUPERO E RESTAURO DELLA CINTA MURARIA E PULIZIA CORTILE E AREE INTERNE ALLE MURA",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20180501.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3000000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1misefsc-cittadellaancona",
        "lat": "43,6133583",
        "lng": "13,5085674",
        "coordinate": {
            "lat": "43,6133583",
            "lng": "13,5085674"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MISEFSC-NUMANA",
        "ocSintesiProgetto": "ALLESTIMENTO POLO MUSEALE E CENTRO DI VISITA PER LA VALORIZZAZIONE DEL PATRIMONIO CULTURALE PICENO NELL'AREA DEL PARCO DEL CONERO PRESSO L'IMMOBILE EX SCUOLA \"ELIA\" DI NUMANA",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "800000,00",
        "totPagamenti": "544,57",
        "ocLink": "www.opencoesione.gov.it\/progetti\/1misefsc-numana",
        "lat": "43,513985",
        "lng": "13,620673",
        "coordinate": {
            "lat": "43,513985",
            "lng": "13,620673"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1MISEFSC-POLVERIGI",
        "ocSintesiProgetto": "RIQUALIFICAZIONE DEL COMPLESSO EDILIZIO DENOMINATO  VILLA NAPPI - POLVERIGI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "300000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1misefsc-polverigi",
        "lat": "43,5250171",
        "lng": "13,3977573",
        "coordinate": {
            "lat": "43,5250171",
            "lng": "13,3977573"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00123",
        "ocSintesiProgetto": "XXX",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "375000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1pcmbnd2018fsc00123",
        "lat": "43,4871213",
        "lng": "13,145121",
        "coordinate": {
            "lat": "43,4871213",
            "lng": "13,145121"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00183",
        "ocSintesiProgetto": "XXX",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "300000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1pcmbnd2018fsc00183",
        "lat": "43,5248517",
        "lng": "13,3938723",
        "coordinate": {
            "lat": "43,5248517",
            "lng": "13,3938723"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00253",
        "ocSintesiProgetto": "DA DEFINIRE",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20181201.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "129250,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1pcmbnd2018fsc00253",
        "lat": "43,6220339",
        "lng": "13,3702811",
        "coordinate": {
            "lat": "43,6220339",
            "lng": "13,3702811"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "1PCMBND2018FSC00254",
        "ocSintesiProgetto": "DA DEFINIRE",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20181001.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30250,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/1pcmbnd2018fsc00254",
        "lat": "43,6220339",
        "lng": "13,3702811",
        "coordinate": {
            "lat": "43,6220339",
            "lng": "13,3702811"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "4IGRUEA769_05322",
        "ocSintesiProgetto": "IL PROGETTO PREVEDE IL CONSOLIDAMENTO E IL RINFORZO STRUTTURALE DI SETTI MURARI DANNEGGIATI DAL SISMA 2016 E LA REALIZZAZIONE DI UNA RAMPA DI ACCESSO AI LOCALI DEL CAG PER LA ELIMINAZIONE DELLE BARRIERE ARCHITETTONICHE",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190730.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "50000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/4igruea769_05322",
        "lat": "43,5830655",
        "lng": "13,1690011",
        "coordinate": {
            "lat": "43,5830655",
            "lng": "13,1690011"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "4IGRUEC060_01660",
        "ocSintesiProgetto": "ADEGUAMENTO ALLE NORMATIVE ANTINCENDIO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191009.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "33780,83",
        "totPagamenti": "33327,99",
        "ocLink": "www.opencoesione.gov.it\/progetti\/4igruec060_01660",
        "lat": "43,4871213",
        "lng": "13,145121",
        "coordinate": {
            "lat": "43,4871213",
            "lng": "13,145121"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "4IGRUEC100_06288",
        "ocSintesiProgetto": "LAVORI DI EFFICIENTAMENTO ENERGETICO MEDIANTE SOSTITUZIONE DELLA TAMPONATURA ESTERNA DEL PALAZZETTO DELLO SPORT SITO IN PIAZZALE OLIMPIA DEL COMUNE DI CASTELFIDARDO",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191029.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "177879,52",
        "totPagamenti": "177879,52",
        "ocLink": "www.opencoesione.gov.it\/progetti\/4igruec100_06288",
        "lat": "43,4631153",
        "lng": "13,5514218",
        "coordinate": {
            "lat": "43,4631153",
            "lng": "13,5514218"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "4IGRUEF600_01398",
        "ocSintesiProgetto": "MANUTENZIONE STRAORDINARIA PER EFFICIENTAMENTO ENERGETICO DELL'IMPIANTO TERMICO DELLA SALA POLIVALENTE DI VIA BRUNO BUOZZI N. 9",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190920.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "49684,44",
        "totPagamenti": "49143,22",
        "ocLink": "www.opencoesione.gov.it\/progetti\/4igruef600_01398",
        "lat": "43,4815672",
        "lng": "13,1385238",
        "coordinate": {
            "lat": "43,4815672",
            "lng": "13,1385238"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "4IGRUEF634_02665",
        "ocSintesiProgetto": "EFFICIENTAMENTO ILLUMINAZIONE CON SOSTITUZIONE DEI PROIETTORI CON NUOVA TECNOLOGIA LED",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21864,80",
        "totPagamenti": "21718,52",
        "ocLink": "www.opencoesione.gov.it\/progetti\/4igruef634_02665",
        "lat": "43,6006049",
        "lng": "13,2721197",
        "coordinate": {
            "lat": "43,6006049",
            "lng": "13,2721197"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "4IGRUEF634_02943",
        "ocSintesiProgetto": "SOSTITUZIONE DI SISTEMI PER LA CLIMATIZZAZIONE (CALDO FREDDO) CON TECNOLOGIE AD ALTA EFFICIENZA E SOSTITUZIONE E INSTALLAZIONE DI POMPE CALORE E GRUPPI FRIGO PI\u00c3\u0099 EFFICIENTI DI QUELLI INSTALLATI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20190902.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46425,41",
        "totPagamenti": "46317,57",
        "ocLink": "www.opencoesione.gov.it\/progetti\/4igruef634_02943",
        "lat": "43,6006049",
        "lng": "13,2721197",
        "coordinate": {
            "lat": "43,6006049",
            "lng": "13,2721197"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11940",
        "ocSintesiProgetto": "CODICE PROGETTO: 11940 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11940",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11944",
        "ocSintesiProgetto": "CODICE PROGETTO: 11944 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING CECILIA GOBBI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "13285,80",
        "totPagamenti": "13285,80",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11944",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11974",
        "ocSintesiProgetto": "CODICE PROGETTO: 11974 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING  SAURO SCORTICHINI",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20161107.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3660,00",
        "totPagamenti": "3660,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11974",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11983",
        "ocSintesiProgetto": "CODICE PROGETTO: 11983 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161005.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2440,00",
        "totPagamenti": "2440,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11983",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11985",
        "ocSintesiProgetto": "CODICE PROGETTO: 11985 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "14640,00",
        "totPagamenti": "14640,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11985",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11986",
        "ocSintesiProgetto": "CODICE PROGETTO: 11986 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161004.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "totPagamenti": "18300,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11986",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11988",
        "ocSintesiProgetto": "CODICE PROGETTO: 11988 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20161004.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "totPagamenti": "48678,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11988",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11989",
        "ocSintesiProgetto": "CODICE PROGETTO: 11989 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "totPagamenti": "6100,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11989",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11994",
        "ocSintesiProgetto": "CODICE PROGETTO: 11994 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36600,00",
        "totPagamenti": "36600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11994",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11996",
        "ocSintesiProgetto": "CODICE PROGETTO: 11996 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "totPagamenti": "6100,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11996",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11997",
        "ocSintesiProgetto": "CODICE PROGETTO: 11997 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "9760,00",
        "totPagamenti": "9760,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11997",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA11998",
        "ocSintesiProgetto": "CODICE PROGETTO: 11998 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "23180,00",
        "totPagamenti": "23180,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma11998",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA12015",
        "ocSintesiProgetto": "CODICE PROGETTO: 12015 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma12015",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA12016",
        "ocSintesiProgetto": "CODICE PROGETTO: 12016 - DGR N. 450\/2016-POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2  DESTINAZIONEMARCHE \u00c2  THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING   MARTA PARAVENTI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84399,05",
        "totPagamenti": "84399,05",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma12016",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA13790",
        "ocSintesiProgetto": "CODICE PROGETTO: 13790 - ACQUISIZIONE MEDIANTE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEL SERVIZIO DI  PERSONALIZZAZIONE DEL SOFTWARE PER IL POTENZIAMENTO DEL SISTEMA INFORMATIVO PER  IL TURISTA E DEL BOOKING ON LINE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43920,00",
        "totPagamenti": "43918,78",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma13790",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14277",
        "ocSintesiProgetto": "CODICE PROGETTO: 14277 - ACQUISIZIONE MEDIANTE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEL SERVIZIO DI  PERSONALIZZAZIONE DEL SOFTWARE, FORMAZIONE E POPOLAMENTO DATI PER LA  RILEVAZIONE DEI FLUSSI TURISTICI",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20180222.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "16080,00",
        "totPagamenti": "16078,78",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14277",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14467",
        "ocSintesiProgetto": "CODICE PROGETTO: 14467 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) DEL SERVIZIO DI INSERZIONI PUBBLICITARIE DELLA MOSTRA \"LA DEVOTA BELLEZZA\" SOCIET\u00c3\u00a0 A.MANZONI SPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171110.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40000,00",
        "totPagamenti": "39999,99",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14467",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14552",
        "ocSintesiProgetto": "CODICE PROGETTO: 14552 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) DEL SERVIZIO DI INSERZIONI PUBBLICITARIE DELLA MOSTRA \"LA DEVOTA BELLEZZA\" SOCIET\u00c3\u00a0 SPEED SPA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171110.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "totPagamenti": "30000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14552",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14922",
        "ocSintesiProgetto": "COMUNE DI CORINALDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20161109.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1281653,93",
        "totPagamenti": "766268,27",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14922",
        "lat": "43,6488939",
        "lng": "13,0472908",
        "coordinate": {
            "lat": "43,6488939",
            "lng": "13,0472908"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14989",
        "ocSintesiProgetto": "CODICE PROGETTO: 14989 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171229.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30100,00",
        "totPagamenti": "29689,96",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14989",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14990",
        "ocSintesiProgetto": "CODICE PROGETTO: 14990 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171227.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24000,00",
        "totPagamenti": "24000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14990",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14991",
        "ocSintesiProgetto": "CODICE PROGETTO: 14991 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171213.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5000,00",
        "totPagamenti": "5000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14991",
        "lat": "43,6015272",
        "lng": "13,5023602",
        "coordinate": {
            "lat": "43,6015272",
            "lng": "13,5023602"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14992",
        "ocSintesiProgetto": "CODICE PROGETTO: 14992 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171214.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "totPagamenti": "30000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14992",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA14993",
        "ocSintesiProgetto": "CODICE PROGETTO: 14993 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46702,00",
        "totPagamenti": "46701,99",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma14993",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15005",
        "ocSintesiProgetto": "CODICE PROGETTO: 15005 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171230.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5000,00",
        "totPagamenti": "5000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15005",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15007",
        "ocSintesiProgetto": "CODICE PROGETTO: 15007 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171221.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "65000,00",
        "totPagamenti": "63557,52",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15007",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15018",
        "ocSintesiProgetto": "CODICE PROGETTO: 15018 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3000,00",
        "totPagamenti": "3000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15018",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15020",
        "ocSintesiProgetto": "CODICE PROGETTO: 15020 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36600,00",
        "totPagamenti": "36600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15020",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15021",
        "ocSintesiProgetto": "DGR N. 1143\/2015 - DGR 44\/2018 - D. LGS. 50\/2016 ART.36 COMMA 2 LETTERA A). ACQUISIZIONE TRAMITE TRATTATIVA DIRETTA ALL\u00c2\u00bfINTERNO DEL MEPA DEI SERVIZI DI UFFICIO STAMPA PER IL PROGETTO MOSTRARE LE MARCHE ANNO 2018- \u00c2\u0082\u00ac 20.000,00 (IVA ESCLUSA) \u00c2\u00bf CAP. 2070210026 \u00c2\u00bf 2070210027 \u00c2\u00bf 2070210028 - POR MARCHE FESR 2014-2020, BIL. 2018-2020 ANNUALIT\u00c3\u00a0 2018. SMART CIG Z78220C0F6 \u00c2\u00bf CUP B79H18000040009",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24290,00",
        "totPagamenti": "24278,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15021",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15022",
        "ocSintesiProgetto": "CODICE PROGETTO: 15022 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48788,00",
        "totPagamenti": "48069,10",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15022",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15023",
        "ocSintesiProgetto": "CODICE PROGETTO: 15023 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "20800,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15023",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15024",
        "ocSintesiProgetto": "CODICE PROGETTO: 15024 - DGR N. 1108\/2017 \u00c2  D.A. 64\/2017 - POR FESR MARCHE 2014-2020 ASSE 6 AZIONE 17.1 DESTINAZIONE MARCHE - PARTECIPAZIONE FIERE ENIT 2017 -TORBIDONI",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "160500,01",
        "totPagamenti": "160500,01",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15024",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15031",
        "ocSintesiProgetto": "CODICE PROGETTO: 15031 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "161731,74",
        "totPagamenti": "161731,74",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15031",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15032",
        "ocSintesiProgetto": "CODICE PROGETTO: 15032 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48312,00",
        "totPagamenti": "48312,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15032",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15033",
        "ocSintesiProgetto": "CODICE PROGETTO: 15033 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47214,00",
        "totPagamenti": "47153,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15033",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15035",
        "ocSintesiProgetto": "CODICE PROGETTO: 15035 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45750,00",
        "totPagamenti": "45750,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15035",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15041",
        "ocSintesiProgetto": "CODICE PROGETTO: 15041 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 VALORIZZAZIONE DEI LUOGHI E DEI PERCORSI DELLA CIVILT\u00c3\u00a0 PICENA - RIQUALIFICAZIONE DELL`ANTIQUARIUM - NUMANA",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180410.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "totPagamenti": "149957,94",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15041",
        "lat": "43,5132966",
        "lng": "13,620969",
        "coordinate": {
            "lat": "43,5132966",
            "lng": "13,620969"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15042",
        "ocSintesiProgetto": "CODICE PROGETTO: 15042 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "65875,43",
        "totPagamenti": "65875,43",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15042",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15046",
        "ocSintesiProgetto": "CODICE PROGETTO: 15046 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "totPagamenti": "48190,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15046",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15047",
        "ocSintesiProgetto": "CODICE PROGETTO: 15047 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48739,00",
        "totPagamenti": "48739,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15047",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15049",
        "ocSintesiProgetto": "CODICE PROGETTO: 15049 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46360,00",
        "totPagamenti": "46360,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15049",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15050",
        "ocSintesiProgetto": "CODICE PROGETTO: 15050 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47018,80",
        "totPagamenti": "47018,80",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15050",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15051",
        "ocSintesiProgetto": "CODICE PROGETTO: 15051 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "13200,40",
        "totPagamenti": "13200,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15051",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15054",
        "ocSintesiProgetto": "CODICE PROGETTO: 15054 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - RECCHI STEFANO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47464,76",
        "totPagamenti": "47092,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15054",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15083",
        "ocSintesiProgetto": "CODICE PROGETTO: 15083 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "166805,60",
        "totPagamenti": "166805,60",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15083",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15220",
        "ocSintesiProgetto": "CODICE PROGETTO: 15220 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "103754,75",
        "totPagamenti": "91246,68",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15220",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15221",
        "ocSintesiProgetto": "CODICE PROGETTO: 15221 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30507,50",
        "totPagamenti": "30507,50",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15221",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15222",
        "ocSintesiProgetto": "CODICE PROGETTO: 15222 - DGR N. 253\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20171017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "146400,00",
        "totPagamenti": "146400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15222",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15241",
        "ocSintesiProgetto": "CODICE PROGETTO: 15241 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MAZZINI ALBERTO TERSINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "212566,50",
        "totPagamenti": "205528,68",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15241",
        "lat": "43,6022012",
        "lng": "13,4973851",
        "coordinate": {
            "lat": "43,6022012",
            "lng": "13,4973851"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15317",
        "ocSintesiProgetto": "CODICE PROGETTO: 15317 - ACQUISIZIONE MEDIANTE AFFIDAMENTO DIRETTO FUORI MEPA (ART. 63 C.2, LETTERA B,  PUNTO 3 DEL D.LGS 50\/2016) AREA STAND PREALLESTITO PERSONALIZZATO E SERVIZI, IN RELAZIONE ALLA PARTECIPAZIONE DELLA REGIONE MARCHE ALLA FIERA 2017-54\u00c2\u00b0 INTERNATIONAL TOURISM MARKEPLACE",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "146515,90",
        "totPagamenti": "146515,90",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15317",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA15557",
        "ocSintesiProgetto": "CODICE PROGETTO: 15557 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20160101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "35990,00",
        "totPagamenti": "35990,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma15557",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16315",
        "ocSintesiProgetto": "CODICE PROGETTO: 16315 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 VALORIZZAZIONE DEI LUOGHI E DEI PERCORSI DELLA CIVILT\u00c3\u00a0 PICENA - AREA ARCHEOLOGICA \"I PINI\" - SIROLO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180829.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "99425,51",
        "totPagamenti": "86695,93",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16315",
        "lat": "43,5195361",
        "lng": "13,6179025",
        "coordinate": {
            "lat": "43,5195361",
            "lng": "13,6179025"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16390",
        "ocSintesiProgetto": "COMUNE DI SASSOFERRATO",
        "ocStatoProgetto": "Non avviato",
        "ocDataInizioProgetto": 20170525.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16390",
        "lat": "43,4312125",
        "lng": "12,8573026",
        "coordinate": {
            "lat": "43,4312125",
            "lng": "12,8573026"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16392",
        "ocSintesiProgetto": "CODICE PROGETTO: 16392 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46238,00",
        "totPagamenti": "46238,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16392",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16395",
        "ocSintesiProgetto": "CODICE PROGETTO: 16395 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36478,00",
        "totPagamenti": "36478,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16395",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16396",
        "ocSintesiProgetto": "CODICE PROGETTO: 16396 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16396",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16402",
        "ocSintesiProgetto": "CODICE PROGETTO: 16402 - POR FESR 2014\/2020 - ASSE 6, AZIONE 16.2 \"REALIZZAZIONE DI INTERVENTI RIVOLTI AL MIGLIORAMENTO DELLA FUNZIONE ED AL POTENZIAMENTO DEI CANALI DI ACCESSO E DI DIVULGAZIONE DELLA CONOSCENZA DEL PATRIMONIO CULTURALE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180522.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "98656,00",
        "totPagamenti": "64743,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16402",
        "lat": "43,6167855",
        "lng": "13,5188848",
        "coordinate": {
            "lat": "43,6167855",
            "lng": "13,5188848"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16412",
        "ocSintesiProgetto": "CODICE PROGETTO: 16412 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  VALORIZZAZIONE DEI LUOGHI, DELLE ATTIVIT\u00c3\u00a0 E DELLE FONTI DOCUMENTARIE LEGATE ALLA FISARMONICA ED ALLA SUA PRODUZIONE ARTISTICA ED ARTIGIANALE - CASTELFIDARDO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180716.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "150000,00",
        "totPagamenti": "63413,40",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16412",
        "lat": "43,4644804",
        "lng": "13,546319",
        "coordinate": {
            "lat": "43,4644804",
            "lng": "13,546319"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16467",
        "ocSintesiProgetto": "CODICE PROGETTO: 16467 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20181022.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "96864,89",
        "totPagamenti": "95657,09",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16467",
        "lat": "43,50787",
        "lng": "13,6215113",
        "coordinate": {
            "lat": "43,50787",
            "lng": "13,6215113"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16573",
        "ocSintesiProgetto": "CODICE PROGETTO: 16573 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "37865,36",
        "totPagamenti": "37856,36",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16573",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16596",
        "ocSintesiProgetto": "CODICE PROGETTO: 16596 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  TEATRO ALL`APERTO E MUSEO DEL ROSARIO - \"BASTIONE DI PORTA MARINA\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "375000,00",
        "totPagamenti": "164422,98",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16596",
        "lat": "43,4410768",
        "lng": "13,61017",
        "coordinate": {
            "lat": "43,4410768",
            "lng": "13,61017"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16938",
        "ocSintesiProgetto": "CODICE PROGETTO: 16938 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20181203.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "51340,30",
        "totPagamenti": "50754,70",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16938",
        "lat": "43,6231554",
        "lng": "13,3937027",
        "coordinate": {
            "lat": "43,6231554",
            "lng": "13,3937027"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16945",
        "ocSintesiProgetto": "CODICE PROGETTO: 16945 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180910.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "32771,00",
        "totPagamenti": "32251,94",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16945",
        "lat": "43,5195361",
        "lng": "13,6179025",
        "coordinate": {
            "lat": "43,5195361",
            "lng": "13,6179025"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16953",
        "ocSintesiProgetto": "CODICE PROGETTO: 16953 - REGIONE MARCHE POR FESR 2014\/2020 - ASSE 6 - AZIONE 16.2.2 \"PROGETTO WIFI SPIAGGE MARCHE\"",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180914.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "28852,00",
        "totPagamenti": "27048,33",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16953",
        "lat": "43,6626136",
        "lng": "13,3196604",
        "coordinate": {
            "lat": "43,6626136",
            "lng": "13,3196604"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16982",
        "ocSintesiProgetto": "CODICE PROGETTO: 16982 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  RISTRUTTURAZIONE AREA INTERNA ED ESTERNA - \"BASTIONE SANGALLO\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181030.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "365000,00",
        "totPagamenti": "132317,67",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16982",
        "lat": "43,4400679",
        "lng": "13,606699",
        "coordinate": {
            "lat": "43,4400679",
            "lng": "13,606699"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16991",
        "ocSintesiProgetto": "CODICE PROGETTO: 16991 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  CATALOGAZIONE ARCHIVIO STORICO - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181030.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "totPagamenti": "27938,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16991",
        "lat": "43,4400679",
        "lng": "13,606699",
        "coordinate": {
            "lat": "43,4400679",
            "lng": "13,606699"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16994",
        "ocSintesiProgetto": "CODICE PROGETTO: 16994 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "10351,07",
        "totPagamenti": "10351,07",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16994",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16995",
        "ocSintesiProgetto": "CODICE PROGETTO: 16995 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48556,00",
        "totPagamenti": "48556,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16995",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA16996",
        "ocSintesiProgetto": "CODICE PROGETTO: 16996 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15000,00",
        "totPagamenti": "15000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma16996",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17015",
        "ocSintesiProgetto": "CODICE PROGETTO: 17015 - POR FESR 20142020 - ASSE 6. AZIONE 16.1 ACCESSO PEDONALE \"CANTINE BRAMANTESCHE\" - LORETO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181112.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30000,00",
        "totPagamenti": "2499,77",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17015",
        "lat": "43,4404369",
        "lng": "13,6083401",
        "coordinate": {
            "lat": "43,4404369",
            "lng": "13,6083401"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17041",
        "ocSintesiProgetto": "CODICE PROGETTO: 17041 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "478450,84",
        "totPagamenti": "478450,84",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17041",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17136",
        "ocSintesiProgetto": "CODICE PROGETTO: 17136 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45277,00",
        "totPagamenti": "45277,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17136",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17489",
        "ocSintesiProgetto": "CODICE PROGETTO: 17489 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "4758,00",
        "totPagamenti": "4758,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17489",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17557",
        "ocSintesiProgetto": "CODICE PROGETTO: 17557 - AZIONE 17.1.3. 1 \u00c2\u00bfI CAMMINI LAURETANI\u00c2\u00bf",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "200000,00",
        "totPagamenti": "54033,56",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17557",
        "lat": "43,4403063",
        "lng": "13,6076647",
        "coordinate": {
            "lat": "43,4403063",
            "lng": "13,6076647"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17587",
        "ocSintesiProgetto": "CODICE PROGETTO: 17587 - DGR N. 1108\/2017 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2017",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45689,00",
        "totPagamenti": "45232,11",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17587",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17594",
        "ocSintesiProgetto": "CODICE PROGETTO: 17594 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12200,00",
        "totPagamenti": "12200,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17594",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17608",
        "ocSintesiProgetto": "CODICE PROGETTO: 17608 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "176352,26",
        "totPagamenti": "176352,25",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17608",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17619",
        "ocSintesiProgetto": "CODICE PROGETTO: 17619 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "176900,00",
        "totPagamenti": "175131,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17619",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17648",
        "ocSintesiProgetto": "CODICE PROGETTO: 17648 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47104,20",
        "totPagamenti": "47104,20",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17648",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17649",
        "ocSintesiProgetto": "CODICE PROGETTO: 17649 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "676931,52",
        "totPagamenti": "676931,52",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17649",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17832",
        "ocSintesiProgetto": "CODICE PROGETTO: 17832 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "37454,00",
        "totPagamenti": "37454,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17832",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17839",
        "ocSintesiProgetto": "CODICE PROGETTO: 17839 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "totPagamenti": "36234,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17839",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17840",
        "ocSintesiProgetto": "CODICE PROGETTO: 17840 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48312,00",
        "totPagamenti": "48312,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17840",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17845",
        "ocSintesiProgetto": "CODICE PROGETTO: 17845 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "219600,00",
        "totPagamenti": "219600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17845",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17854",
        "ocSintesiProgetto": "CODICE PROGETTO: 17854 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "761931,92",
        "totPagamenti": "761931,92",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17854",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17856",
        "ocSintesiProgetto": "CODICE PROGETTO: 17856 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "213500,00",
        "totPagamenti": "213500,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17856",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17857",
        "ocSintesiProgetto": "CODICE PROGETTO: 17857 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MAZZINI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "77470,00",
        "totPagamenti": "77470,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17857",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17858",
        "ocSintesiProgetto": "CODICE PROGETTO: 17858 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "128100,00",
        "totPagamenti": "126819,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17858",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17863",
        "ocSintesiProgetto": "CODICE PROGETTO: 17863 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "85400,00",
        "totPagamenti": "84546,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17863",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17864",
        "ocSintesiProgetto": "CODICE PROGETTO: 17864 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "totPagamenti": "48190,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17864",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17865",
        "ocSintesiProgetto": "CODICE PROGETTO: 17865 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40872,44",
        "totPagamenti": "40872,44",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17865",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17873",
        "ocSintesiProgetto": "CODICE PROGETTO: 17873 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "totPagamenti": "36234,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17873",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17895",
        "ocSintesiProgetto": "CODICE PROGETTO: 17895 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "186523,52",
        "totPagamenti": "186523,52",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17895",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17903",
        "ocSintesiProgetto": "CODICE PROGETTO: 17903 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "30324,61",
        "totPagamenti": "30324,61",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17903",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17938",
        "ocSintesiProgetto": "CODICE PROGETTO: 17938 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "74742,77",
        "totPagamenti": "74742,77",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17938",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17962",
        "ocSintesiProgetto": "CODICE PROGETTO: 17962 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "45232,11",
        "totPagamenti": "45232,11",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17962",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17988",
        "ocSintesiProgetto": "CODICE PROGETTO: 17988 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42151,00",
        "totPagamenti": "42151,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17988",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17993",
        "ocSintesiProgetto": "CODICE PROGETTO: 17993 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48191,22",
        "totPagamenti": "48191,22",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17993",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA17996",
        "ocSintesiProgetto": "CODICE PROGETTO: 17996 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1.2 - IRENE MANZI - 2018",
        "ocStatoProgetto": "Liquidato",
        "ocDataInizioProgetto": 20181113.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46970,00",
        "totPagamenti": "46970,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma17996",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18059",
        "ocSintesiProgetto": "CODICE PROGETTO: 18059 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42517,00",
        "totPagamenti": "42517,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18059",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18076",
        "ocSintesiProgetto": "CODICE PROGETTO: 18076 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "totPagamenti": "24278,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18076",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18084",
        "ocSintesiProgetto": "CODICE PROGETTO: 18084 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "90280,00",
        "totPagamenti": "90280,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18084",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18098",
        "ocSintesiProgetto": "CODICE PROGETTO: 18098 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21660,00",
        "totPagamenti": "21660,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18098",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18114",
        "ocSintesiProgetto": "CODICE PROGETTO: 18114 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "74742,77",
        "totPagamenti": "74742,77",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18114",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18124",
        "ocSintesiProgetto": "CODICE PROGETTO: 18124 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21660,00",
        "totPagamenti": "21660,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18124",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18134",
        "ocSintesiProgetto": "CODICE PROGETTO: 18134 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "84546,00",
        "totPagamenti": "84546,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18134",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18139",
        "ocSintesiProgetto": "CODICE PROGETTO: 18139 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "totPagamenti": "48190,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18139",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18143",
        "ocSintesiProgetto": "CODICE PROGETTO: 18143 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18143",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18162",
        "ocSintesiProgetto": "CODICE PROGETTO: 18162 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "totPagamenti": "24278,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18162",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18163",
        "ocSintesiProgetto": "CODICE PROGETTO: 18163 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "totPagamenti": "19900,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18163",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18172",
        "ocSintesiProgetto": "CODICE PROGETTO: 18172 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61000,00",
        "totPagamenti": "61000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18172",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18173",
        "ocSintesiProgetto": "CODICE PROGETTO: 18173 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38649,60",
        "totPagamenti": "38649,60",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18173",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18174",
        "ocSintesiProgetto": "CODICE PROGETTO: 18174 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "totPagamenti": "24278,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18174",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18177",
        "ocSintesiProgetto": "CODICE PROGETTO: 18177 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24278,00",
        "totPagamenti": "24278,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18177",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18179",
        "ocSintesiProgetto": "CODICE PROGETTO: 18179 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "29816,00",
        "totPagamenti": "29816,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18179",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18181",
        "ocSintesiProgetto": "CODICE PROGETTO: 18181 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48676,99",
        "totPagamenti": "48676,99",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18181",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18188",
        "ocSintesiProgetto": "CODICE PROGETTO: 18188 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "25235,70",
        "totPagamenti": "25235,70",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18188",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18193",
        "ocSintesiProgetto": "CODICE PROGETTO: 18193 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "9028,00",
        "totPagamenti": "9028,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18193",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18239",
        "ocSintesiProgetto": "CODICE PROGETTO: 18239 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - MARTA PARAVENTI - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97600,00",
        "totPagamenti": "97600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18239",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18240",
        "ocSintesiProgetto": "CODICE PROGETTO: 18240 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48800,00",
        "totPagamenti": "48800,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18240",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18294",
        "ocSintesiProgetto": "CODICE PROGETTO: 18294 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "682894,97",
        "totPagamenti": "682894,97",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18294",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18296",
        "ocSintesiProgetto": "CODICE PROGETTO: 18296 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "182878,00",
        "totPagamenti": "182878,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18296",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18333",
        "ocSintesiProgetto": "CODICE PROGETTO: 18333 - POR MARCHE FESR 2014\/2020 - ASSE 6 - AZIONE 17.1.3 - \"VALORIZZAZIONE TURISTICA DEI CLUSTER ATTRAVERSO INTERVENTI DI QUALIFICAZIONE DEI PRODOTTI E DEI TERRITORI\" - MARCHIO DI QUALIT\u00c3\u00a0 DELLE STRUTTURE RICETTIVE \"OSPITALIT\u00c3\u00a0 ITALIANA - REGIONE MARCHE\" - ANNO 2019\/2020",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190903.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "40000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18333",
        "lat": "43,6167855",
        "lng": "13,5188848",
        "coordinate": {
            "lat": "43,6167855",
            "lng": "13,5188848"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18359",
        "ocSintesiProgetto": "CODICE PROGETTO: 18359 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "38610,00",
        "totPagamenti": "38610,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18359",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18363",
        "ocSintesiProgetto": "CODICE PROGETTO: 18363 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "totPagamenti": "5962,75",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18363",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18370",
        "ocSintesiProgetto": "CODICE PROGETTO: 18370 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "47946,00",
        "totPagamenti": "47946,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18370",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18376",
        "ocSintesiProgetto": "CODICE PROGETTO: 18376 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "3261,06",
        "totPagamenti": "3261,06",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18376",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18394",
        "ocSintesiProgetto": "CODICE PROGETTO: 18394 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43432,00",
        "totPagamenti": "43432,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18394",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18398",
        "ocSintesiProgetto": "CODICE PROGETTO: 18398 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18117,00",
        "totPagamenti": "18117,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18398",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18400",
        "ocSintesiProgetto": "CODICE PROGETTO: 18400 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7015,00",
        "totPagamenti": "7015,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18400",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18412",
        "ocSintesiProgetto": "CODICE PROGETTO: 18412 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "31402,80",
        "totPagamenti": "31402,80",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18412",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18413",
        "ocSintesiProgetto": "CODICE PROGETTO: 18413 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12276,25",
        "totPagamenti": "12276,25",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18413",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18419",
        "ocSintesiProgetto": "CODICE PROGETTO: 18419 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "8838,90",
        "totPagamenti": "8838,90",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18419",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18421",
        "ocSintesiProgetto": "CODICE PROGETTO: 18421 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39650,00",
        "totPagamenti": "39650,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18421",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18424",
        "ocSintesiProgetto": "CODICE PROGETTO: 18424 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - MANZI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5978,00",
        "totPagamenti": "5978,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18424",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18471",
        "ocSintesiProgetto": "CODICE PROGETTO: 18471 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "34207,89",
        "totPagamenti": "34207,89",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18471",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18484",
        "ocSintesiProgetto": "CODICE PROGETTO: 18484 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "61989,48",
        "totPagamenti": "8040,07",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18484",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18494",
        "ocSintesiProgetto": "CODICE PROGETTO: 18494 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "66702,70",
        "totPagamenti": "66702,70",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18494",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18580",
        "ocSintesiProgetto": "CODICE PROGETTO: 18580 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18580",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18620",
        "ocSintesiProgetto": "CODICE PROGETTO: 18620 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - PARAVENTI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97600,00",
        "totPagamenti": "97600,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18620",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA18844",
        "ocSintesiProgetto": "CODICE PROGETTO: 18844 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - *individuo* - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5040,43",
        "totPagamenti": "5040,43",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma18844",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19051",
        "ocSintesiProgetto": "CODICE PROGETTO: 19051 - POR FESR 20142020 - ASSE 6. AZIONE 16.1  VALORIZZAZIONE DELLA TRADIZIONE OPIFICIA LOCALE CON PARTICOLARE RIFERIMENTO ALLA MUSICA E AGLI STRUMENTI MUSICALI - CAMERANO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190311.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "100000,00",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19051",
        "lat": "43,5301043",
        "lng": "13,5523002",
        "coordinate": {
            "lat": "43,5301043",
            "lng": "13,5523002"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19303",
        "ocSintesiProgetto": "CODICE PROGETTO: 19303 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48678,00",
        "totPagamenti": "48678,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19303",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19346",
        "ocSintesiProgetto": "CODICE PROGETTO: 19346 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 29.1 -INTERVENTO 29.1.1 -INTERVENTI DI VALORIZZAZIONE E MESSA IN RETE DEL PATRIMONIO CULTURALE, MATERIALE E IMMATERIALE, NELLE AREE DI ATTRAZIONE DI RILEVANZA STRATEGICA TALI DA CONSOLIDARE E PROMUOVERE PROCESSI DI SVILUPPO",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190503.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48777,07",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19346",
        "lat": "43,3361195",
        "lng": "12,905113",
        "coordinate": {
            "lat": "43,3361195",
            "lng": "12,905113"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19372",
        "ocSintesiProgetto": "CODICE PROGETTO: 19372 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "5040,43",
        "totPagamenti": "5040,43",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19372",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19373",
        "ocSintesiProgetto": "CODICE PROGETTO: 19373 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18208,50",
        "totPagamenti": "18208,50",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19373",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19374",
        "ocSintesiProgetto": "CODICE PROGETTO: 19374 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "39900,00",
        "totPagamenti": "39900,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19374",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19375",
        "ocSintesiProgetto": "CODICE PROGETTO: 19375 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12444,00",
        "totPagamenti": "12444,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19375",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19379",
        "ocSintesiProgetto": "CODICE PROGETTO: 19379 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "15616,00",
        "totPagamenti": "15616,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19379",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19380",
        "ocSintesiProgetto": "CODICE PROGETTO: 19380 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "46360,00",
        "totPagamenti": "46360,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19380",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19381",
        "ocSintesiProgetto": "CODICE PROGETTO: 19381 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19381",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19382",
        "ocSintesiProgetto": "CODICE PROGETTO: 19382 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "12139,00",
        "totPagamenti": "12139,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19382",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19383",
        "ocSintesiProgetto": "CODICE PROGETTO: 19383 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "4880,00",
        "totPagamenti": "4880,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19383",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19384",
        "ocSintesiProgetto": "CODICE PROGETTO: 19384 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "totPagamenti": "18300,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19384",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19385",
        "ocSintesiProgetto": "CODICE PROGETTO: 19385 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "24400,00",
        "totPagamenti": "24400,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19385",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19465",
        "ocSintesiProgetto": "CODICE PROGETTO: 19465 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "97842,51",
        "totPagamenti": "97842,50",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19465",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19467",
        "ocSintesiProgetto": "CODICE PROGETTO: 19467 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "273750,84",
        "totPagamenti": "273750,84",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19467",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19478",
        "ocSintesiProgetto": "CODICE PROGETTO: 19478 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "180560,00",
        "totPagamenti": "180560,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19478",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19516",
        "ocSintesiProgetto": "CODICE PROGETTO: 19516 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "43310,00",
        "totPagamenti": "43310,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19516",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA19521",
        "ocSintesiProgetto": "CODICE PROGETTO: 19521 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "31110,00",
        "totPagamenti": "31110,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma19521",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA33690",
        "ocSintesiProgetto": "CODICE PROGETTO: 33690 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - TORBIDONI VALENTINO - 2018",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "6100,00",
        "totPagamenti": "6100,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma33690",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA33881",
        "ocSintesiProgetto": "CODICE PROGETTO: 33881 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "7190,68",
        "totPagamenti": "7190,68",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma33881",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA36235",
        "ocSintesiProgetto": "CODICE PROGETTO: 36235 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21106,00",
        "totPagamenti": "21106,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma36235",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA36403",
        "ocSintesiProgetto": "CODICE PROGETTO: 36403 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20191017.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "19154,00",
        "totPagamenti": "19154,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma36403",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA44994",
        "ocSintesiProgetto": "CODICE PROGETTO: 44994 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "228262,00",
        "totPagamenti": "228262,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma44994",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45013",
        "ocSintesiProgetto": "CODICE PROGETTO: 45013 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "19154,00",
        "totPagamenti": "19154,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45013",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45014",
        "ocSintesiProgetto": "CODICE PROGETTO: 45014 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "21106,00",
        "totPagamenti": "21106,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45014",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45015",
        "ocSintesiProgetto": "CODICE PROGETTO: 45015 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "62830,00",
        "totPagamenti": "62830,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45015",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45022",
        "ocSintesiProgetto": "CODICE PROGETTO: 45022 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48190,00",
        "totPagamenti": "48190,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45022",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45038",
        "ocSintesiProgetto": "CODICE PROGETTO: 45038 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "55000,00",
        "totPagamenti": "55000,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45038",
        "lat": "43,6098591",
        "lng": "13,5091686",
        "coordinate": {
            "lat": "43,6098591",
            "lng": "13,5091686"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45070",
        "ocSintesiProgetto": "CODICE PROGETTO: 45070 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "48191,22",
        "totPagamenti": "48191,22",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45070",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45077",
        "ocSintesiProgetto": "CODICE PROGETTO: 45077 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - TORBIDONI (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "42700,00",
        "totPagamenti": "42700,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45077",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45231",
        "ocSintesiProgetto": "CODICE PROGETTO: 45231 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "36234,00",
        "totPagamenti": "36234,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45231",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45240",
        "ocSintesiProgetto": "CODICE PROGETTO: 45240 - POR MARCHE FESR 2014\/2020 \u00c2\u00bfASSE 8 \u00c2\u00bfAZIONE 30.1 -INTERVENTO 30.1.1 \" DESTINAZIONEMARCHE-THE IDEAL PLACE FOR A BETTER LIFE. AZIONI DI DESTINATION MARKETING\" - APPROVAZIONE ATTIVIT\u00c3\u00a0 DI MARKETING E PROMOZIONE DEL BRAND MARCHE E DEI CLUSTER TURISTICI PER IL BIENNIO 2019\/2020 - LANARI  (DGR 829\/2018)",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "54899,98",
        "totPagamenti": "54899,98",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45240",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "5MA45242",
        "ocSintesiProgetto": "CODICE PROGETTO: 45242 - DGR N. 44\/2018 - POR MARCHE FESR 2014-2020 ASSE 6 AZIONE 17.1 - LANARI CLAUDIA - 2019\/2020\/21",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "18300,00",
        "totPagamenti": "18300,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/5ma45242",
        "lat": "43,6101964",
        "lng": "13,5093069",
        "coordinate": {
            "lat": "43,6101964",
            "lng": "13,5093069"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7MAPRATT15551",
        "ocSintesiProgetto": "GLI INTERVENTI SI PREFIGGONO DI MIGLIORARE LA FRUIBILITA IMPIANTO E ADEGUAMENTO NORMATIVO ALLA PREVENZIONE INCENDI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181219.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "86321,25",
        "totPagamenti": null,
        "ocLink": "www.opencoesione.gov.it\/progetti\/7mapratt15551",
        "lat": "43,530777",
        "lng": "13,552923",
        "coordinate": {
            "lat": "43,530777",
            "lng": "13,552923"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7VE10042741",
        "ocSintesiProgetto": "REMEMBER OVERALL OBJECTIVE IS TO PROMOTE THE SHIFT TOWARD SUSTAINABLE TOURISM AND BLUE GROWTH IN THE PROGRAMME AREA THROUGH THE VALORISATION OF THE IMPORTANT MARITIME CULTURAL HERITAGE OF 8 ADRIATIC ITALIAN AND CROATIAN PORTS SITES - ANCONA, VENICE, TRIESTE, RAVENNA, RIJEKA, ZADAR, DUBROVNIK, SPLIT - OF WHICH 4 ARE UNESCO SITES, AS A DRIVER FOR MORE COMPETITIVE AND BALANCED DEVELOPMENT PATHS. THE JOINT VALORISATION BY THE 10 PROJECT PARTNERS, WITH CROSS-CUTTING COMPETENCES AND MULTIDISCIPLINARY EXPERIENCES, OF TANGIBLE AND INTANGIBLE CULTURAL HERITAGE IS EXPECTED TO ENHANCE THE CAPACITY OF INVOLVED TERRITORIES TO GENERATE ADDED VALUE FROM THE FULL EXPLOITATION OF THE CULTURAL ASSET AND FROM ITS INTEGRATION IN THE CULTURAL, TOURISM AND SOCIAL POLICIES. REMEMBER PROJECT AIMS ALSO TO INCREASE THE ATTRACTIVENESS OF LOCAL ECONOMIES THROUGH THE USE OF ICT FOR THE DIGITALIZATION OF CULTURAL CONTENTS, DIFFERENTIATE THE TOURISTIC OFFER TO REDUCE THE TOURISM SEASONALITY, AND CREATE NEW AND QUALI",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2813460,00",
        "totPagamenti": "453077,02",
        "ocLink": "www.opencoesione.gov.it\/progetti\/7ve10042741",
        "lat": "43,6171442",
        "lng": "13,5127759",
        "coordinate": {
            "lat": "43,6171442",
            "lng": "13,5127759"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7VE10043021",
        "ocSintesiProgetto": "THE COMMON CHALLENGE THAT THE PROJECT WANTS TO JOINTLY TACKLE IS TO DEVELOP, VALORISE IN A SUSTAINABLE WAY THE WIDELY SPREAD ENVIRONMENTAL AND LANDSCAPE ASSETS OF THE AREA THROUGH A HIGHER QUALITY TOURISM AND IN THE SAME TIME CONSERVE AND PROTECT THEM, FINDING THE RIGHT BALANCE.   THE OVERALL OBJECTIVE OF THE PROJECT IS TO BUILD AN INTEGRATED SYSTEM OF SERVICES FOR THE NATURAL AND CULTURAL HERITAGE,FOR A SUSTAINABLE ECONOMIC DEVELOPMENT.THE PARTNERSHIP LIVES IN A AREA WHERE  TOURISM IS FOCUSED IN THE COASTAL AREA IN THE SUMMER SEASON, BUT THERE ARE NATURAL AND CULTURAL HERITAGE (TANGIBLE AND INTANGIBLE) OFTEN LESS KNOWN OR STRONGLY AFFECTED BY ADVERSE EXTREME NATURAL EVENTS THAT CAN BECOME VERY ATTRACTIVE TOURIST DESTINATIONS IF THE ECONOMIC STAKEHOLDERS AND PUBLIC BODIES OF THE AREA COOPERATE IN A SYSTEM WHERE THE PERSONAL ECONOMIC INTEREST BECOME PART OF A SHARED STRATEGY FOR A MUTUAL IMPROVEMENT.  NATURAL AND CULTURAL HERITAGE IS NOT ENOUGH, IF ALONE, TO PRODUCE ECONOMIC DEVELOPMENT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1176243,00",
        "totPagamenti": "1128417,58",
        "ocLink": "www.opencoesione.gov.it\/progetti\/7ve10043021",
        "lat": "43,6161908",
        "lng": "13,5054829",
        "coordinate": {
            "lat": "43,6161908",
            "lng": "13,5054829"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7VE10043021",
        "ocSintesiProgetto": "THE COMMON CHALLENGE THAT THE PROJECT WANTS TO JOINTLY TACKLE IS TO DEVELOP, VALORISE IN A SUSTAINABLE WAY THE WIDELY SPREAD ENVIRONMENTAL AND LANDSCAPE ASSETS OF THE AREA THROUGH A HIGHER QUALITY TOURISM AND IN THE SAME TIME CONSERVE AND PROTECT THEM, FINDING THE RIGHT BALANCE.   THE OVERALL OBJECTIVE OF THE PROJECT IS TO BUILD AN INTEGRATED SYSTEM OF SERVICES FOR THE NATURAL AND CULTURAL HERITAGE,FOR A SUSTAINABLE ECONOMIC DEVELOPMENT.THE PARTNERSHIP LIVES IN A AREA WHERE  TOURISM IS FOCUSED IN THE COASTAL AREA IN THE SUMMER SEASON, BUT THERE ARE NATURAL AND CULTURAL HERITAGE (TANGIBLE AND INTANGIBLE) OFTEN LESS KNOWN OR STRONGLY AFFECTED BY ADVERSE EXTREME NATURAL EVENTS THAT CAN BECOME VERY ATTRACTIVE TOURIST DESTINATIONS IF THE ECONOMIC STAKEHOLDERS AND PUBLIC BODIES OF THE AREA COOPERATE IN A SYSTEM WHERE THE PERSONAL ECONOMIC INTEREST BECOME PART OF A SHARED STRATEGY FOR A MUTUAL IMPROVEMENT.  NATURAL AND CULTURAL HERITAGE IS NOT ENOUGH, IF ALONE, TO PRODUCE ECONOMIC DEVELOPMENT",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "1176243,00",
        "totPagamenti": "1128417,58",
        "ocLink": "www.opencoesione.gov.it\/progetti\/7ve10043021",
        "lat": "43,510502",
        "lng": "13,6221799",
        "coordinate": {
            "lat": "43,510502",
            "lng": "13,6221799"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7VE10043061",
        "ocSintesiProgetto": "NATURAL AND CULTURAL HERITAGE IS A PRECIOUS DEVELOPMENT LEVERAGE ONLY IF THE LOCAL COMMUNITIES, DIFFERENT TYPE OF USERS AND TOURISTS ARE AWARE OF ITS VALUE AND COOPERATE FOR ITS CONSERVATION. NATURAL AND CULTURAL HERITAGE ATTRACTS MASS TOURISM AND LOCATIONS ARE ATTRACTIVE FOR EVENTS AS WELL EVEN IF THEY MAY IMPACT NEGATIVELY. ZERO WASTE BLUE CAPITALIZES ZERO WASTE PROJECT RESULTS' WITH THE AIM OF A BROADER INVOLVEMENT OF LOCAL COMMUNITIES AND PRIVATE-PUBLIC STAKEHOLDERS IN THE ORGANIZATION OF SUSTAINABLE SPORT EVENTS IN ATTRACTIVE AND FRAGILE AREAS (E.G. HISTORICAL CENTRES, NATURAL PARK\/AREAS) LOWING RADICALLY THE ENVIRONMENTAL IMPACT AND INCREASING THE BENEFIT FOR THE SOCIAL AND ECONOMIC DEVELOPMENT. IN THE CB ITALY-CROATIA AREA THERE ARE MANY SPORT EVENTS THAT ATTRACT THOUSANDS OF PEOPLE. THESE LARGE GATHERINGS PRODUCE AN INCREASE OF WATER AND ENERGY CONSUMPTION, POLLUTION, WASTE OF FOOD AND MATERIALS AND OFTEN CAUSE TROUBLE FOR LOCAL COMMUNITIES AND HAVE NEGATIVE IMPACTS ON NATURAL",
        "ocStatoProgetto": "Concluso",
        "ocDataInizioProgetto": 20180419.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "861435,70",
        "totPagamenti": "832461,00",
        "ocLink": "www.opencoesione.gov.it\/progetti\/7ve10043061",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7VE10047361",
        "ocSintesiProgetto": "THE GOAL OF THE PROJECT IS TO DEVELOP AND PROMOTE A WIDE CROSSBORDER NETWORK OF ACCESSIBLE TOURIST DESTINATIONS WITH NATURAL AND CULTURAL HERITAGE IN ORDER TO REDUCE RELIANCE ON SEASONAL TOURISM AND PROMOTE SOCIAL INCLUSION BY SHARING APPROACHES AND METHODS AND BY JOINT-PROMOTING TOURISM SERVICES FOR DISADVANTAGED PEOPLE AND FOR THOSE WITH SPECIAL ACCESSIBILITY NEEDS (E.G. THE DISABLED, THE ELDERLY).  THIS PROJECT IS BEING PRESENTED BY A BROAD PARTNERSHIP OF 13 ORGANIZATIONS BASED THROUGHOUT THE ADMISSIBLE AREA. THEY JOINED FORCES TO DEVELOP ACCESSIBLE TOURISM WITH THE AIM OF EXTENDING THE TOURISM SEASON, AS WELL AS TO SWAP EXPERIENCE AND HARMONIZE METHODS IN A BID TO ENSURE GREATER OUTPUT TRANSFERABILITY AND COOPERATION BETWEEN LOCAL STAKEHOLDERS IN EACH DESTINATION. THE PARTNERSHIP COMPRISES REGIONAL AND LOCAL GOVERNMENTS, BODIES AND AGENCIES INVOLVED IN TOURISM AND IN CARING FOR PEOPLE WITH DISABILITIES; THESE ORGANIZATIONS ALSO HAVE EXPERIENCE IN ACCESSIBLE TOURISM, SUSTAINABLE TOU",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20181101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2509328,35",
        "totPagamenti": "515629,39",
        "ocLink": "www.opencoesione.gov.it\/progetti\/7ve10047361",
        "lat": "43,5270861",
        "lng": "13,2463797",
        "coordinate": {
            "lat": "43,5270861",
            "lng": "13,2463797"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    },
    {
        "codLocaleProgetto": "7VE10048184",
        "ocSintesiProgetto": "THE PROGRAMME AREA IS ESSENTIALLY COMPOSED OF TWO VERY DIFFERENT, BUT INTERRELATED, PARTS OF TERRITORY: THE HINTERLANDS AND THE COASTAL BELT. INLAND AREAS ARE AFFECTED BY MARGINALIZATION PROCESSES WHICH LEAD TO AN ABANDONMENT AND DECAY OF LOCAL RESOURCES. NATURAL AND CULTURAL ASSETS OF INLAND AREAS STRONGLY NEEDS TO BE VALORISED TO REVITALISE LOCAL COMMUNITIES AND PRESERVE HINTERLANDS FROM A NUMBER OF THREATS SUCH AS HYDROGEOLOGICAL RISKS, LOSS OR DEPLETION OF BIODIVERSITY, COLLECTIVE SERVICES, TRADITIONAL KNOW HOW, INFRASTRUCTURES AND FACILITIES. ON THE OTHER HAND, COASTLINE ECOSYSTEMS, AS PRIMARY ECONOMIC DEVELOPMENT DRIVERS AND THE MOST IMPORTANT ELEMENTS OF TERRITORIAL BRAND, ARE OVEREXPLOITED AND THREATENED BY STRONG HUMAN PRESSURES SUCH MASS-TOURISM, URBANIZATION, LAND USE CONFLICTS.  WHILE NATURAL ENVIRONMENTS OF HIGH ECOLOGICAL IMPORTANCE AND SCENIC VALUE, TRADITIONAL ARTS AND CRAFTS, FORESTRY AND ORGANIC FARMING, RURAL TOURISM REPRESENT THE MOST EVIDENT PART OF THE UNEXPLOITED",
        "ocStatoProgetto": "In corso",
        "ocDataInizioProgetto": 20190101.0,
        "ocTemaSintetico": "Attrazione culturale, naturale e turistica",
        "ocFinanzTotPubNetto": "2218069,31",
        "totPagamenti": "338144,72",
        "ocLink": "www.opencoesione.gov.it\/progetti\/7ve10048184",
        "lat": "43,6158299",
        "lng": "13,518915",
        "coordinate": {
            "lat": "43,6158299",
            "lng": "13,518915"
        },
        "monithonLink": {
            "url": "https:\/\/dev.monithon.it\/report\/view\/582",
            "titolo": "BONIFICA SPIAGGE POETTO CAGLIARI"
        }
    }
];
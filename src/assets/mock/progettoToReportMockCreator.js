let remap = {
    'uid': 'uid',
    'titoloReport': 'ocTitoloProgetto',
    'dataInserimento': 'ocDataInizioProgetto',
    'codGiudizioSintetico': 'codStatoProgetto',
    'ocCodTemaSintetico': 'ocCodTemaSintetico',
    'ocFinanzTotPubNetto': 'ocFinanzTotPubNetto',
    'ocCodProgrammaOperativo':'ocCodProgrammaOperativo',
    'ocCodCicloProgrammazione':'ocCodCicloProgrammazione',
    'lat':'lat',
    'long':'long'
};

let programmiOperativi = [
    {
        "codProgrammaOperativo": "2017NAPOLI-POZZ",
        "descProgrammaOperativo": "COLLEGAMENTO TANGENZIALE DI NAPOLI AL PORTO DI POZZUOLI"
    },
    {
        "codProgrammaOperativo": "FSCCOMUNI",
        "descProgrammaOperativo": "RISORSE FSC ASSEGNATE AI COMUNI"
    },
    {
        "codProgrammaOperativo": "2014TC16I5CB008",
        "descProgrammaOperativo": "PROGRAMMA IPA INTERREG CBC ITALIA-ALBANIA-MONTENEGRO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP014",
        "descProgrammaOperativo": "POR FSE SICILIA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP010",
        "descProgrammaOperativo": "POR FSE UMBRIA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP009",
        "descProgrammaOperativo": "POR FESR FRIULI-VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP015",
        "descProgrammaOperativo": "POR FSE TOSCANA"
    },
    {
        "codProgrammaOperativo": "2014TC16RFCB036",
        "descProgrammaOperativo": "PROGRAMMA FESR INTERREG ITALIA-SLOVENIA"
    },
    {
        "codProgrammaOperativo": "2017PPORTTARFSC",
        "descProgrammaOperativo": "PIASTRA PORTUALE DI TARANTO"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP017",
        "descProgrammaOperativo": "POR FESR TOSCANA"
    },
    {
        "codProgrammaOperativo": "2014TC16RFCB033",
        "descProgrammaOperativo": "PROGRAMMA FESR INTERREG ITALIA-FRANCIA MARITTIMO"
    },
    {
        "codProgrammaOperativo": "2007IT162PO002",
        "descProgrammaOperativo": "POR CRO FESR EMILIA ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2014IT05M2OP002",
        "descProgrammaOperativo": "PON FESR FSE GOVERNANCE E CAPACITA' ISTITUZIONALE"
    },
    {
        "codProgrammaOperativo": "2017POCGOVERN01",
        "descProgrammaOperativo": "POC GOVERNANCE"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP004",
        "descProgrammaOperativo": "PON FESR FSE CITTA' METROPOLITANE"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP003",
        "descProgrammaOperativo": "PON FESR FSE LEGALITA'"
    },
    {
        "codProgrammaOperativo": "2017POCCTE",
        "descProgrammaOperativo": "POC COOPERAZIONE TERRITORIALE EUROPEA"
    },
    {
        "codProgrammaOperativo": "CISFOGGIAFSC",
        "descProgrammaOperativo": "CIS AREA DI FOGGIA"
    },
    {
        "codProgrammaOperativo": "CISMOLISEFSC",
        "descProgrammaOperativo": "CIS MOLISE"
    },
    {
        "codProgrammaOperativo": "2014IT05M9OP001",
        "descProgrammaOperativo": "PON INIZIATIVA OCCUPAZIONE GIOVANI"
    },
    {
        "codProgrammaOperativo": "2007IT051PO004",
        "descProgrammaOperativo": "POR CONV FSE BASILICATA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO009",
        "descProgrammaOperativo": "POR CRO FSE PA BOLZANO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO009:::2016BOXXXPAC00",
        "descProgrammaOperativo": "POR CRO FSE PA BOLZANO:::PROGRAMMA PAC P.A. BOLZANO"
    },
    {
        "codProgrammaOperativo": "2007IT161PO009",
        "descProgrammaOperativo": "POR CONV FESR CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2007IT051PO001",
        "descProgrammaOperativo": "POR CONV FSE CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO009:::2012CAXXXPAC00",
        "descProgrammaOperativo": "POR CONV FESR CAMPANIA:::PROGRAMMA PAC CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2012CAXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2007IT051PO002",
        "descProgrammaOperativo": "POR CONV FSE CALABRIA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO008",
        "descProgrammaOperativo": "POR CONV FESR CALABRIA"
    },
    {
        "codProgrammaOperativo": "2007CL001FA008",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC CALABRIA"
    },
    {
        "codProgrammaOperativo": "2012CLXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC CALABRIA"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS6",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE CALABRIA"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP006",
        "descProgrammaOperativo": "POR FESR FSE CALABRIA"
    },
    {
        "codProgrammaOperativo": "2017POCCALABR1",
        "descProgrammaOperativo": "POC CALABRIA"
    },
    {
        "codProgrammaOperativo": "2016PATTIMIL",
        "descProgrammaOperativo": "PATTO MILANO"
    },
    {
        "codProgrammaOperativo": "2018MATERAFSC",
        "descProgrammaOperativo": "MATERA CAPITALE CULTURA"
    },
    {
        "codProgrammaOperativo": "2016PATTIRC",
        "descProgrammaOperativo": "PATTO REGGIO CALABRIA"
    },
    {
        "codProgrammaOperativo": "COMMTARANTOFSC",
        "descProgrammaOperativo": "CIS AREA DI TARANTO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO002",
        "descProgrammaOperativo": "POR CRO FSE EMILIA ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO003",
        "descProgrammaOperativo": "POR CRO FSE FRIULI-VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2013FVGXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC FRIULI-VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO004",
        "descProgrammaOperativo": "POR CRO FSE LAZIO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP006",
        "descProgrammaOperativo": "POR FSE LIGURIA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO005",
        "descProgrammaOperativo": "POR CRO FSE LIGURIA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO006",
        "descProgrammaOperativo": "POR CRO FSE LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO006",
        "descProgrammaOperativo": "POR CRO FESR LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "2007LO002FA006",
        "descProgrammaOperativo": "PAR FSC LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "2007MA002FA007",
        "descProgrammaOperativo": "PAR FSC MARCHE"
    },
    {
        "codProgrammaOperativo": "2007IT162PO007",
        "descProgrammaOperativo": "POR CRO FESR MARCHE"
    },
    {
        "codProgrammaOperativo": "2017POAMBIENFSC",
        "descProgrammaOperativo": "PIANO FSC AMBIENTE"
    },
    {
        "codProgrammaOperativo": "2014XXSMDFSC004",
        "descProgrammaOperativo": "PIANO STRALCIO TARANTO"
    },
    {
        "codProgrammaOperativo": "FSCMILITSPORT",
        "descProgrammaOperativo": "IMPIANTI SPORTIVI PER GRUPPI SPORTIVI MILITARI"
    },
    {
        "codProgrammaOperativo": "2007IT005FAMG1",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO SPECIALE FSC GIUSTIZIA CIVILE CELERE PER LA CRESCITA"
    },
    {
        "codProgrammaOperativo": "2017POAGRICOFSC",
        "descProgrammaOperativo": "PIANO FSC AGRICOLTURA"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS8",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2007SA002FA016",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO002",
        "descProgrammaOperativo": "POIN CONV FESR ENERGIE RINNOVABILI E RISPARMIO ENERGETICO"
    },
    {
        "codProgrammaOperativo": "2016PATTICAT",
        "descProgrammaOperativo": "PATTO CATANIA"
    },
    {
        "codProgrammaOperativo": "2015XXXXXPSO000",
        "descProgrammaOperativo": "PIANO FSC DISSESTO IDROGEOLOGICO FONDO PROGETTAZIONE"
    },
    {
        "codProgrammaOperativo": "2016PATTIGEN",
        "descProgrammaOperativo": "PATTO GENOVA"
    },
    {
        "codProgrammaOperativo": "2016XXAMPSAP00",
        "descProgrammaOperativo": "PIANO FSC DISSESTO IDROGEOLOGICO"
    },
    {
        "codProgrammaOperativo": "2012PCMDGPAC21",
        "descProgrammaOperativo": "PROGRAMMA PAC PCM - DIPARTIMENTO GIOVENTU'"
    },
    {
        "codProgrammaOperativo": "2019AREAINTPUGL",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE PUGLIA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2016PATTIVEN",
        "descProgrammaOperativo": "PATTO VENEZIA"
    },
    {
        "codProgrammaOperativo": "2007BO002FA009",
        "descProgrammaOperativo": "PAR FSC PA BOLZANO"
    },
    {
        "codProgrammaOperativo": "2007IT161PO006",
        "descProgrammaOperativo": "PON CONV FESR RICERCA E COMPETITIVITÀ"
    },
    {
        "codProgrammaOperativo": "2007IT161PO001",
        "descProgrammaOperativo": "POIN CONV FESR ATTRATTORI CULTURALI, NATURALI E TURISMO"
    },
    {
        "codProgrammaOperativo": "2007IT004FAMA1",
        "descProgrammaOperativo": "PROGRAMMA NAZIONALE DI ATTUAZIONE (PNA) FSC RISANAMENTO AMBIENTALE"
    },
    {
        "codProgrammaOperativo": "2012MINTXPAC21",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELL'INTERNO - PIANO NAZIONALE SERVIZI DI CURA"
    },
    {
        "codProgrammaOperativo": "2017FSCRICERCA",
        "descProgrammaOperativo": "PIANO FSC RICERCA E INNOVAZIONE"
    },
    {
        "codProgrammaOperativo": "2007IT006FISMA",
        "descProgrammaOperativo": "PROGRAMMA NAZIONALE DI ATTUAZIONE (PNA) FSC NUOVA IMPRENDITORIALITA' AGRICOLA"
    },
    {
        "codProgrammaOperativo": "2007IT001FA005",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO SPECIALE FSC DIRETTRICI FERROVIARIE"
    },
    {
        "codProgrammaOperativo": "2012MISE1PAC22",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELLO SVILUPPO ECONOMICO - IMPRESE, DOMANDA PUBBLICA E PROMOZIONE"
    },
    {
        "codProgrammaOperativo": "2007AB002FA001",
        "descProgrammaOperativo": "PAR FSC ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2016PATTIABR",
        "descProgrammaOperativo": "PATTO ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2016PATTIABR:::2017AREAINTABRU",
        "descProgrammaOperativo": "PATTO ABRUZZO:::STRATEGIA AREE INTERNE REGIONE ABRUZZO SERVIZI"
    },
    {
        "codProgrammaOperativo": "2007PI004MA002",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2007AB003FA001",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS1",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2016PATTIBARI",
        "descProgrammaOperativo": "PATTO BARI"
    },
    {
        "codProgrammaOperativo": "2014ACTXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC COMPLEMENTARE PON GOVERNANCE E ASSISTENZA TECNICA"
    },
    {
        "codProgrammaOperativo": "2007PI004MA014",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA PROVINCIA AUTONOMA DI TRENTO"
    },
    {
        "codProgrammaOperativo": "2016PATTISARD",
        "descProgrammaOperativo": "PATTO SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP005",
        "descProgrammaOperativo": "PON FESR FSE RICERCA E INNOVAZIONE"
    },
    {
        "codProgrammaOperativo": "2017POCRICERCA1",
        "descProgrammaOperativo": "POC RICERCA"
    },
    {
        "codProgrammaOperativo": "2007BA001FA012",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC BASILICATA"
    },
    {
        "codProgrammaOperativo": "2019AREAINTVEN",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE VENETO SERVIZI"
    },
    {
        "codProgrammaOperativo": "2012MISE3PAC31",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELLO SVILUPPO ECONOMICO - MISURE ANTICICLICHE"
    },
    {
        "codProgrammaOperativo": "2007CA001FA009",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2012MIURXPAC21",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELL'ISTRUZIONE UNIVERSITA' E RICERCA"
    },
    {
        "codProgrammaOperativo": "2012MISE1PAC31",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELLO SVILUPPO ECONOMICO - NUOVE AZIONI E MISURE ANTICICLICHE"
    },
    {
        "codProgrammaOperativo": "2007IT161PO006:::2012MISE1PAC22",
        "descProgrammaOperativo": "PON CONV FESR RICERCA E COMPETITIVITÀ:::PROGRAMMA PAC MINISTERO DELLO SVILUPPO ECONOMICO - IMPRESE, DOMANDA PUBBLICA E PROMOZIONE"
    },
    {
        "codProgrammaOperativo": "2018FSCGIOVIMP",
        "descProgrammaOperativo": "RESTO AL SUD - GIOVANI IMPRENDITORI NEL MEZZOGIORNO"
    },
    {
        "codProgrammaOperativo": "2016PATTIBASIL",
        "descProgrammaOperativo": "PATTO BASILICATA"
    },
    {
        "codProgrammaOperativo": "2016PATTIMES",
        "descProgrammaOperativo": "PATTO MESSINA"
    },
    {
        "codProgrammaOperativo": "2007IT001FA003",
        "descProgrammaOperativo": "PROGRAMMA NAZIONALE  DI ATTUAZIONE (PNA) FSC DA EXPO AI TERRITORI"
    },
    {
        "codProgrammaOperativo": "2007IT161PO003:::2014ACTXXPAC00",
        "descProgrammaOperativo": "PON CONV FESR GOVERNANCE E ASSISTENZA TECNICA:::PROGRAMMA PAC COMPLEMENTARE PON GOVERNANCE E ASSISTENZA TECNICA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO003",
        "descProgrammaOperativo": "PON CONV FESR GOVERNANCE E ASSISTENZA TECNICA"
    },
    {
        "codProgrammaOperativo": "2007PU001FA010",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC PUGLIA"
    },
    {
        "codProgrammaOperativo": "2018POFSCBO",
        "descProgrammaOperativo": "PATTO BOLOGNA"
    },
    {
        "codProgrammaOperativo": "2017AREAINTABRU",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE ABRUZZO SERVIZI"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP001",
        "descProgrammaOperativo": "PON FESR CULTURA E SVILUPPO"
    },
    {
        "codProgrammaOperativo": "2007IT161PO002:::2012MISE1PAC31",
        "descProgrammaOperativo": "POIN CONV FESR ENERGIE RINNOVABILI E RISPARMIO ENERGETICO:::PROGRAMMA PAC MINISTERO DELLO SVILUPPO ECONOMICO - NUOVE AZIONI E MISURE ANTICICLICHE"
    },
    {
        "codProgrammaOperativo": "2007IT004FABC1",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO SPECIALE FSC SEDI MUSEALI DI RILIEVO NAZIONALE"
    },
    {
        "codProgrammaOperativo": "2007IT005FAMAC",
        "descProgrammaOperativo": "PROGRAMMA STRATEGICO FSC COMPENSAZIONI AMBIENTALI REGIONE CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2019AGCOEFSC001",
        "descProgrammaOperativo": "PIANO RAFFORZAMENTO CONTI PUBBLICI TERRITORIALI"
    },
    {
        "codProgrammaOperativo": "2019AREAINTEMIL",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE EMILIA-ROMAGNA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2007EM002FA002",
        "descProgrammaOperativo": "PAR FSC EMILIA ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2018POFSCEMROM",
        "descProgrammaOperativo": "PATTO EMILIA ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2007PI004MA013",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE EMILIA ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2007EM002FA003",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO SPECIALE FSC RICOSTRUZIONE PER SISMA 2012 EMILIA ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2007PI004MA011",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE FRIULI VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2016PATTIFIR",
        "descProgrammaOperativo": "PATTO FIRENZE"
    },
    {
        "codProgrammaOperativo": "2016MBCSGFSC006",
        "descProgrammaOperativo": "PIANO FSC CULTURA E TURISMO"
    },
    {
        "codProgrammaOperativo": "2018CAPCULTFSC",
        "descProgrammaOperativo": "CAPITALI ITALIANE CULTURA"
    },
    {
        "codProgrammaOperativo": "2016MBCSGFSC006:::2015IGRUEPCI001",
        "descProgrammaOperativo": "PIANO FSC CULTURA E TURISMO:::POC SUPPORTO E ASSISTENZA TECNICA PER LA PROGRAMMAZIONE"
    },
    {
        "codProgrammaOperativo": "2007IT002FA030",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO SPECIALE FSC RI.MED."
    },
    {
        "codProgrammaOperativo": "2015IGRUEPCI001",
        "descProgrammaOperativo": "POC SUPPORTO E ASSISTENZA TECNICA PER LA PROGRAMMAZIONE"
    },
    {
        "codProgrammaOperativo": "2012MISE1PAC21",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELLO SVILUPPO ECONOMICO - AUTOIMPIEGO E AUTOIMPRENDITORIALITA'"
    },
    {
        "codProgrammaOperativo": "2007PI004MA004",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE LAZIO"
    },
    {
        "codProgrammaOperativo": "2007PI004MA008",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE LIGURIA"
    },
    {
        "codProgrammaOperativo": "2007PI004MA003",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "FSCACTBENICONF",
        "descProgrammaOperativo": "PIANO FSC BENI CONFISCATI ESEMPLARI"
    },
    {
        "codProgrammaOperativo": "2007MO002FA009",
        "descProgrammaOperativo": "PAR FSC MOLISE"
    },
    {
        "codProgrammaOperativo": "2007PI004MA007",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE MARCHE"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS2",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE MOLISE"
    },
    {
        "codProgrammaOperativo": "2007MO002FA008",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC MOLISE"
    },
    {
        "codProgrammaOperativo": "2007PI004MA005",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE MOLISE"
    },
    {
        "codProgrammaOperativo": "2016PATTINAP",
        "descProgrammaOperativo": "PATTO NAPOLI"
    },
    {
        "codProgrammaOperativo": "2018AREAINTUMB",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE UMBRIA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2018BOLZPOLTEC",
        "descProgrammaOperativo": "POLI TECNOLOGICI P.A. BOLZANO"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS3",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS5",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE BASILICATA"
    },
    {
        "codProgrammaOperativo": "2018REGPIEMFSC",
        "descProgrammaOperativo": "OSPEDALE UNICO DI ORNAVASSO"
    },
    {
        "codProgrammaOperativo": "2007SI002FAPA1",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO SPECIALE FSC COMUNE DI PALERMO"
    },
    {
        "codProgrammaOperativo": "2012MIBACPAC21",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DEI BENI CULTURALI"
    },
    {
        "codProgrammaOperativo": "2007IT161PO001:::2012MIBACPAC21",
        "descProgrammaOperativo": "POIN CONV FESR ATTRATTORI CULTURALI, NATURALI E TURISMO:::PROGRAMMA PAC MINISTERO DEI BENI CULTURALI"
    },
    {
        "codProgrammaOperativo": "2012MINTXPAC23",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELL'INTERNO - SICUREZZA E LEGALITA' IN CALABRIA"
    },
    {
        "codProgrammaOperativo": "2016PATTIMOL",
        "descProgrammaOperativo": "PATTO MOLISE"
    },
    {
        "codProgrammaOperativo": "2016PATTIPAL",
        "descProgrammaOperativo": "PATTO PALERMO"
    },
    {
        "codProgrammaOperativo": "2007PI004MA001",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP005:::2017FSCRICERCA",
        "descProgrammaOperativo": "PON FESR FSE RICERCA E INNOVAZIONE:::PIANO FSC RICERCA E INNOVAZIONE"
    },
    {
        "codProgrammaOperativo": "2016POCCULTURA1",
        "descProgrammaOperativo": "POC CULTURA"
    },
    {
        "codProgrammaOperativo": "2018PIEMPOLTEC",
        "descProgrammaOperativo": "PARCO CITTA' DELLA SALUTE DI TORINO"
    },
    {
        "codProgrammaOperativo": "2007AN0021FA01",
        "descProgrammaOperativo": "COMPLETAMENTO SALERNO-REGGIO CALABRIA"
    },
    {
        "codProgrammaOperativo": "2007PI004MA006",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2007TR002FA010",
        "descProgrammaOperativo": "PAR FSC P.A. TRENTO"
    },
    {
        "codProgrammaOperativo": "2007PI004MA010",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE TOSCANA"
    },
    {
        "codProgrammaOperativo": "2015MBACTFSC017",
        "descProgrammaOperativo": "SENSI CONTEMPORANEI"
    },
    {
        "codProgrammaOperativo": "2007VA002FA014",
        "descProgrammaOperativo": "PAR FSC VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2007VE002FA015",
        "descProgrammaOperativo": "PAR FSC VENETO"
    },
    {
        "codProgrammaOperativo": "2007PB006MA023",
        "descProgrammaOperativo": "PIANO STRAORDINARIO DI BONIFICA DELLE DISCARICHE ABUSIVE REGIONE VENETO"
    },
    {
        "codProgrammaOperativo": "2007PI004MA009",
        "descProgrammaOperativo": "PIANO STRAORDINARIO TUTELA E GESTIONE RISORSA IDRICA REGIONE VENETO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO017",
        "descProgrammaOperativo": "PON CRO FSE AZIONI DI SISTEMA"
    },
    {
        "codProgrammaOperativo": "2007IT051PO006",
        "descProgrammaOperativo": "PON CONV FSE GOVERNANCE E AZIONI DI SISTEMA"
    },
    {
        "codProgrammaOperativo": "2012MLPSXPAC21",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DEL LAVORO - APPRENDISTATO E NEET"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS9",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO MIUR"
    },
    {
        "codProgrammaOperativo": "2007IT161PO004",
        "descProgrammaOperativo": "PON CONV FESR ISTRUZIONE - AMBIENTI PER L'APPRENDIMENTO"
    },
    {
        "codProgrammaOperativo": "2007IT161PO011",
        "descProgrammaOperativo": "POR CONV FESR SICILIA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO010",
        "descProgrammaOperativo": "POR CONV FESR PUGLIA"
    },
    {
        "codProgrammaOperativo": "2007IT051PO007",
        "descProgrammaOperativo": "PON CONV FSE COMPETENZE PER LO SVILUPPO"
    },
    {
        "codProgrammaOperativo": "2007IT051PO007:::2007IT001FAOS9",
        "descProgrammaOperativo": "PON CONV FSE COMPETENZE PER LO SVILUPPO:::PROGRAMMA OBIETTIVI DI SERVIZIO MIUR"
    },
    {
        "codProgrammaOperativo": "2007IT001FA004",
        "descProgrammaOperativo": "PROGRAMMA ATTUATIVO MIUR MESSA IN SICUREZZA EDIFICI SCOLASTICI"
    },
    {
        "codProgrammaOperativo": "2007IT051PO005",
        "descProgrammaOperativo": "POR CONV FSE PUGLIA"
    },
    {
        "codProgrammaOperativo": "2007IT051PO003",
        "descProgrammaOperativo": "POR CONV FSE SICILIA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO004:::2007IT001FAOS9",
        "descProgrammaOperativo": "PON CONV FESR ISTRUZIONE - AMBIENTI PER L'APPRENDIMENTO:::PROGRAMMA OBIETTIVI DI SERVIZIO MIUR"
    },
    {
        "codProgrammaOperativo": "2007IT051PO001:::2012CAXXXPAC00",
        "descProgrammaOperativo": "POR CONV FSE CAMPANIA:::PROGRAMMA PAC CAMPANIA"
    },
    {
        "codProgrammaOperativo": "PON CONV FSE COMPETENZE PER LO SVILUPPO",
        "descProgrammaOperativo": ""
    },
    {
        "codProgrammaOperativo": "2018POSALUTEFSC",
        "descProgrammaOperativo": "PIANO FSC SALUTE"
    },
    {
        "codProgrammaOperativo": "2012MITXXPAC32",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELLE INFRASTRUTTURE E TRASPORTI - SALVAGUARDIA INTERVENTI"
    },
    {
        "codProgrammaOperativo": "2007IT161PO005",
        "descProgrammaOperativo": "PON CONV FESR RETI E MOBILITÀ"
    },
    {
        "codProgrammaOperativo": "2012MITXXPAC33",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELLE INFRASTRUTTURE E TRASPORTI - PIANO CITTA'"
    },
    {
        "codProgrammaOperativo": "2017MEFDTFSC004",
        "descProgrammaOperativo": "GRAN SASSO SCIENCE INSTITUTE"
    },
    {
        "codProgrammaOperativo": "POSPORTFSC",
        "descProgrammaOperativo": "PIANO FSC SPORT E PERIFERIE"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS4",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE PUGLIA"
    },
    {
        "codProgrammaOperativo": "2012PUXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC PUGLIA"
    },
    {
        "codProgrammaOperativo": "2014TC16RFCB037",
        "descProgrammaOperativo": "PROGRAMMA FESR INTERREG ITALIA-MALTA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP015",
        "descProgrammaOperativo": "POR FESR SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO016",
        "descProgrammaOperativo": "POR CRO FESR SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO016:::2012SAXXXPAC00",
        "descProgrammaOperativo": "POR CRO FESR SARDEGNA:::PROGRAMMA PAC SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2012SAXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2016PATTICAGL",
        "descProgrammaOperativo": "PATTO CAGLIARI"
    },
    {
        "codProgrammaOperativo": "2007IT161PO011:::2007SI001FA011",
        "descProgrammaOperativo": "POR CONV FESR SICILIA:::PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC SICILIA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO011:::2012SIXXXPAC00",
        "descProgrammaOperativo": "POR CONV FESR SICILIA:::PROGRAMMA PAC SICILIA"
    },
    {
        "codProgrammaOperativo": "2012SIXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC SICILIA"
    },
    {
        "codProgrammaOperativo": "2016PATTISICI",
        "descProgrammaOperativo": "PATTO SICILIA"
    },
    {
        "codProgrammaOperativo": "2007SI001FA011",
        "descProgrammaOperativo": "PROGRAMMA REGIONALE DI ATTUAZIONE (PRA) FSC SICILIA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP016",
        "descProgrammaOperativo": "POR FESR SICILIA"
    },
    {
        "codProgrammaOperativo": "2007IT001FAOS7",
        "descProgrammaOperativo": "PROGRAMMA OBIETTIVI DI SERVIZIO REGIONE SICILIA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP016:::2016PATTISICI",
        "descProgrammaOperativo": "POR FESR SICILIA:::PATTO SICILIA"
    },
    {
        "codProgrammaOperativo": "2017POCSICILIA1",
        "descProgrammaOperativo": "POC SICILIA"
    },
    {
        "codProgrammaOperativo": "2018AREAINTSICI",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE SICILIA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2007IT052PO012",
        "descProgrammaOperativo": "POR CRO FSE TOSCANA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO010",
        "descProgrammaOperativo": "POR CRO FSE PA TRENTO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO013",
        "descProgrammaOperativo": "POR CRO FSE UMBRIA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO014",
        "descProgrammaOperativo": "POR CRO FESR VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO015",
        "descProgrammaOperativo": "POR CRO FSE VENETO"
    },
    {
        "codProgrammaOperativo": "2007IT162PO015",
        "descProgrammaOperativo": "POR CRO FESR VENETO"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP008",
        "descProgrammaOperativo": "POR FESR EMILIA-ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2015XMINTFSC016",
        "descProgrammaOperativo": "PIANO SICUREZZA URBANA ROMA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP003",
        "descProgrammaOperativo": "POR FSE EMILIA-ROMAGNA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO001",
        "descProgrammaOperativo": "POR CRO FESR ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO001",
        "descProgrammaOperativo": "POR CRO FSE ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2013ABXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP004",
        "descProgrammaOperativo": "POR FESR ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP009",
        "descProgrammaOperativo": "POR FSE ABRUZZO"
    },
    {
        "codProgrammaOperativo": "2016XXPCMFSC002",
        "descProgrammaOperativo": "COMPLETAMENTO NUOVA CITTADELLA GIUDIZIARIA DI SALERNO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP002",
        "descProgrammaOperativo": "PON FSE SISTEMI DI POLITICHE ATTIVE PER L'OCCUPAZIONE"
    },
    {
        "codProgrammaOperativo": "2007IT161PO012",
        "descProgrammaOperativo": "POR CONV FESR BASILICATA"
    },
    {
        "codProgrammaOperativo": "2007IT161PO012:::2017BAXXXPAC00",
        "descProgrammaOperativo": "POR CONV FESR BASILICATA:::PROGRAMMA PAC BASILICATA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO009",
        "descProgrammaOperativo": "POR CRO FESR PA BOLZANO"
    },
    {
        "codProgrammaOperativo": "2007IT162PO004",
        "descProgrammaOperativo": "POR CRO FESR LAZIO"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP011",
        "descProgrammaOperativo": "POR FESR LIGURIA"
    },
    {
        "codProgrammaOperativo": "2007LI002FA005",
        "descProgrammaOperativo": "PAR FSC LIGURIA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO005",
        "descProgrammaOperativo": "POR CRO FESR LIGURIA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO007",
        "descProgrammaOperativo": "POR CRO FSE MARCHE"
    },
    {
        "codProgrammaOperativo": "2018FREJUSFSC",
        "descProgrammaOperativo": "TRAFORO FREJUS"
    },
    {
        "codProgrammaOperativo": "2007IT161PO007:::2012MINTXPAC22",
        "descProgrammaOperativo": "PON CONV FESR SICUREZZA:::PROGRAMMA PAC MINISTERO DELL'INTERNO - SICUREZZA E LEGALITA'"
    },
    {
        "codProgrammaOperativo": "2007IT161PO007",
        "descProgrammaOperativo": "PON CONV FESR SICUREZZA"
    },
    {
        "codProgrammaOperativo": "2012MINTXPAC22",
        "descProgrammaOperativo": "PROGRAMMA PAC MINISTERO DELL'INTERNO - SICUREZZA E LEGALITA'"
    },
    {
        "codProgrammaOperativo": "2007IT162PO008",
        "descProgrammaOperativo": "POR CRO FESR MOLISE"
    },
    {
        "codProgrammaOperativo": "2014MOXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC MOLISE"
    },
    {
        "codProgrammaOperativo": "2007IT162PO010",
        "descProgrammaOperativo": "POR CRO FESR PA TRENTO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO014",
        "descProgrammaOperativo": "POR CRO FSE VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2012VAXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2019MATTMINA001",
        "descProgrammaOperativo": "PIANO MITIGAZIONE RISCHIO IDROGEOLOGICO"
    },
    {
        "codProgrammaOperativo": "2007IT052PO008",
        "descProgrammaOperativo": "POR CRO FSE MOLISE"
    },
    {
        "codProgrammaOperativo": "2007IT162PO011",
        "descProgrammaOperativo": "POR CRO FESR PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP014",
        "descProgrammaOperativo": "POR FESR PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2007PI002FA011",
        "descProgrammaOperativo": "PAR FSC PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2016PIXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2007IT052PO011",
        "descProgrammaOperativo": "POR CRO FSE PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP013",
        "descProgrammaOperativo": "POR FSE PIEMONTE"
    },
    {
        "codProgrammaOperativo": "2007IT162PO013",
        "descProgrammaOperativo": "POR CRO FESR UMBRIA"
    },
    {
        "codProgrammaOperativo": "2015PCDPCFSC018",
        "descProgrammaOperativo": "PIANO DI INTERVENTI ISOLA DI LAMPEDUSA"
    },
    {
        "codProgrammaOperativo": "POCBASILICATA",
        "descProgrammaOperativo": "POC BASILICATA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP022",
        "descProgrammaOperativo": "POR FESR BASILICATA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP022:::POCBASILICATA",
        "descProgrammaOperativo": "POR FESR BASILICATA:::POC BASILICATA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO003",
        "descProgrammaOperativo": "POR CRO FESR FRIULI-VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2019MISEDLCRE01",
        "descProgrammaOperativo": "EFFICIENTAMENTO ENERGETICO NEI COMUNI"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP005",
        "descProgrammaOperativo": "POR FSE LAZIO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP008",
        "descProgrammaOperativo": "POR FSE MARCHE"
    },
    {
        "codProgrammaOperativo": "2017POCINFRASTR",
        "descProgrammaOperativo": "POC INFRASTRUTTURE E RETI"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP003",
        "descProgrammaOperativo": "PON FESR IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP021",
        "descProgrammaOperativo": "POR FESR VENETO"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP010",
        "descProgrammaOperativo": "POR FESR LAZIO"
    },
    {
        "codProgrammaOperativo": "2017POIMPCOMFSC",
        "descProgrammaOperativo": "PIANO FSC IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "2016POCIMPRESE1",
        "descProgrammaOperativo": "POC IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "2015MSIAIFSC011",
        "descProgrammaOperativo": "CONTRATTI DI SVILUPPO"
    },
    {
        "codProgrammaOperativo": "2016MISEBULFSC1",
        "descProgrammaOperativo": "PIANO FSC BANDA ULTRA LARGA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP007",
        "descProgrammaOperativo": "POR FESR CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP001",
        "descProgrammaOperativo": "POR FESR FSE MOLISE"
    },
    {
        "codProgrammaOperativo": "2016PATTICAMP:::2017POIMPCOMFSC",
        "descProgrammaOperativo": "PATTO CAMPANIA:::PIANO FSC IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP010:::2017POIMPCOMFSC",
        "descProgrammaOperativo": "POR FESR LAZIO:::PIANO FSC IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP018",
        "descProgrammaOperativo": "POR FESR P.A. TRENTO"
    },
    {
        "codProgrammaOperativo": "2016PATTICAMP",
        "descProgrammaOperativo": "PATTO CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP003:::2016POCIMPRESE1",
        "descProgrammaOperativo": "PON FESR IMPRESE E COMPETITIVITA':::POC IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "FONDOGARANFSC",
        "descProgrammaOperativo": "RISORSE FSC AL FONDO DI GARANZIA PMI"
    },
    {
        "codProgrammaOperativo": "2015IT16RFSM001:::2017POIMPCOMFSC",
        "descProgrammaOperativo": "PON FESR INIZIATIVA PMI:::PIANO FSC IMPRESE E COMPETITIVITA'"
    },
    {
        "codProgrammaOperativo": "2018FSCVOUCHER",
        "descProgrammaOperativo": "VOUCHER DIGITALIZZAZIONE PMI"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP001",
        "descProgrammaOperativo": "PON FSE INCLUSIONE"
    },
    {
        "codProgrammaOperativo": "2018POCSCUOLA",
        "descProgrammaOperativo": "POC PER LA SCUOLA COMPETENZE E AMBIENTI PER L'APPRENDIMENTO"
    },
    {
        "codProgrammaOperativo": "2014IT05M2OP001",
        "descProgrammaOperativo": "PON FESR FSE PER LA SCUOLA - COMPETENZE E AMBIENTI PER L'APPRENDIMENTO"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP002",
        "descProgrammaOperativo": "PON FESR INFRASTRUTTURE E RETI"
    },
    {
        "codProgrammaOperativo": "2007UM002FA013",
        "descProgrammaOperativo": "PAR FSC UMBRIA"
    },
    {
        "codProgrammaOperativo": "2018AREAINTVALD",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE VALLE D'AOSTA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP020",
        "descProgrammaOperativo": "POR FESR VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP011",
        "descProgrammaOperativo": "POR FSE VALLE D'AOSTA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP016",
        "descProgrammaOperativo": "POR FSE BASILICATA"
    },
    {
        "codProgrammaOperativo": "2016PATTICAL",
        "descProgrammaOperativo": "PATTO CALABRIA"
    },
    {
        "codProgrammaOperativo": "2007FR002FA003",
        "descProgrammaOperativo": "PAR FSC FRIULI-VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP013",
        "descProgrammaOperativo": "POR FESR MARCHE"
    },
    {
        "codProgrammaOperativo": "2017AREAINTMARC",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE MARCHE SERVIZI"
    },
    {
        "codProgrammaOperativo": "2016MEFDTFSC001",
        "descProgrammaOperativo": "METANIZZAZIONE MEZZOGIORNO"
    },
    {
        "codProgrammaOperativo": "2017POINFRASFSC",
        "descProgrammaOperativo": "PIANO FSC INFRASTRUTTURE"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP005",
        "descProgrammaOperativo": "POR FESR P.A. BOLZANO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP007",
        "descProgrammaOperativo": "POR FSE LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "2014TC16RFCB035",
        "descProgrammaOperativo": "PROGRAMMA FESR INTERREG ITALIA-SVIZZERA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP012",
        "descProgrammaOperativo": "POR FESR LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "2016PATTILOMB",
        "descProgrammaOperativo": "PATTO LOMBARDIA"
    },
    {
        "codProgrammaOperativo": "2007IT162PO012",
        "descProgrammaOperativo": "POR CRO FESR TOSCANA"
    },
    {
        "codProgrammaOperativo": "2007TO003FA012",
        "descProgrammaOperativo": "PAR FSC TOSCANA"
    },
    {
        "codProgrammaOperativo": "FSCMUSEOTERME",
        "descProgrammaOperativo": "MUSEO DELLE TERME DI MONTECATINI"
    },
    {
        "codProgrammaOperativo": "2014IT06RDRP010",
        "descProgrammaOperativo": "PSR FEASR TOSCANA"
    },
    {
        "codProgrammaOperativo": "2018AREAINTTOSC",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE TOSCANA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2017TOPIOMBIFSC",
        "descProgrammaOperativo": "RIQUALIFICAZIONE POLO INDUSTRIALE DI PIOMBINO"
    },
    {
        "codProgrammaOperativo": "2018REGTOSCFSC",
        "descProgrammaOperativo": "PRESIDIO OSPEDALIERO DI PRATO"
    },
    {
        "codProgrammaOperativo": "2018TOSPIOMFSC",
        "descProgrammaOperativo": "RICONVERSIONE INDUSTRIALE DEL PORTO DI PIOMBINO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP018",
        "descProgrammaOperativo": "POR FSE P.A. TRENTO"
    },
    {
        "codProgrammaOperativo": "2014TC16RFCB052",
        "descProgrammaOperativo": "PROGRAMMA FESR INTERREG ITALIA-AUSTRIA"
    },
    {
        "codProgrammaOperativo": "2016PATTILAZ",
        "descProgrammaOperativo": "PATTO LAZIO"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP002",
        "descProgrammaOperativo": "POR FESR FSE PUGLIA"
    },
    {
        "codProgrammaOperativo": "2014IT16M2OP002:::2016PATTIPUG",
        "descProgrammaOperativo": "POR FESR FSE PUGLIA:::PATTO PUGLIA"
    },
    {
        "codProgrammaOperativo": "2016PATTIPUG",
        "descProgrammaOperativo": "PATTO PUGLIA"
    },
    {
        "codProgrammaOperativo": "2013UMXXXPAC00",
        "descProgrammaOperativo": "PROGRAMMA PAC UMBRIA"
    },
    {
        "codProgrammaOperativo": "2014TC16RFCB042",
        "descProgrammaOperativo": "PROGRAMMA FESR INTERREG ITALIA-CROAZIA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP012",
        "descProgrammaOperativo": "POR FSE VENETO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP017",
        "descProgrammaOperativo": "POR FSE P.A. BOLZANO"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP021",
        "descProgrammaOperativo": "POR FSE SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2007IT052PO016",
        "descProgrammaOperativo": "POR CRO FSE SARDEGNA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP020",
        "descProgrammaOperativo": "POR FSE CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2016POCCAMPAN01",
        "descProgrammaOperativo": "POC CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2016PATTICAMP:::2016POCCAMPAN01",
        "descProgrammaOperativo": "PATTO CAMPANIA:::POC CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2016MEFDTFSC001:::2016PATTICAMP",
        "descProgrammaOperativo": "METANIZZAZIONE MEZZOGIORNO:::PATTO CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2017AREAINTCAMP",
        "descProgrammaOperativo": "STRATEGIA AREE INTERNE REGIONE CAMPANIA SERVIZI"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP007:::2016PATTICAMP",
        "descProgrammaOperativo": "POR FESR CAMPANIA:::PATTO CAMPANIA"
    },
    {
        "codProgrammaOperativo": "2014IT05SFOP004",
        "descProgrammaOperativo": "POR FSE FRIULI-VENEZIA GIULIA"
    },
    {
        "codProgrammaOperativo": "2014IT16RFOP019",
        "descProgrammaOperativo": "POR FESR UMBRIA"
    }
];

let cicliProgrammazione = [
    {
        "codCicloProgrammazione": 1,
        "descCicloProgrammazione": "2007-2013"
    },
    {
        "codCicloProgrammazione": 2,
        "descCicloProgrammazione": "2014-2020"
    },
    {
        "codCicloProgrammazione": 3,
        "descCicloProgrammazione": "2021-2027"
    }
];

function remapProgettoToReport(p){
    let reportKeys = Object.keys(remap);
    let report = {};
    reportKeys.map(k=>{
        switch (k) {
            case 'ocCodProgrammaOperativo':
                report.ocCodProgrammaOperativo = randomOcCodProgrammaOperativo();
                break;
        
            case 'ocCodCicloProgrammazione':
                report.ocCodCicloProgrammazione = randomOcCodCicloProgrammazione();
                break;
            default:
                report[k] = p[remap[k]];
                break;
        }
    });
    return report;
}
function randomOcCodProgrammaOperativo() {
   return programmiOperativi[programmiOperativi.length * Math.random() | 0]['codProgrammaOperativo']
}

function randomOcCodCicloProgrammazione() {
    return cicliProgrammazione[cicliProgrammazione.length * Math.random() | 0]['codCicloProgrammazione']
}
let progetti = await fetch('https://api.monithon.eu/api/mapdata/listaProgetti');
progetti = await progetti.json();
let report = progetti.map(p => remapProgettoToReport(p));
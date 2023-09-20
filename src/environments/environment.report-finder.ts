// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { FullSemVer } from "../assets/version.json";

export const environment = {
    routes: [
        //rotte per report finder
        {
            path: 'about-page',
            loadChildren: () => import('../app/pages/about/about.module').then(m => m.AboutPagePageModule)
        },
        {
            path: 'courtesy/:destination',
            loadChildren: () => import('../app/pages/courtesy/courtesy.module').then(m => m.CourtesyPageModule)
        },
        {
            path: '',
            loadChildren: () => import('../app/pages/report-finder/report-finder.module').then(m => m.ReportFinderPageModule)
        },
        {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
        }],
    mode: 'reportFinder',
    production: false,
    monithonReportUrl: 'https://it.monithon.eu/report/view',
    mapbox: {
        //account monithon prod
        accessToken: 'pk.eyJ1IjoibW9uaXRob24iLCJhIjoiY2tuZWNsb2Y0MHdvejJwbzdzYWtoam9ociJ9.UNMDQ62eNCvZPoC0ITNOzA',
        style: 'mapbox://styles/monithon/cknee3k8n310r17s7ewa1coel?optimize=true',
        reportStyle: 'mapbox://styles/monithon/ckqwd2q5x1fvi17s45zqezrzy?optimize=true',

        //account lbrutti dev
        // accessToken: 'pk.eyJ1IjoibGJydXR0aSIsImEiOiJjaXl5NXMxNWswMDA2MzJwZGViZDNxOG05In0.R5OZB0r3ov9HeduzarkLjw',
        // style: 'mapbox://styles/lbrutti/ckioi1m7m4o0g17nrz5wydq5g/draft?optimize=true',
        // reportStyle:'mapbox://styles/lbrutti/ckquyct3w16ua17o1ohkz78t6',

        geocoderCountries: 'AT BE BG CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE GB'
    },
    server: {
        protocol: "https",
        ip: "api.monithon.eu",
        port: "80",
        apiroute: "api"
    },
    reportServer: {
        protocol: "https",
        ip: "it.monithon.eu",
        port: "80",
        apiroute: "api"
    },
    //[SM-92] : decommentare e sostituire con url corretta.
    langsUrl: 'https://api.dev.monithon.eu/api/langs',
    // translationServiceURL: '/assets/i18n/',
    translationServiceURL: 'https://projectfinder.monithon.eu/dev/assets/i18n/',
    version: FullSemVer,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.

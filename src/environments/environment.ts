// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { version } from "package.json";

export const environment = {
    production: false,
    monithonReportUrl:'https://it.monithon.eu/report/view',
    mapbox: {
        accessToken: 'pk.eyJ1IjoibGJydXR0aSIsImEiOiJjaXl5NXMxNWswMDA2MzJwZGViZDNxOG05In0.R5OZB0r3ov9HeduzarkLjw',
        style: 'mapbox://styles/lbrutti/ckioi1m7m4o0g17nrz5wydq5g/draft?optimize=true',
        reportStyle:'mapbox://styles/lbrutti/ckpcrsy37511318o48aiagzcz?optimize=true'
    },
    server:{
        protocol:"https",
        ip:"api.monithon.eu",
        port:"80",
        apiroute: "api"
    },
    version: version
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

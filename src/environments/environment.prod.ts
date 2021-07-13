import { version } from "package.json";

export const environment = {
    routes: [
        //rotte per project finder
        {
            path: '#wizard',
            loadChildren: () => import('../app/pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: 'wizard',
            loadChildren: () => import('../app/pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: 'wizard?desktop=1',
            loadChildren: () => import('../app/pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: '',
            loadChildren: () => import('../app/pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
        }
    ],
    mode: "projectFinder",
    production: true,
    monithonReportUrl: 'https://it.monithon.eu/report/view',
    mapbox: {
        //account mapbox monithon
        accessToken: 'pk.eyJ1IjoibW9uaXRob24iLCJhIjoiY2tuZWNsb2Y0MHdvejJwbzdzYWtoam9ociJ9.UNMDQ62eNCvZPoC0ITNOzA',
        style: 'mapbox://styles/monithon/cknee3k8n310r17s7ewa1coel?optimize=true',
        reportStyle: 'mapbox://styles/monithon/ckqwd2q5x1fvi17s45zqezrzy?optimize=true',

        //account mapbox lbrutti dev
        // accessToken: 'pk.eyJ1IjoibGJydXR0aSIsImEiOiJjaXl5NXMxNWswMDA2MzJwZGViZDNxOG05In0.R5OZB0r3ov9HeduzarkLjw',
        // style: 'mapbox://styles/lbrutti/ckioi1m7m4o0g17nrz5wydq5g/draft?optimize=true',
        // reportStyle: 'mapbox://styles/lbrutti/ckpcrsy37511318o48aiagzcz?optimize=true',
        // reportStyle: 'mapbox://styles/lbrutti/ckquyct3w16ua17o1ohkz78t6?optimize=true',
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
    version: version
};

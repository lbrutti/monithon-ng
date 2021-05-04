import { version } from "package.json";

export const environment = {
    production: true,
    monithonReportUrl: 'https://it.monithon.eu/report/view',
    mapbox: {
        accessToken: 'pk.eyJ1IjoibW9uaXRob24iLCJhIjoiY2tuZWNsb2Y0MHdvejJwbzdzYWtoam9ociJ9.UNMDQ62eNCvZPoC0ITNOzA',
        style: 'mapbox://styles/monithon/cknee3k8n310r17s7ewa1coel?optimize=true'
    },
    server: {
        protocol: "https",
        ip: "api.monithon.eu",
        port: "80",
        apiroute: "api"
    },
    version: version
};

import { Routes } from '@angular/router';

export class ConditionalRoutesHandler {
    static projectFinderRoutes: Routes = [
        //rotte per project finder
        {
            path: '#wizard',
            loadChildren: () => import('../pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: 'wizard',
            loadChildren: () => import('../pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: 'wizard?desktop=1',
            loadChildren: () => import('../pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: '',
            loadChildren: () => import('../pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
        },
        {
            path: 'about-page',
            loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPagePageModule)
        },
        {
            path: 'courtesy/:destination',
            loadChildren: () => import('../pages/courtesy/courtesy.module').then(m => m.CourtesyPageModule)
        },
        {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
        }
    ];

    static reportFinderRoutes: Routes = [
        //rotte per report finder
        {
            path: 'about-page',
            loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPagePageModule)
        },
        {
            path: 'courtesy/:destination',
            loadChildren: () => import('../pages/courtesy/courtesy.module').then(m => m.CourtesyPageModule)
        },
        {
            path: '',
            loadChildren: () => import('../pages/report-finder/report-finder.module').then(m => m.ReportFinderPageModule)
        },
        {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
        }];

    static getRoutesForMode(environment: any): Routes {
        console.log('ConditionalRoutesHandler');

        switch (environment.mode) {
            case "reportFinder":
                return ConditionalRoutesHandler.reportFinderRoutes;
            default:
                return ConditionalRoutesHandler.projectFinderRoutes;

        }
    }
}
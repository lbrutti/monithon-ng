import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '#wizard',
        loadChildren: () => import('./pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
    },
    {
        path: 'wizard',
        loadChildren: () => import('./pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
    },
    {
        path: 'wizard?desktop=1',
        loadChildren: () => import('./pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
    },
    {
        path: '',
        loadChildren: () => import('./pages/project-finder/project-finder.module').then(m => m.ProjectFinderPageModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
  {
    path: 'about-page',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPagePageModule)
  },
  {
    path: 'courtesy/:destination',
    loadChildren: () => import('./pages/courtesy/courtesy.module').then( m => m.CourtesyPageModule)
  },
  {
    path: 'report-finder',
    loadChildren: () => import('./pages/report-finder/report-finder.module').then( m => m.ReportFinderPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '#wizard',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'wizard',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
  {
    path: 'about-page',
    loadChildren: () => import('./about-page/about-page.module').then( m => m.AboutPagePageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'dettaglio', loadChildren: () => import('../dettaglio/dettaglio.module').then(m => m.DettaglioPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }

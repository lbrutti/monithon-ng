import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFinderPage } from './project-finder.page';

const routes: Routes = [
    {
        path: '',
        component: ProjectFinderPage,
        children: [
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectFinderPageRoutingModule { }

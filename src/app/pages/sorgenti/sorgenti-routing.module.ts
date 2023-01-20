import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorgentiPage } from './sorgenti.page';

const routes: Routes = [
  {
    path: '',
        component: SorgentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorgentiPageRoutingModule {}

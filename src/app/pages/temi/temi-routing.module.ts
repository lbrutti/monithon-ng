import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemiPage } from './temi.page';

const routes: Routes = [
  {
    path: '',
    component: TemiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemiPageRoutingModule {}

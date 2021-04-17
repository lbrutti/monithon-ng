import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtesyPage } from './courtesy.page';

const routes: Routes = [
  {
    path: '',
    component: CourtesyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtesyPageRoutingModule {}

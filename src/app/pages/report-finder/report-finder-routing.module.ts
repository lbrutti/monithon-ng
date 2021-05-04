import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportFinderPage } from './report-finder.page';

const routes: Routes = [
  {
    path: '',
    component: ReportFinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportFinderPageRoutingModule {}

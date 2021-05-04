import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportFinderPageRoutingModule } from './report-finder-routing.module';

import { ReportFinderPage } from './report-finder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportFinderPageRoutingModule
  ],
  declarations: [ReportFinderPage]
})
export class ReportFinderPageModule {}

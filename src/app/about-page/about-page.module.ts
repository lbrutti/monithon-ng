import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPagePageRoutingModule } from './about-page-routing.module';

import { AboutPage } from './about-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPagePageRoutingModule
  ],
  declarations: [AboutPage]
})
export class AboutPagePageModule {}

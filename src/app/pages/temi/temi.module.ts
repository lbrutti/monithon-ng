import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemiPageRoutingModule } from './temi-routing.module';

import { TemiPage } from './temi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemiPageRoutingModule
  ],
  declarations: [TemiPage]
})
export class TemiPageModule {}

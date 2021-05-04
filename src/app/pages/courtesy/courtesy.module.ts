import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtesyPageRoutingModule } from './courtesy-routing.module';

import { CourtesyPage } from './courtesy.page';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CourtesyPageRoutingModule,
        TranslocoModule
    ],
    declarations: [CourtesyPage]
})
export class CourtesyPageModule { }

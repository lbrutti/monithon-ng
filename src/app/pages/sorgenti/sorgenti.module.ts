import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorgentiPageRoutingModule } from './sorgenti-routing.module';

import { SorgentiPage } from './sorgenti.page';
import { MatChipsModule } from '@angular/material/chips';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SorgentiPageRoutingModule,
        MatChipsModule,
        TranslocoModule
    ],
    declarations: [SorgentiPage]
})
export class SorgentiPageModule { }

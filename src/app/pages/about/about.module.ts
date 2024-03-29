import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPagePageRoutingModule } from './about-routing.module';

import { TranslocoModule } from '@ngneat/transloco';
import { AboutPage } from './about.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPagePageRoutingModule,
        TranslocoModule
    ],
    declarations: [AboutPage]
})
export class AboutPagePageModule { }

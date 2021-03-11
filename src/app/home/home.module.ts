import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { TranslocoModule } from '@ngneat/transloco';


import { MatTooltipModule } from '@angular/material/tooltip';
import { MomentdateModule } from '../pipes/momentdate/momentdate.pipe.module';
import { CapitalizePipeModule } from '../pipes/capitalize/capitalize.pipe.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        MatExpansionModule,
        MatChipsModule,
        MatListModule,
        TranslocoModule,
        ScrollingModule,
        MatTooltipModule,
        MomentdateModule,
        CapitalizePipeModule
    ],
    declarations: [HomePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }

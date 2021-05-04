import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { TranslocoModule } from '@ngneat/transloco';


import { MatSelectModule } from '@angular/material/select';

import { MatSliderModule } from '@angular/material/slider';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MomentdateModule } from '../../pipes/momentdate/momentdate.pipe.module';
import { CapitalizePipeModule } from '../../pipes/capitalize/capitalize.pipe.module';
import { FormatDistanzaPipeModule } from '../../pipes/format-distanza/format-distanza.pipe.module';
import { UnescapePipeModule } from '../../pipes/unescape/unescape.pipe.module';
import { FixencodedcharsPipeModule } from '../../pipes/fixencodedchars/fixencodedchars.pipe.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        MatExpansionModule,
        MatChipsModule,
        MatListModule,
        MatSelectModule,
        TranslocoModule,
        ScrollingModule,
        MatTooltipModule,
        MomentdateModule,
        CapitalizePipeModule,
        FormatDistanzaPipeModule,
        UnescapePipeModule,
        FixencodedcharsPipeModule,
        MatSliderModule    ],
    declarations: [HomePage],
})
export class HomePageModule { }

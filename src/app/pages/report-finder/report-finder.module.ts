import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportFinderPageRoutingModule } from './report-finder-routing.module';

import { ReportFinderPage } from './report-finder.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { CapitalizePipeModule } from 'src/app/pipes/capitalize/capitalize.pipe.module';
import { FixencodedcharsPipeModule } from 'src/app/pipes/fixencodedchars/fixencodedchars.pipe.module';
import { FormatDistanzaPipeModule } from 'src/app/pipes/format-distanza/format-distanza.pipe.module';
import { MomentdateModule } from 'src/app/pipes/momentdate/momentdate.pipe.module';
import { UnescapePipeModule } from 'src/app/pipes/unescape/unescape.pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
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
        MatSliderModule,
        ReportFinderPageRoutingModule,
        NgSelectModule
    ],
    declarations: [ReportFinderPage]
})
export class ReportFinderPageModule { }

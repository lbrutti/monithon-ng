import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LangSwitcherComponent } from './lang-switcher.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule      ],
    declarations: [LangSwitcherComponent],
})
export class LangSwitcherModule { }

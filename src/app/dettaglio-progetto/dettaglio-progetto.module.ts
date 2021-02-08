import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioProgettoRoutingModule } from './dettaglio-progetto-routing.module';
import { DettaglioProgettoComponent } from './dettaglio-progetto.component';


@NgModule({
    declarations: [DettaglioProgettoComponent],
  imports: [
    CommonModule,
    DettaglioProgettoRoutingModule
  ]
})
export class DettaglioProgettoModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonithonApiService } from '../services/monithonApiService/monithon-api.service';

@Component({
    selector: 'app-dettaglio-progetto',
    templateUrl: './dettaglio-progetto.component.html',
    styleUrls: ['./dettaglio-progetto.component.scss'],
})
export class DettaglioProgettoComponent implements OnInit {
    routeState: { [k: string]: any; };
    codLocaleProgetto: string;

    constructor(private monithonApiService: MonithonApiService,
        private router: Router) {
        if (this.router.getCurrentNavigation().extras) {
            this.routeState = this.router.getCurrentNavigation().extras;
            if (this.routeState) {
                this.codLocaleProgetto = this.routeState.id ? this.routeState.id : '';
            }
        }
    }

    ngOnInit() {
        this.monithonApiService.getDettaglio(this.codLocaleProgetto)
            .subscribe({
                next : data=> console.dir(data),
                error : err => console.error(err)
            });
    }


}

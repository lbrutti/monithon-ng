import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/model/tema/tema.interface';
import { MonithonApiService } from 'src/app/services/monithonApiService/monithon-api.service';

@Component({
    selector: 'app-temi',
    templateUrl: './temi.page.html',
    styleUrls: ['./temi.page.scss'],
})
export class TemiPage implements OnInit, AfterViewInit {
    temi: Array<Tema>;

    constructor(private monithonApiService: MonithonApiService, private router:Router) { }

    ngOnInit() {
    }
    ngAfterViewInit() {
        this.monithonApiService.getTemi().toPromise()
            .then(data => {
                this.temi = data.temi;
                //create css variables for temi:
                this.temi.map((t:any) => {
                    document.documentElement.style.setProperty(`--monithon-tema-${t.ocCodTemaSintetico}-background`, t.stile.colore);
                });
            });

    }

    public goToTemaPreset(tema: Tema) {
        this.router.navigateByUrl(`/tema/${tema.ocCodTemaSintetico}`);
    }

}

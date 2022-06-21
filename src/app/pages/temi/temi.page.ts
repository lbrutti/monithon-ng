import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Tema } from 'src/app/model/tema/tema.interface';
import { MonithonApiService } from 'src/app/services/monithonApiService/monithon-api.service';

@Component({
    selector: 'app-temi',
    templateUrl: './temi.page.html',
    styleUrls: ['./temi.page.scss'],
})
export class TemiPage implements OnInit, AfterViewInit {
    temi: Array<Tema>;
    isMobile: boolean = false;

    constructor(private monithonApiService: MonithonApiService, private router: Router, private platform: Platform) { }

    ngOnInit() {
        let hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator['msMaxTouchPoints'] > 0;
        }
        let goodDevice = this.platform.is('desktop') || this.platform.is('tablet') || !hasTouchScreen;
        this.isMobile = !goodDevice;
    }
    ngAfterViewInit() {
        this.monithonApiService.getTemi().toPromise()
            .then(data => {
                this.temi = data.temi;
                //create css variables for temi:
                this.temi.map((t: any) => {
                    document.documentElement.style.setProperty(`--monithon-tema-${t.ocCodTemaSintetico}-background`, t.stile.colore);
                });
            });

    }

    public goToTemaPreset(tema: Tema) {
        this.router.navigateByUrl(`/tema/${tema.ocCodTemaSintetico}`);
    }

}

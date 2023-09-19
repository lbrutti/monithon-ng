import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import { Tema } from 'src/app/model/tema/tema.interface';
import { MonithonApiService } from 'src/app/services/monithonApiService/monithon-api.service';
import { AboutPage } from '../about/about.page';

@Component({
    selector: 'app-temi',
    templateUrl: './temi.page.html',
    styleUrls: ['./temi.page.scss'],
})
export class TemiPage implements OnInit, AfterViewInit {
    temi: Array<Tema>;
    isMobile: boolean = false;

    constructor(
        private monithonApiService: MonithonApiService,
        private router: Router,
        private platform: Platform,
        public translocoService: TranslocoService,
        public modalController: ModalController,

    ) { }

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


    //metodi per modale
    async openIonModal() {
        const modal = await this.modalController.create({
            component: AboutPage,
            cssClass: 'monithon-about-modal'
        });



        return await modal.present();
    }

    goToMonithon() {
        window.open("https://www.monithon.eu/", "_blank");
    }


    async switchLang() {
        let currentLang = this.translocoService.getActiveLang();
        let availableLangs: string[] = (this.translocoService.getAvailableLangs() as any[]).map((l: any) => (l as any).id || (l as string));
        let currentLangIdx = availableLangs.indexOf(currentLang);
        let nextLangIdx = (++currentLangIdx % availableLangs.length);
        this.translocoService.setActiveLang(availableLangs[nextLangIdx]);
    }

}

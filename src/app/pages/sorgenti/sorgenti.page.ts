import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import { Sorgente } from 'src/app/model/sorgente';
import { MonithonApiService } from 'src/app/services/monithonApiService/monithon-api.service';
import { AboutPage } from '../about/about.page';

@Component({
    selector: 'app-sorgenti',
    templateUrl: './sorgenti.page.html',
    styleUrls: ['./sorgenti.page.scss'],
})
export class SorgentiPage implements OnInit, AfterViewInit {
    sorgenti: Array<Sorgente>;
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
        this.monithonApiService.getSorgenti().toPromise()
            .then(data => {
                debugger;
                this.sorgenti = data.sorgenti;
                //create css variables for temi:
                this.sorgenti.map((s: any) => {
                    document.documentElement.style.setProperty(`--monithon-sorgente-${s.id}-background`, s.stile.colore);
                });
            });

    }

    public goToTemaPreset(sorgente: Sorgente) {
        this.router.navigateByUrl(`/tema/${sorgente.id}`);
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

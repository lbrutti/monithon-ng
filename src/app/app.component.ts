import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslocoService } from '@ngneat/transloco';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private platform: Platform,
        private statusBar: StatusBar,
        private translocoService: TranslocoService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {

    }
    ngOnInit(): void {
        this.initializeApp();

    }

    initializeApp() {
        this.platform.ready().then(() => {
            let urlParams = new URLSearchParams(window.location.search);
            let fromDesktop = urlParams.get('desktop') == "1";
            let destination = window.location.pathname;
            if (destination === '/') {
                destination = '';
            }
            this.translocoService.setDefaultLang('it');
            this.translocoService.setActiveLang('it');
            this.translocoService.selectTranslate(environment.mode)
                .subscribe(value => {
                    document.querySelector('title').textContent = value;
                });
            this.statusBar.styleDefault();

            // let hasTouchScreen = false;
            // if ("maxTouchPoints" in navigator) {
            //     hasTouchScreen = navigator.maxTouchPoints > 0;
            // } else if ("msMaxTouchPoints" in navigator) {
            //     hasTouchScreen = navigator['msMaxTouchPoints'] > 0;
            // }


            // let goodDevice = this.platform.is('desktop') || this.platform.is('tablet') || !hasTouchScreen;
            // if (!fromDesktop && !goodDevice) {
            //     this.router.navigate(['/courtesy', destination], { skipLocationChange: true });
            // }



        });
    }
}

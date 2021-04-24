import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslocoService } from '@ngneat/transloco';
import { Router } from '@angular/router';

import * as MobileDetect from 'mobile-detect';
import lodash from 'lodash';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        // private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translocoService: TranslocoService,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {

            let hasTouchScreen = false;
            if ("maxTouchPoints" in navigator) {
                hasTouchScreen = navigator.maxTouchPoints > 0;
            } else if ("msMaxTouchPoints" in navigator) {
                hasTouchScreen = navigator['msMaxTouchPoints'] > 0;
            } else {
                let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
                if (mQ && mQ.media === "(pointer:coarse)") {
                    hasTouchScreen = !!mQ.matches;
                } else if ('orientation' in window) {
                    hasTouchScreen = true; // deprecated, but good fallback
                }
            }

            const md = new MobileDetect(window.navigator.userAgent);
            const isMobileDetected = !lodash.isNil(md.mobile()) || !lodash.isNil(md.phone());
            // let isTablet = !lodash.isNil(md.tablet());

            if (isMobileDetected) {
                this.router.navigate(['/courtesy'], { skipLocationChange: true });
            }

            this.translocoService.setDefaultLang('it');
            this.translocoService.setActiveLang('it');
            this.statusBar.styleDefault();

            if (!this.platform.is('desktop') && !this.platform.is('tablet')) {
                this.router.navigate(['/courtesy'], {skipLocationChange:true});
            }

        });
    }
}

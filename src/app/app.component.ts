import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslocoService } from '@ngneat/transloco';
import { Router } from '@angular/router';

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
            this.translocoService.setDefaultLang('it');
            this.translocoService.setActiveLang('it');
            this.statusBar.styleDefault();

            if (!this.platform.is('desktop') && !this.platform.is('tablet')) {
                this.router.navigate(['/courtesy'], {skipLocationChange:true});
            }

        });
    }
}

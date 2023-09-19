import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { getBrowserLang, TranslocoService } from '@ngneat/transloco';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
        private http: HttpClient
    ) {

    }
    ngOnInit(): void {
        this.initializeApp();

    }

    initializeApp() {
        this.platform.ready()
            .then(() => {
                let destination = window.location.pathname;
                if (destination === '/') {
                    destination = '';
                }

                this.statusBar.styleDefault();
            }).then(() => this.http.get(environment.langsUrl).toPromise())
            .then((langs: string[]) => {
                this.translocoService.setActiveLang(getBrowserLang());
                this.translocoService.setAvailableLangs(langs);
                this.translocoService.selectTranslate(environment.mode)
                    .subscribe(value => {
                        document.querySelector('title').textContent = value;
                    });
            });

    }
}

import { HttpClient } from '@angular/common/http';
import {
    TRANSLOCO_LOADER,
    Translation,
    TranslocoLoader,
    TRANSLOCO_CONFIG,
    translocoConfig,
    TranslocoModule,
    getBrowserLang
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private http: HttpClient) {
    }
    getTranslation(lang: string) {
        return this.http.get<Translation>(`${environment.translationServiceURL}${lang}.json`);
    }
}

@NgModule({
    exports: [TranslocoModule],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: environment.availableLangs,
                defaultLang: getBrowserLang() || environment.availableLangs[0],
                fallbackLang: environment.availableLangs[0],
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: environment.production,
            })
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ]
})
export class TranslocoRootModule { }

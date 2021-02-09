import { HttpClient } from '@angular/common/http';
import {
    TRANSLOCO_LOADER,
    Translation,
    TranslocoLoader,
    TRANSLOCO_CONFIG,
    translocoConfig,
    TranslocoModule
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private http: HttpClient) {

        console.log('loaded trnasloceo');
    }
    getTranslation(lang: string) {
        console.log('getTranslation');

        return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}

@NgModule({
    exports: [TranslocoModule],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: ['it'],
                defaultLang: 'it',
                fallbackLang: 'it',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: environment.production,
            })
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ]
})
export class TranslocoRootModule { }

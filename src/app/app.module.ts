import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MonithonMockedService } from './services/monithonMockService/monithon-mocked.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { MomentdateModule } from './pipes/momentdate/momentdate.pipe.module';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { CapitalizePipeModule } from './pipes/capitalize/capitalize.pipe.module';
import { FormatDistanzaPipeModule } from './pipes/format-distanza/format-distanza.pipe.module';
registerLocaleData(localeIt);
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslocoRootModule,
        MomentdateModule,
        CapitalizePipeModule,
        FormatDistanzaPipeModule],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        MonithonMockedService,
        { provide: LOCALE_ID, useValue: "it" },
        CurrencyPipe,
    ],
    exports: [MomentdateModule, CapitalizePipeModule, FormatDistanzaPipeModule],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

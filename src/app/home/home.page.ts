import { Component, OnInit } from '@angular/core';
import { MonithonApiService } from '../services/monithonApiService/monithon-api.service';
import { MonithonMockedService } from '../services/monithonMockService/monithon-mocked.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        private monitonMockedService: MonithonMockedService,
        private monithonApiService: MonithonApiService) { }
    ngOnInit(): void {
        this.monitonMockedService.mirageJsServer();
        this.getProgetti();
        this.getDettaglio();
    }

    private getProgetti(): void {
        this.monithonApiService.getProgetti()
            .subscribe(response => {
                debugger;
                console.dir(response);
            }, error => console.error('errore in getProgetti'));
    }

    private getDettaglio(): void {
        this.monithonApiService.getDettaglio()
            .subscribe(response => {
                debugger;
                console.dir(response);
            }, error => console.error('errore in getDettaglio'));
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.page.html',
    styleUrls: ['./about-page.page.scss'],
})
export class AboutPage implements OnInit {

    @Input() modal_title: string;

    constructor(
        private modalController: ModalController,
        private translocoService: TranslocoService
    ) { }

    ngOnInit() { }

    async closeModal() {
        const close: string = "Modal Removed";
        await this.modalController.dismiss(close);
    }

}

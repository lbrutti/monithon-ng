import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.page.html',
    styleUrls: ['./about-page.page.scss'],
})
export class AboutPage implements OnInit {

    @Input() modal_title: string;
    public version: string = environment.version;
    constructor(
        private modalController: ModalController
    ) { }

    ngOnInit() { }

    async closeModal() {
        const close: string = "Modal Removed";
        await this.modalController.dismiss(close);
    }

}

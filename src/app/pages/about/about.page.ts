import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-about-page',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    @Input() modal_title: string;
    public mode: string = environment.mode;
    public version: string = environment.version;
    constructor(
        private modalController: ModalController
    ) {
    }

    ngOnInit() { }

    async closeModal(delay: number = 50) {
        const close: string = "Modal Removed";
        setTimeout(async () => {
            await this.modalController.dismiss(close);
        }, delay);
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-courtesy',
    templateUrl: './courtesy.page.html',
    styleUrls: ['./courtesy.page.scss'],
})
export class CourtesyPage implements OnInit {

    public version: string = environment.version;
    public destination: string = '/';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => this.destination = params['destination']);
    }

}

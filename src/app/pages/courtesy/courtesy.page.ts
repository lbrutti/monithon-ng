import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courtesy',
  templateUrl: './courtesy.page.html',
  styleUrls: ['./courtesy.page.scss'],
})
export class CourtesyPage implements OnInit {

    public version: string = environment.version;

  constructor() { }

  ngOnInit() {
  }

}

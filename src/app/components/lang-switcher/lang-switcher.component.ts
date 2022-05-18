import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-lang-switcher',
    templateUrl: './lang-switcher.component.html',
    styleUrls: ['./lang-switcher.component.scss'],
})
export class LangSwitcherComponent implements OnInit {
    public availableLangs: string[];
    public currentLang: string;

    @Input() onChangeLang: Function;
    @Output() changeLang = new EventEmitter();;
    constructor(private translocoService: TranslocoService) {

    }

    ngOnInit() {
        this.availableLangs = (this.translocoService.getAvailableLangs() as string[]);
        this.currentLang = this.translocoService.getActiveLang();

        console.log(this.availableLangs);

        console.log(this.currentLang)

    }

    getFlag(langCode){
        return `fi fi-${langCode.split('-')[1]}`.toLowerCase();
    }

    setCurrentLang(langCode){
        this.translocoService.setActiveLang(langCode);
        this.onChangeLang.apply(this, [langCode]);
    }

}

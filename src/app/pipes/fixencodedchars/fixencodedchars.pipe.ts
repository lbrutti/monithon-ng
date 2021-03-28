import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fixencodedchars'
})
export class FixencodedcharsPipe implements PipeTransform {
    replaceDict: any[] = [
        { 'searchFor': /√Ç¬ø/gi, 'with': '"' },
        { 'searchFor': /√É¬©/gi, 'with': 'é' },
        { 'searchFor': /√É¬Æ/gi, 'with': 'é' },
        { 'searchFor': /Â/gi, 'with': '-' },
        { 'searchFor': /ã/gi, 'with': 'à' }
    ];
    transform(value: string = ''): string {
        let res = '';
        if (value) {
            res = value;
            this.replaceDict.map(replace => (res = res.replace(replace.searchFor, replace.with)))
        }
        return res;
    }

}

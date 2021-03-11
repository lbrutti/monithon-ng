import { Pipe, PipeTransform } from '@angular/core';
import { takeWhile } from 'lodash';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: string=''): unknown {
        let paragraphs = value.split('.');
        let capitalizedParagraphs = paragraphs.map(p => {
            let firstLetter = p[0] || '';
            let tail = p.substring(1) || '';
            let capitalized = firstLetter.toUpperCase() + tail.toLowerCase();
            return capitalized;
        });
        return capitalizedParagraphs.join('.');
    }

}

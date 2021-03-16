import { Pipe, PipeTransform } from '@angular/core';
import lodash from 'lodash';

@Pipe({
    name: 'formatDistanza'
})
export class FormatDistanzaPipe implements PipeTransform {

    transform(value: number, uom: string = 'km'): string {
        let res = '-';
        if (!lodash.isNil(value)) {
            res = value.toFixed(2) + ' ' + uom;
        }
        return res;
    }

}

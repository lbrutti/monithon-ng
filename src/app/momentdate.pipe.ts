import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'momentdate'
})
export class MomentdatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return moment(value, 'YYYYMMDD');
  }

}

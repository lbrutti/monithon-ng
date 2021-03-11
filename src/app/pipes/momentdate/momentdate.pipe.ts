import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'momentdate'
})
export class MomentdatePipe implements PipeTransform {

  transform(value: number|string, inputFormat:string): unknown {
      if(value){
          return moment(value, inputFormat);
      }
  }

}

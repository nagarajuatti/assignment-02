import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class customDate implements PipeTransform {

      transform(value: any, formatType: string): any {

      const seperator = formatType[formatType.search(/[-/]/g)];
    // format the date
    let val = moment(value)
    .format(formatType)
    .toString()
    .split(seperator)
    .map(v => (typeof v === 'string' && v.length > 2 ? v : parseInt(v).toString()))
    .join(seperator);
    return val;
  }

}
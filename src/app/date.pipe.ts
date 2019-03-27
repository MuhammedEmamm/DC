import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefilter'
})
export class DatePipe implements PipeTransform {

  transform(items: any[], field: string, value: string, value2: string): any[] {
    if (!value && !value2) return items;
    let s = new Date(value);
    let e = new Date(value2);
    s.setHours(0);
    s.setMinutes(0);
    s.setSeconds(0);
    e.setHours(24);
    e.setMinutes(59);
    e.setSeconds(59);
    return items.filter(it => new Date(it[field]) >= s && new Date(it[field]) <= e);

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string, field1?: string, value1?: string, field2?: string, value2?: string): any[] {
    if (!value && !value1 && !value2) return items;
    else if (!value && !value1 && value2) return items.filter(it => it[field2].toString().search(value2) != -1);
    else if (value && !value1 && !value2) return items.filter(it => it[field].toString().search(value) != -1);
    else if (!value && value1 && !value2) return items.filter(it => it[field1].toString().search(value1) != -1);
    else if (!value && value1 && value2) return items.filter(it => it[field1].toString().search(value1) != -1&& it[field2].toString().search(value2) != -1);
    else if (value && !value1 && value2) return items.filter(it => it[field].toString().search(value)!= -1 && it[field2].toString().search(value2) != -1);
    else if (value && value1 && !value2) return items.filter(it => it[field].toString().search(value)!= -1 && it[field1].toString().search(value1) != -1);
    else return items.filter(it => it[field].toString().search(value)!= -1 && it[field1].toString().search(value1) != -1 && it[field2].toString().search(value2) != -1);

  }


}

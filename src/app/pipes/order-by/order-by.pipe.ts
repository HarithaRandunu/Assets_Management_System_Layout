import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];
    value.sort((a: any, b: any) => {
      let x = a[sortField];
      let y = b[sortField];
      let multiplier = 1;

      if(sortDirection === 'desc') {
        multiplier = -1;
      } else {
        multiplier = 1;
      }

      if (x < y) {
        return -1 * multiplier;
      } else if (x > y) {
        return 1 * multiplier;
      } else {
        return 0;
      }

    }
    );

    return value;
  }

}

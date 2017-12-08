import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSort'
})
export class SortPipe implements PipeTransform {
    transform(value: string[], field: string): any[] {
          value.sort((a: any, b: any) => {
              if (a[field] < b[field]) {
                    return -1;
              } else if (a[field] > b[field]) {
                return 1;
              } else {
                return 0;
              }
          });
          return value;
    }
}

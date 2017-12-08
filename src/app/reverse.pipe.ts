import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appReverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: string): string {
      return (value === '') ? '' : this.transform(value.substring(1)) + value.charAt(0);
      // return value.split('').reverse().join('');
    }

}

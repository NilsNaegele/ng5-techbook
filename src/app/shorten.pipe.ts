import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'appShorten'
})
export class ShortenPipe implements PipeTransform {
      transform(value: any, limit: number) {
          return value.length > limit ? value.substr(0, limit) + ' ...' : value ;
      }

}

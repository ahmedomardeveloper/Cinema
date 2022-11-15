import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getyear'
})
export class GetyearPipe implements PipeTransform {

  transform(val: string): unknown {
    return val.substring(0, 4);
  }

}

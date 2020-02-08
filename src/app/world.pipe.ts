import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'world'
})
export class WorldPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

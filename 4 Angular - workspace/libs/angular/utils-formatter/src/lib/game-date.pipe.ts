import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDate'
})
export class GameDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'gameDate'
})
export class GameDatePipe implements PipeTransform {

  transform(date: Date | string, format: string = 'yyyy-MM-dd'): string {
    date = new Date(date);
    date.setDate(date.getDate());

    return new DatePipe('en-US').transform(date, format);
  }

}

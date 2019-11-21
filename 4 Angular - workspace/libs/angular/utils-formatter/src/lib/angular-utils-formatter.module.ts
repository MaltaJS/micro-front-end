import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDatePipe } from './game-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [GameDatePipe],
  exports: [GameDatePipe]
})
export class AngularUtilsFormatterModule {}

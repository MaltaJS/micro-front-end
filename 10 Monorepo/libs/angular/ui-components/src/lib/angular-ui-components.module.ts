import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { AngularUtilsFormatterModule } from '@maltajs/angular/utils-formatter';

@NgModule({
  imports: [CommonModule, AngularUtilsFormatterModule],
  declarations: [GameCardComponent],
  exports: [GameCardComponent]
})
export class AngularUiComponentsModule {}

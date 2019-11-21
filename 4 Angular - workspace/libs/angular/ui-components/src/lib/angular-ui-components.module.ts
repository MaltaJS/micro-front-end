import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameCardComponent, CardComponent],
  exports: [GameCardComponent, CardComponent]
})
export class AngularUiComponentsModule {}

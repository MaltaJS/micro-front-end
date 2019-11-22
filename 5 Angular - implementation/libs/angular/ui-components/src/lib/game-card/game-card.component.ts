import { Component, OnInit, Input } from '@angular/core';
import { Sport } from '@maltajs/angular/data-access-angular';

@Component({
  selector: 'maltajs-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() sport: Sport;
  
  constructor() { }

  ngOnInit() {
  }

}

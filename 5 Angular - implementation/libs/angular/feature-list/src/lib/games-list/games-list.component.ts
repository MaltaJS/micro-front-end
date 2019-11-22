import { Component, OnInit } from '@angular/core';
import { Sport } from '@maltajs/angular/data-access-angular';
import { AngularService } from '@maltajs/angular/data-access-angular';

@Component({
  selector: 'maltajs-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  sports: Sport[] = [];

  constructor(private angularService: AngularService) { }

  ngOnInit() {
    this.angularService.getSports().subscribe((sports: Sport[]) => {
      this.sports = sports;
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [GamesListComponent]
})
export class AngularFeatureListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { AngularUiComponentsModule } from '@maltajs/angular/ui-components';
import { AngularDataAccessAngularModule } from '@maltajs/angular/data-access-angular';

@NgModule({
  imports: [
    CommonModule,
    AngularUiComponentsModule,
    AngularDataAccessAngularModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: GamesListComponent}
    ])
  ],
  declarations: [GamesListComponent]
})
export class AngularFeatureListModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ReactRendererComponent } from './react.component';

@NgModule({
  declarations: [AppComponent, ReactRendererComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'angular',
        loadChildren: () => import('@maltajs/angular/src').then(
          module => module.AppModule
        )
      },
      {
        path: 'react',
        component: ReactRendererComponent
      },
      {
        path: '',
        redirectTo: 'angular/feature-list', pathMatch: 'full'
      }
    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'angular-feature-list',
          loadChildren: () =>
            import('@maltajs/angular/feature-list').then(
              module => module.AngularFeatureListModule
            )
        },
        { path: "", redirectTo: "angular-feature-list", pathMatch: "full"}
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

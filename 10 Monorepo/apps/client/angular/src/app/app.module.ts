import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild(
      [
        {
          path: '',
          component: AppComponent,
          children: [
            {
              path: 'feature-list',
              loadChildren: () =>
                import('@maltajs/angular/feature-list').then(
                  module => module.AngularFeatureListModule
                )
            }
          ]
        },
        { path: "", redirectTo: "/angular/feature-list", pathMatch: "full"}
      ]
    )
  ],
  providers: []
})
export class AppModule {}

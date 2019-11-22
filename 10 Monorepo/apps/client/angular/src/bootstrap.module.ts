import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { AppModule } from './app/app.module';

@NgModule({
    declarations: [BootstrapComponent],
    imports: [
        BrowserModule,
        AppModule,
        RouterModule.forRoot(
            [
                {
                    path: 'angular',
                    loadChildren: () => import('./app/app.module').then(module => module.AppModule)
                },
                { path: '', redirectTo: '/angular/feature-list', pathMatch: 'full' }
            ],
            { initialNavigation: 'enabled' }
        )
    ],
    bootstrap: [BootstrapComponent]
})
export class BootstrapModule {}
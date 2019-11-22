import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BootstrapModule } from './bootstrap.module';
import { environment } from './environments/environment';

import { defineCustomElements } from 'ui/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(BootstrapModule)
  .catch(err => console.error(err));

  defineCustomElements(window)

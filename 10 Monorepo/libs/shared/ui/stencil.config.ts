import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'maltajs',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'ui/',
      directivesProxyFile: './wrappers/angular/maltajs-ui.ts'
    }),
    reactOutputTarget({
      componentCorePackage: 'ui/',
      proxiesFile: './wrappers/react/maltajs-ui.ts'
    })
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};

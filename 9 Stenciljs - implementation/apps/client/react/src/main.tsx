import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

import { applyPolyfills, defineCustomElements } from 'ui/loader';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements(window);
})
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import React from 'react';
import ReactDom from 'react-dom';

import App from '@maltajs/react/src/app/app';

@Component({
    selector: 'maltajs-react-renderer',
    template: `<div id="react-renderer"></div>`
})
export class ReactRendererComponent implements AfterViewInit, OnDestroy {
    app: any;

    ngAfterViewInit() {
        this.app = ReactDom.render(
            React.createElement(App),
            document.getElementById('react-renderer')
        )
    }

    ngOnDestroy() {
        //ReactDom.unmountComponentAtNode(document.getElementById('react-renderer'))
    }
}
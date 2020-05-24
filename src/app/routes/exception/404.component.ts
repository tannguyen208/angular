import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'exception-404',
  template: `
    <h1>404</h1>
    <button routerLink="/" nz-button nzType="primary">
      Back Home
    </button>
  `,
})
export class Exception404Component {}

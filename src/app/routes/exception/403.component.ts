import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'exception-403',
  template: `
    <h1>403</h1>
    <button routerLink="/" nz-button nzType="primary">
      Back Home
    </button>
  `,
})
export class Exception403Component {}

import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'exception-500',
  template: `
    <h1>500</h1>
    <button routerLink="/" nz-button nzType="primary">
      Back Home
    </button>
  `,
})
export class Exception500Component {}

import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exception-500',
  template: `
    <nz-result
      nzStatus="500"
      nzTitle="500"
      nzSubTitle="Sorry, there is an error on server."
      class="p-0 flex flex-col items-center justify-center"
    >
      <div nz-result-extra>
        <button routerLink="/" nz-button nzType="primary">
          Back Home
        </button>
      </div>
    </nz-result>
  `
})
export class Exception500Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}

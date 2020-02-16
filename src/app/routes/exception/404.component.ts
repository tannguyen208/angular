import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exception-404',
  template: `
    <nz-result
      nzStatus="404"
      nzTitle="404"
      nzSubTitle="Sorry, the page you visited does not exist."
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
export class Exception404Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}

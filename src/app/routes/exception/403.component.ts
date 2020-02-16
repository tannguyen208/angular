import { Component } from "@angular/core";
import { NzModalService } from "ng-zorro-antd";

@Component({
  selector: "exception-403",
  template: `
    <nz-result
      nzStatus="403"
      nzTitle="403"
      nzSubTitle="Sorry, you are not authorized to access this page."
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
export class Exception403Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}

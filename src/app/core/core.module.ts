import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthGuard } from "@core/guard/auth.guard";
import { TokenInterceptor } from "@core/interceptors/token.interceptor";
import { RequestQueueInterceptor } from "@core/interceptors/request-queue.interceptor";
import { throwIfAlreadyLoaded } from "@core/guard/module-import.guard";

const DIRECTIVES = [];

@NgModule({
  imports: [HttpClientModule],
  exports: [...DIRECTIVES],
  declarations: [...DIRECTIVES],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestQueueInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}

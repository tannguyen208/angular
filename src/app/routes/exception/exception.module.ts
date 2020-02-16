import { NgModule } from "@angular/core";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";

import { ExceptionRouting } from "./exception.routing";

import { Exception403Component } from "./403.component";
import { Exception404Component } from "./404.component";
import { Exception500Component } from "./500.component";

const COMPONENTS = [
  Exception403Component,
  Exception404Component,
  Exception500Component
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ExceptionRouting
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class ExceptionModule {}

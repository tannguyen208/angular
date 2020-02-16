import { NgModule } from "@angular/core";
import { CoreModule } from '@core/core.module';
import { SharedModule } from "@shared/shared.module";

import { DefaultLayoutComponent } from "./default/default.component";
import { HeaderComponent as HeaderDefaultLayoutComponent } from "./default/header/header.component";
import { FooterComponent as FooterDefaultLayoutComponent } from "./default/footer/footer.component";
import { SidebarComponent as SidebarDefaultLayoutComponent } from "./default/sidebar/sidebar.component";

const COMPONENTS = [
  DefaultLayoutComponent,
  HeaderDefaultLayoutComponent,
  FooterDefaultLayoutComponent,
  SidebarDefaultLayoutComponent
];
const HEADER_COMPONENTS = [];
const PASSPORT = [];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...HEADER_COMPONENTS,
    ...PASSPORT
  ],
  exports: [
    ...COMPONENTS,
    ...PASSPORT
  ]
})
export class LayoutModule {}

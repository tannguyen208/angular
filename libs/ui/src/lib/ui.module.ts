import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './sidebar/sidebar.component';

const THIRD_MODULES = [FlexLayoutModule];
const COMPONENTS = [SidebarComponent];

@NgModule({
  imports: [CommonModule, ...THIRD_MODULES],
  exports: [CommonModule, ...THIRD_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class UiModule {}

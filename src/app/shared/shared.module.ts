import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

const MODULES = {
  ANGULAR: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  OTHERS: [NgZorroAntdModule]
};

@NgModule({
  imports: [...MODULES.ANGULAR, ...MODULES.OTHERS],
  exports: [...MODULES.ANGULAR, ...MODULES.OTHERS]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const MODULES = {
  ANGULAR: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  OTHERS: []
};

@NgModule({
  imports: [...MODULES.ANGULAR, ...MODULES.OTHERS],
  exports: [...MODULES.ANGULAR, ...MODULES.OTHERS]
})
export class SharedModule {}

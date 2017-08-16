import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgButtonModule } from './ag-button/ag-button.module';
import { AgIconModule } from './ag-icon/ag-icon.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AgButtonModule,
    AgIconModule,
  ],
})
export class AngineModule { }

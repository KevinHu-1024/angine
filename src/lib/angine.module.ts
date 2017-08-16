import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgButtonModule } from './ag-button/ag-button.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AgButtonModule,
  ],
})
export class AngineModule { }

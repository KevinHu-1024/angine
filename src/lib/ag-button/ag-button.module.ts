import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgButtonComponent } from './ag-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgButtonComponent,
  ],
  exports: [
    AgButtonComponent,
  ],
})
export class AgButtonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgButtonComponent } from './ag-button.component';
import { AgIconModule } from '../ag-icon/ag-icon.module';

@NgModule({
  imports: [
    CommonModule,
    AgIconModule,
  ],
  declarations: [
    AgButtonComponent,
  ],
  exports: [
    AgButtonComponent,
  ],
})
export class AgButtonModule { }

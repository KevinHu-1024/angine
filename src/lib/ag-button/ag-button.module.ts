import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgButtonComponent, AgButtonGroupComponent, RemoveHost } from './ag-button.component';
import { AgIconModule } from '../ag-icon/ag-icon.module';

@NgModule({
  imports: [
    CommonModule,
    AgIconModule,
  ],
  declarations: [
    AgButtonComponent,
    AgButtonGroupComponent,
    RemoveHost,
  ],
  exports: [
    AgButtonComponent,
    AgButtonGroupComponent,
    RemoveHost,
  ],
})
export class AgButtonModule { }

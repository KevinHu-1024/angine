import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngineModule } from '../lib/angine.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

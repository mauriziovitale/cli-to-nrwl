import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentLibModule } from 'content-lib';
import { ProcessLibModule } from 'process-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentLibModule,
    ProcessLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

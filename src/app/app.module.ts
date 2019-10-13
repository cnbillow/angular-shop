import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTapComponent } from './scrollable-tap/scrollable-tap.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

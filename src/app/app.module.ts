import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ScrollableTapComponent, ImageSliderComponent ,HorizonGridComponent} from './components';


@NgModule({
  declarations: [
    AppComponent,
    // ScrollableTapComponent,
    // ImageSliderComponent,
    // HorizonGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

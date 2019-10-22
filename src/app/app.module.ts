import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule, ParamInterceptor} from './home';
import { registerLocaleData } from '@angular/common';

import localeZh from '@angular/common/locales/zh-Hans';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
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
    SharedModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ParamInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(localeZh,'zh');
  }
}

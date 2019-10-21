import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableTapComponent, ImageSliderComponent, HorizonGridComponent } from './components';



@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizonGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizonGridComponent
  ]
})
export class SharedModule { }

import { GridItemTitleDirective } from './directives/grid-item-title.directive';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ScrollableTapComponent, 
  ImageSliderComponent, 
  HorizonGridComponent, 
  CountDownComponent 
} from './components';
import { GridItemDirective } from './directives';



@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizonGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent
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
    HorizonGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent
  ]
})
export class SharedModule { }
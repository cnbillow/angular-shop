import { DialogModule } from './../dialog';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  TagDirective,
  AvatarDirective,
} from './directives';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ScrollableTapComponent, 
  ImageSliderComponent, 
  HorizonGridComponent, 
  CountDownComponent, 
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent,
  ProductTileComponent,
  BackButtonComponent
} from './components';



@NgModule({
  declarations: [
    ScrollableTapComponent,
    ImageSliderComponent,
    HorizonGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent
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
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent,
    DialogModule
  ]
})
export class SharedModule { }

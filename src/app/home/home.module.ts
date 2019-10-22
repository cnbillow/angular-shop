
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ],
  imports: [
    // CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

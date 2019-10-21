import { HomeContainerComponent } from './components';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailComponent } from './components';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent
  ],
  imports: [
    // CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

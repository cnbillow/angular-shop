import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

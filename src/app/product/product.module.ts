import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }

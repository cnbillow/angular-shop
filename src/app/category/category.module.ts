import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }

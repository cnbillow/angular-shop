import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RecommendRoutingModule,
    SharedModule
  ]
})
export class RecommendModule { }

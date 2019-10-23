import { MyContainerComponent } from './components';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';


@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    // CommonModule,
    MyRoutingModule,
    SharedModule
  ]
})
export class MyModule { }

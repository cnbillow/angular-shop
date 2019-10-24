import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent, GroupItemComponent, GroupShortListComponent} from './components';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent
  ],
  imports: [
    // CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }

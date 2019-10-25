import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { 
  ProductContainerComponent, 
  GroupItemComponent, 
  GroupShortListComponent, 
  ProductVariantDialogComponent, 
  ProductAmountComponent,
  ConfirmOrderComponent,
  PaymentComponent
} from './components';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ConfirmOrderComponent,
    PaymentComponent
  ],
  imports: [
    // CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }

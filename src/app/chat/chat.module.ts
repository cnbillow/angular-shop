import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }

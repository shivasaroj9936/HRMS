import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeaveRoutingModule } from './floating-leave-routing.module';
import { FloatingLeaveComponent } from './floating-leave.component';


@NgModule({
  declarations: [
    FloatingLeaveComponent
  ],
  imports: [
    CommonModule,
    FloatingLeaveRoutingModule
  ]
})
export class FloatingLeaveModule { }

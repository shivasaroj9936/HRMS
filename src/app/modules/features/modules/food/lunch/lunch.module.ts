import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchRoutingModule } from './lunch-routing.module';
import { LunchComponent } from './lunch.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { LunchCalendarModule } from '../lunch-calendar/lunch-calendar.module';
import { CouponsHistoryComponent } from '../coupons-history/coupons-history.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LunchComponent,
    CouponsHistoryComponent

  ],
  imports: [
    CommonModule,
    LunchRoutingModule,
    LunchCalendarModule,
    CouponLegendModule,
    MatDialogModule  ,
    MatButtonModule
  ]
})
export class LunchModule { }

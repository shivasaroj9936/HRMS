import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { BreadcrumbModule } from 'src/app/modules/shared/breadcrumb/breadcrumb.module';
import { RatingDialogComponent } from './components/rating-dialog/rating-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MyPerformanceComponent,
    RatingDialogComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    CommonDropdownModule,
    BreadcrumbModule,
    MatDialogModule
  ]
})
export class MyPerformanceModule { }

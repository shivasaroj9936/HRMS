import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { BreadcrumbModule } from 'src/app/modules/shared/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    MyPerformanceComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    CommonDropdownModule,
    BreadcrumbModule
  ]
})
export class MyPerformanceModule { }

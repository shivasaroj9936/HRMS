import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningsRoutingModule } from './job-openings-routing.module';
import { JobOpeningsComponent } from './job-openings.component';


@NgModule({
  declarations: [
    JobOpeningsComponent
  ],
  imports: [
    CommonModule,
    JobOpeningsRoutingModule
  ]
})
export class JobOpeningsModule { }

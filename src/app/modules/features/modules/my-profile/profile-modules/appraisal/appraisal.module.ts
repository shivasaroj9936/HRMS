import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalRoutingModule } from './appraisal-routing.module';
import { AppraisalComponent } from './appraisal.component';


@NgModule({
  declarations: [
    AppraisalComponent
  ],
  imports: [
    CommonModule,
    AppraisalRoutingModule
  ]
})
export class AppraisalModule { }

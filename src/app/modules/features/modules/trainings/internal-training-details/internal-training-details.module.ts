import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalTrainingDetailsRoutingModule } from './internal-training-details-routing.module';
import { InternalTrainingDetailsComponent } from './internal-training-details.component';


@NgModule({
  declarations: [
    InternalTrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    InternalTrainingDetailsRoutingModule
  ]
})
export class InternalTrainingDetailsModule { }

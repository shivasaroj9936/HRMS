import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInternalTrainingsRoutingModule } from './my-internal-trainings-routing.module';
import { MyInternalTrainingsComponent } from './my-internal-trainings.component';


@NgModule({
  declarations: [
    MyInternalTrainingsComponent
  ],
  imports: [
    CommonModule,
    MyInternalTrainingsRoutingModule
  ]
})
export class MyInternalTrainingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';


@NgModule({
  declarations: [
    QualificationComponent
  ],
  imports: [
    CommonModule,
    QualificationRoutingModule
  ]
})
export class QualificationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPitchRoutingModule } from './my-pitch-routing.module';
import { MyPitchComponent } from './my-pitch.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    MyPitchComponent
  ],
  imports: [
    CommonModule,
    MyPitchRoutingModule,
    CommonTableModule
  ]
})
export class MyPitchModule { }

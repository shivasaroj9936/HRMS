import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPitchRoutingModule } from './add-pitch-routing.module';
import { AddPitchComponent } from './add-pitch.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';



@NgModule({
  declarations: [
    AddPitchComponent
  ],




  imports: [
    CommonModule,
    AddPitchRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ValidationErrorModule,
  ]
})
export class AddPitchModule { }

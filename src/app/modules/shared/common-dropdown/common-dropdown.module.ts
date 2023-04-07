import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDropdownComponent } from './common-dropdown.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommonDropdownComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorModule,
    MatIconModule
    
  ],
  exports:[CommonDropdownComponent]
})
export class CommonDropdownModule { }

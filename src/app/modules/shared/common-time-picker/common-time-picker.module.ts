import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTimePickerComponent } from './common-time-picker.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommonTimePickerComponent
  ],
  imports: [
    CommonModule,
    NgxMatTimepickerModule,
    MatFormFieldModule,
    ValidationErrorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule

  ],
  exports:[CommonTimePickerComponent]
})
export class CommonTimePickerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDatePickerComponent } from './common-date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";


@NgModule({
  declarations: [
    CommonDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    // MatMomentDateModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule


  ],
  exports:[CommonDatePickerComponent]
})
export class CommonDatePickerModule { }

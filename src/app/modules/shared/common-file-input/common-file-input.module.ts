import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFileInputComponent } from './common-file-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommonFileInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorModule,
    MatIconModule
  ],
  exports:[CommonFileInputComponent]
})
export class CommonFileInputModule { }

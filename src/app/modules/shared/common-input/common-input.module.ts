import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from './common-input.component';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoSpecialCharectorModule } from 'src/app/directives/no-special-charector/no-special-charector.module';
import { AvoidFirstSpaceModule } from 'src/app/directives/avoid-first-space/avoid-first-space.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommonInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorModule,
    NoSpecialCharectorModule,
    AvoidFirstSpaceModule,
    MatIconModule
  ],
  exports:[CommonInputComponent]
})
export class CommonInputModule { }

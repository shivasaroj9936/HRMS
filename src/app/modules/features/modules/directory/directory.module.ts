import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';


@NgModule({
  declarations: [
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule, 
    FormsModule,
    ValidationErrorModule,
    CommonInputModule,
    CommonDropdownModule
  ]
})
export class DirectoryModule { }

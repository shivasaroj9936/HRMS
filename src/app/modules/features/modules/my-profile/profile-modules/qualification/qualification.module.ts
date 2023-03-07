import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { AvoidFirstSpaceModule } from 'src/app/directives/avoid-first-space/avoid-first-space.module';


@NgModule({
  declarations: [
    QualificationComponent
  ],
  imports: [
    CommonModule,
    QualificationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule,
    CommonDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ValidationErrorModule,
    CommonTableModule,
    AvoidFirstSpaceModule
  ]
})
export class QualificationModule { }

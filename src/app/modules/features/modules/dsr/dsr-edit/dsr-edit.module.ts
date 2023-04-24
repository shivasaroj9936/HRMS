import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrEditRoutingModule } from './dsr-edit-routing.module';
import { DsrEditComponent } from './dsr-edit.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonTextEditorModule } from 'src/app/modules/shared/common-text-editor/common-text-editor.module';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { CommonTimePickerModule } from 'src/app/modules/shared/common-time-picker/common-time-picker.module';


@NgModule({
  declarations: [
    DsrEditComponent
  ],
  imports: [
    CommonModule,
    DsrEditRoutingModule,
    CommonDropdownModule,
    CommonInputModule,MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonTextEditorModule,
    CommonDatePickerModule,
    CommonTimePickerModule
  ]
})
export class DsrEditModule { }

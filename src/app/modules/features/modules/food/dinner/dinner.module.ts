import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerRoutingModule } from './dinner-routing.module';
import { DinnerComponent } from './dinner.component';
import { CommonDropdownModule } from 'src/app/modules/shared/common-dropdown/common-dropdown.module';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { CommonTextEditorModule } from 'src/app/modules/shared/common-text-editor/common-text-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DinnerComponent
  ],
  imports: [
    CommonModule,
    DinnerRoutingModule,
    CommonDropdownModule,
    CommonDatePickerModule,
    CommonTextEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class DinnerModule { }

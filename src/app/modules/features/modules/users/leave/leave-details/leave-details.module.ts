import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveDetailsRoutingModule } from './leave-details-routing.module';
import { LeaveDetailsComponent } from './leave-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    LeaveDetailsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class LeaveDetailsModule { }

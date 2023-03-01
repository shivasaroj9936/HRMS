import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOpeiningCardComponent } from './job-opeining-card.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    JobOpeiningCardComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[JobOpeiningCardComponent]
})
export class JobOpeiningCardModule { }

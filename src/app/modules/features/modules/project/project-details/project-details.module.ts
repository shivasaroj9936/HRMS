import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OverviewComponent } from './components/overview/overview.component';
import { NotesComponent } from './components/notes/notes.component';
import { DsrReportsComponent } from './components/dsr-reports/dsr-reports.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    OverviewComponent,
    NotesComponent,
    DsrReportsComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    MatTabsModule,
    CommonTableModule,
    MatExpansionModule,
    MatListModule
  ]
})
export class ProjectDetailsModule { }

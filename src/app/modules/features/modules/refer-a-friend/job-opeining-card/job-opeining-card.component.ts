import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReferalFormComponent } from '../referal-form/referal-form.component';

@Component({
  selector: 'app-job-opeining-card',
  templateUrl: './job-opeining-card.component.html',
  styleUrls: ['./job-opeining-card.component.scss']
})
export class JobOpeiningCardComponent implements OnInit {

  @Input() job:any;
  constructor( public dialog: MatDialog) { }


  ngOnInit(): void {
    
  }
  openJobReferalForm(data:any){
    this.dialog.open(ReferalFormComponent, {
      data:data,
    });
  }
}

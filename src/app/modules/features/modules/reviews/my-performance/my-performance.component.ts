import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MYPERFORMACE_VALUE } from 'src/app/interfaces/common.interface';
import {RatingDialogComponent} from 'src/app/modules/features/modules/reviews/my-performance/components/rating-dialog/rating-dialog.component'
@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {
  items=[1,3,4,4,3,2,2,2,23,3]
  yearFormControl = new FormControl(null);
  years=['2022','2023','2018']


  MYPERFORMACE_VALUE=  MYPERFORMACE_VALUE;



  
  

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openRatingDialog(){
    this.dialog.open(RatingDialogComponent,{

    })
  }
}

import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MYPERFORMACE_VALUE } from "src/app/interfaces/common.interface";
import { RatingDialogComponent } from "src/app/modules/features/modules/reviews/my-performance/components/rating-dialog/rating-dialog.component";
@Component({
  selector: "app-my-performance",
  templateUrl: "./my-performance.component.html",
  styleUrls: ["./my-performance.component.scss"],
})
export class MyPerformanceComponent implements OnInit {
  items = [1, 3, 4, 4, 3, 2, 2, 2, 23, 3];
  yearFormControl = new FormControl("2022");
  years = ["2022", "2023", "2018"];
  year = "2022";
  reviewData: any;
  performanceValue = MYPERFORMACE_VALUE;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.yearFormControl.valueChanges.subscribe((val) => {
      this.reviewData=this.performanceValue.reviewData.find((item)=>{
      return  item.year==val;
      });
      console.log(this.reviewData);
      
    });
  }
  get selectedYear(): number {
    return this.yearFormControl.value as number;
  }
  openRatingDialog(data:any) {
    this.dialog.open(RatingDialogComponent, {
      data:data
    });
  }
}

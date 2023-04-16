import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MYPERFORMACE_VALUE } from "src/app/interfaces/common.interface";
import { RatingDialogComponent } from "src/app/modules/features/modules/reviews/my-performance/components/rating-dialog/rating-dialog.component";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";
import { USERDATA } from "../../dashboard/interfaces/interfaces";
@Component({
  selector: "app-my-performance",
  templateUrl: "./my-performance.component.html",
  styleUrls: ["./my-performance.component.scss"],
})
export class MyPerformanceComponent implements OnInit {
  yearFormControl = new FormControl("2022");
  years = ["2022", "2023"];
  year = "2022";
  reviewData: any;
  performanceValue = MYPERFORMACE_VALUE;
  userData!:USERDATA;
  constructor(private dialog: MatDialog, private utilityService:UtilityServiceService) {}

  ngOnInit(): void {
    this.userData=this.utilityService.userData;
    this.yearFormControl.valueChanges.subscribe((val) => {
      this.reviewData=this.performanceValue.reviewData.find((item)=>{
      return  item.year==val;
      });
      // console.log(this.reviewData);
      
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

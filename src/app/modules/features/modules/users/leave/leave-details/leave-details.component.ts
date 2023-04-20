import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { MY_LEAVE } from "src/app/constants/routes";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";

@Component({
  selector: "app-leave-details",
  templateUrl: "./leave-details.component.html",
  styleUrls: ["./leave-details.component.scss"],
})
export class LeaveDetailsComponent implements OnInit {
  revokeLeave=false;
  today= new Date();
  compareTime!:boolean;
  index=0;
  heading = [

    { heading: "Leave Type", key: "leave_type" },
    { heading: "Start Date", key: "start_date" },
    { heading: "End Date", key: "end_date" },
    { heading: "Applied On", key: "applied_on" },
    { heading: "Leave Duration", key: "leave_duration" },
    { heading: "Uploaded Document	", key: "uploaded_document" },
  ];
  Table_DATA:any;
    //  {leave_type:'Short Leave',start_date:'01/01/2022',end_date:'01/01/2022',applied_on:'01/01/2022',leave_duration:'5:00 PM - 7:00 PM',uploaded_document:'HR (Human Resourse)'}
   
  constructor(
    private utilityService:UtilityServiceService,
    private activatedRouter:ActivatedRoute,
    private _router:Router,

    public sanitizer:DomSanitizer,
    private notificationService:NotificationService,
    private dialog:MatDialog


  ) {}

  ngOnInit(): void {
     this.index =this.activatedRouter.snapshot.params.id;
    this.Table_DATA=this.utilityService.leaveList[this.index];
    this.compareTime=this.today.getTime() < new Date(this.Table_DATA.end_date).getTime() ;
  }

  RevokeConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: 'Are You Sure To Revoke Leave ?',
        getReason:true
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.utilityService.leaveList.splice(this.index,1);
        this.notificationService.showSuccess('Leave Revoked Successfully','')
        this._router.navigate([MY_LEAVE.fullUrl]);
      }
    });
  }
}

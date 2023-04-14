import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import {  SideNavItem } from "src/app/interfaces/common.interface";
import { AbsoluteRoutingPipe } from "src/app/pipes/absolute-routing/absolute-routing.pipe";
// import * as routes from "../../constants/routes";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  providers:[AbsoluteRoutingPipe]
})
export class ListItemComponent implements OnInit {
  showSubmenu = false;
  @Input()isShowing!:boolean;
  @Input() item!:SideNavItem;

  constructor(
      public dialog:MatDialog,
      private _router:Router,
      private absRoutePipe:AbsoluteRoutingPipe
    ) {}

  ngOnInit(): void {}
  logoutConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: 'Are You Sure To Logout ?'
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      // console.log("The dialog was closed", result);
      if (result) {
        this._router.navigate(['/auth'])
      }
    });
  }

  logOut(route:string){
    // console.log(route);
    
    if(route=='ACCOUNT'){
      this.logoutConfirmation();
    }else{
      this._router.navigate([this.absRoutePipe.transform(route)])
    }
    
  }
  // itemClick(){
  //   this.showSubmenu=!this.showSubmenu;
  // }
}

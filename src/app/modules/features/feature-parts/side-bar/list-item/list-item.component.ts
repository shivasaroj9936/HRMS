import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import {  SideNavItem } from "src/app/interfaces/common.interface";
import { AbsoluteRoutingPipe } from "src/app/pipes/absolute-routing/absolute-routing.pipe";

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
      if (result) {
        this._router.navigate(['/auth'])
      }
    });
  }

  logOut(route:string){
    if(route=='ACCOUNT'){
      this.logoutConfirmation();
    }else{
      this._router.navigate([this.absRoutePipe.transform(route)])
    }
    
  }

  // parentChecker(navBarItem: any): any {
  //   let checker = this._router.url.slice(7);
  //   let subMenuOptions = navBarItem.options;
  //   console.log(checker,subMenuOptions);
    
  //   return subMenuOptions && subMenuOptions.some((subMenuItem: any) => subMenuItem.route == checker);
  // }
}

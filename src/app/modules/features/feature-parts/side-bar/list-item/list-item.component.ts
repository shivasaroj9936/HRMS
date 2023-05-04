import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ACCOUNT } from "src/app/constants/routes";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import { SideNavItem, sideNavList } from "src/app/interfaces/common.interface";
import { AbsoluteRoutingPipe } from "src/app/pipes/absolute-routing/absolute-routing.pipe";
import { fadeInUpAnimation } from "src/animations/fade-in-up.animation";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  providers: [AbsoluteRoutingPipe],
  // animations:[f]
  animations: [fadeInUpAnimation],

})
export class ListItemComponent implements OnInit {
  showSubmenu = false;
  @Input() isShowing!: boolean;
  @Input() item!: SideNavItem;
  @Output() sideItemClick = new EventEmitter<any>()
  sideNavList: SideNavItem[] = sideNavList;
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private absRoutePipe: AbsoluteRoutingPipe,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
  logoutConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: "Are You Sure To Logout ?",
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        localStorage.clear();
        this._router.navigate([ACCOUNT.fullUrl]);
      }
    });
  }

  parentChecker(SideNavItem: SideNavItem): boolean {

    let activeUrl = this._router.url.slice(7).split('/').pop();
    let returnValue = false;
  
    SideNavItem.options?.some((subMenuItem) => {
      let tocheckUrl = this.absRoutePipe.transform(subMenuItem?.route);
      if (typeof tocheckUrl == 'string') {
        tocheckUrl = tocheckUrl.split('/').pop();
      }
      if (tocheckUrl == activeUrl) {
        returnValue = true
        return
      }
    })
    return returnValue;

  }


  SubMenuClicked(item: any) {
    this.sideItemClick.emit(item)
  }
}

import { Component, Input, OnInit, Output ,EventEmitter} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ACCOUNT } from "src/app/constants/routes";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import { SideNavItem, sideNavList } from "src/app/interfaces/common.interface";
import { AbsoluteRoutingPipe } from "src/app/pipes/absolute-routing/absolute-routing.pipe";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  providers: [AbsoluteRoutingPipe],
})
export class ListItemComponent implements OnInit {
  showSubmenu = false;
  @Input() isShowing!: boolean;
  @Input() item!: SideNavItem;
  @Output()  sideItemClick = new EventEmitter<any>()
  sideNavList: SideNavItem[] = sideNavList;

  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private absRoutePipe: AbsoluteRoutingPipe,
    private activatedRoute: ActivatedRoute
  ) {}

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

  parentChecker(): any {
  //   let checker = this._router.url;
  //   let subMenuOptions = this.item.options;
  //   console.log(checker, subMenuOptions);

  //   return (
  //     subMenuOptions &&
  //     subMenuOptions.some((subMenuItem: any) => {
  //       checker.includes(this.absRoutePipe.transform(subMenuItem.route));
  //       console.log(this.absRoutePipe.transform(subMenuItem.route));
        
  //     })
  //   );
  }


  SubMenuClicked(item:any){
    this.sideItemClick.emit(item)
  }
}

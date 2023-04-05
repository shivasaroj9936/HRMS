import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output,EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { HelpComponent } from 'src/app/dialogs/help/help.component';
import { delay } from 'rxjs/operators'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  @Output() stateChange:EventEmitter<boolean> =new EventEmitter<boolean>();
  @ViewChild("sidenav") sidenav!: MatSidenav;

  @Input() smallWindow!:boolean;
  showSubmenu=true;
  showSubSubMenu=false;
  isShowing=true;
  isNotificationExpanded=true;



  isExpanded=true;
  profileOpen=false;
  constructor(
    private observer: BreakpointObserver,
    private _router:Router,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.sidenav.mode = "over";
    this.sidenav.position='end'
    this.observer.observe(["(max-width:1185px)"]).pipe(delay(1)).subscribe((res) => {
      if (res.matches) {
        this.sidenav?.close();
        // this.isShowing = true;
        this.smallWindow = true;
      } else {
        // this.sidenav.mode = "side";
        this.smallWindow = false;
        this.isExpanded = true;
        this.sidenav.open();
      }
    });
  }

  logoutConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: 'Are You Sure To Logout ?'
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log("The dialog was closed", result);
      if (result) {
        this._router.navigate(['/auth'])
      }
    });
  }

  logOut(){
    this.logoutConfirmation();
  }

  expand(){
    
    this.isExpanded=!this.isExpanded;
    this.stateChange.emit(this.isExpanded)
  }
  help(){
    this.dialog.open(HelpComponent,{

    })
  }
  notificationToggle(){
    this.isNotificationExpanded=!this.isNotificationExpanded;
    if(this.isNotificationExpanded){
      this.sidenav.mode='over';
      this.sidenav.opened=true;

    }else{
      this.sidenav.mode="side";

    }

  }
}

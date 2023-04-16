import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output,EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { HelpComponent } from 'src/app/modules/features/feature-parts/help/help.component';
import { delay } from 'rxjs/operators'
import { slideInRight } from 'src/animations/slide-in-right';
import { USERDATA } from '../../modules/dashboard/interfaces/interfaces';
import { UtilityServiceService } from 'src/app/services/utility-service/utility-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[slideInRight]

})
export class HeaderComponent implements OnInit,AfterViewInit {
  @Output() stateChange:EventEmitter<boolean> =new EventEmitter<boolean>();
  @ViewChild("sidenav") sidenav!: MatSidenav;

  @Input() smallWindow!:boolean;
  showSubmenu=true;
  showSubSubMenu=false;
  isShowing=true;
  isNotificationExpanded=false;



  isExpanded=true;
  profileOpen=false;
  userData!: USERDATA;
  constructor(
    private observer: BreakpointObserver,
    private _router:Router,
    public dialog:MatDialog,
    private utilityService: UtilityServiceService
  ) { }

  ngOnInit(): void {
    this.userData=this.utilityService.userData;
  }
  ngAfterViewInit(): void {
   
  }

  logoutConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: 'Are You Sure To Logout ?'
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        localStorage.clear();
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
  }
}

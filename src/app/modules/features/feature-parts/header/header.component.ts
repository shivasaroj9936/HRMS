import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output,EventEmitter, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { HelpComponent } from 'src/app/dialogs/help/help.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() stateChange:EventEmitter<boolean> =new EventEmitter<boolean>();
  @Input() smallWindow!:boolean;
  
  isExpanded=true;
  profileOpen=false;
  constructor(
    private observer: BreakpointObserver,
    private _router:Router,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {

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
}

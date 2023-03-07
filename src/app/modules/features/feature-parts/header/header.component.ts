import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output,EventEmitter, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
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
  logOut(){
    this._router.navigate(['/auth'])
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

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output,EventEmitter, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {

  }

  expand(){
    
    this.isExpanded=!this.isExpanded;
    this.stateChange.emit(this.isExpanded)
  }
}

import { BreakpointObserver } from "@angular/cdk/layout";
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";
import { SideNavItem, sideNavList } from "src/app/interfaces/common.interface";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit, AfterViewInit {
  @Input() isExpanded!: boolean;
  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isShowing!: boolean;
  sideNavList: SideNavItem[] = sideNavList;
  // currentItemIndex!: number;
  // currentItem:string='';
  constructor() {}

  ngOnInit(): void {
    // document.querySelector('isActive')
    // if(document.querySelector('.submenu_active')){
    //   console.log('hiii');
      
    // }
  }
  ngAfterViewInit(): void {
    
  
  }

  itemClick(item: SideNavItem, index: number) {
    // console.log(item,this.currentItem);

    this.sideNavList.forEach((sideItem: SideNavItem) => {
        sideItem.subMenuClicked = false;
    });
    this.sideNavList[index].subMenuClicked=true;
  }
}

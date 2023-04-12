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
  currentItemIndex!: number;
  toggle=true;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  itemClick(item: SideNavItem, index: number) {
    // console.log(item, index);

    this.sideNavList.forEach((sideItem: SideNavItem) => {
      sideItem.subMenuClicked = false;
    });
    // if (this.currentItemIndex == index) {
    //   this.sideNavList[index].subMenuClicked = this.toggle;
    //   this.toggle=!this.toggle
    //   return
    // } else {
    //   this.sideNavList[index].subMenuClicked = true;
    // }
    // this.toggle=!this.toggle

    // this.currentItemIndex = index;
      this.sideNavList[index].subMenuClicked = true;

  }
}

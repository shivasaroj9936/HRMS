import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { UtilityServiceService } from 'src/app/services/utility-service/utility-service.service';
import { USERDATA } from './interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterContentChecked {

  userData!:USERDATA;
  referralData = [

    {
      referralPrice: 11,
      fromYear: '1',
      toYear: '3'
    },
    {
      referralPrice: 21,
      fromYear: 3,
      toYear: 5
    },
    {
      referralPrice: 41,
      fromYear: 5,
      toYear: 9
    },
    {
      referralPrice: 51,
      fromYear: 9,
      toYear: 'last'
    },
  ]

  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource: any = []
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    load: 1,
    interval: { timing: 400000, initialDelay: 100000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  constructor(private cdr: ChangeDetectorRef,private utilityService:UtilityServiceService) { }

  ngOnInit(): void {
    this.userData=this.utilityService.userData;
  }

  ngAfterViewInit(): void {

    this.listToShow.forEach((item) => {
      this.dataSource.push(item);
    })

  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}

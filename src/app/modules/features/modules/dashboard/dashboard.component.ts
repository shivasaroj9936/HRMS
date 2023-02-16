import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {


  referralData=[

    {
      referralPrice:11,
      fromYear:'1',
      toYear:'3'
  },
  {
    referralPrice:21,
    fromYear:3,
    toYear:5
},
{
  referralPrice:41,
  fromYear:5,
  toYear:9
},
{
  referralPrice:51,
  fromYear:9,
  toYear:'last'
},
  ]

  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[]
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    load: 1,
    interval: { timing: 400000, initialDelay: 100000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item)=>{
      this.dataSource.push(item);
    })
    // console.log(this.dataSource,'dddddddddd');
    
  }

}

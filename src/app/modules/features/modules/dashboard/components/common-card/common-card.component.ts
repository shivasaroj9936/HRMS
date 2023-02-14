import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { BIRTHDAY_EMP_IMAGE_DATA, BIRTH_DAY, BITHDAY, IBIRTHDAYDATA } from '../../interfaces/interfaces';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent implements OnInit,AfterViewInit {
  @Input() cardLayoutData:any;
  @Input() data:any;



  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[]
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 2, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  constructor() { }

  ngOnInit(): void {
    // console.log(this.imageData);
    // console.log(this.cardLayoutData);

    
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    
  }
}

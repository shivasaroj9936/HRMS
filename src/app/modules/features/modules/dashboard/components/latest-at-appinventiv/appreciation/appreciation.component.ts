import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { APPRECIATION_DATA, IAPPRECIATIONDATA } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.scss']
})
export class AppreciationComponent implements OnInit,AfterViewInit {

  data:IAPPRECIATIONDATA[]=APPRECIATION_DATA;

  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource: any = []
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
    this.dataSource.push(item);
    })

  }

}

import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() listToShow: any;
  wait = false;
  ngOnInit() {
    console.log(this.listToShow);
    setTimeout(() => {
      this.wait = true;
    }, 500);

  }

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {

    this.cdr.detectChanges();
    console.log(this.listToShow);

  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  ckk(){
    console.log(this.myCarousel);
    
  }
}

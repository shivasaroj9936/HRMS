import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { JobOpening, JobOpeningList } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-latest-job-opening',
  templateUrl: './latest-job-opening.component.html',
  styleUrls: ['./latest-job-opening.component.scss']
})
export class LatestJobOpeningComponent implements OnInit,AfterViewInit {

  jobOpenings:JobOpening[]=JobOpeningList;
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[];
  constructor() { }

  ngOnInit(): void {
  
  }
  ngAfterViewInit(){
    
    this.listToShow.forEach(item=>{
      this.dataSource.push(item);
    })
    
  }

}

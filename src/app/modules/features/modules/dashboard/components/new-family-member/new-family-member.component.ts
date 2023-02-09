import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-new-family-member',
  templateUrl: './new-family-member.component.html',
  styleUrls: ['./new-family-member.component.scss']
})
export class NewFamilyMemberComponent implements OnInit,AfterViewInit {

  constructor() { }
  listOfNewFamilyMembers=[1,2,3]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[]
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    
  }
}

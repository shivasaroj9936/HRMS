import { Component, OnInit } from '@angular/core';
import { AWARDS_EMP_IMAGE_DATA, AWARD_LAYOUT, IAWARDDATA } from '../../interfaces/interfaces';

@Component({
  selector: 'app-awards',
  template: `
    <app-common-card [data]="data" [cardLayoutData]="layoutData"> </app-common-card>
  
  `,
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  data:IAWARDDATA[]=AWARDS_EMP_IMAGE_DATA;
  layoutData=AWARD_LAYOUT

  constructor() { }

  ngOnInit(): void {
  }

}

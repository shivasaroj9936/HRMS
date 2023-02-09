import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


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
  constructor() { }

  ngOnInit(): void {
  }

}

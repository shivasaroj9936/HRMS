import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PURCHASE_LUNCH_COUPON } from 'src/app/constants/routes';
import { CouponsHistoryComponent } from '../coupons-history/coupons-history.component';
import { FoodCalendarDataService } from '../services/food-calendar-data.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
   monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    currentMonth:number=0;
    currentYear:number=0;

  constructor( private _foodCalendarService:FoodCalendarDataService, private _dialog:MatDialog,
    private _router:Router ) { }

 showTable = false;
 myCalendar = [];
 options = {
   edit:false,
   cancel:true
 }
 ngOnInit(): void {
  const date= new Date();
  this.currentYear=date.getFullYear()
  this.currentMonth=date.getMonth();
   if(this._foodCalendarService.myCalendar.length == 0){
     console.log("new Formation");
     this._foodCalendarService.createCalendarData()
     this.myCalendar = this._foodCalendarService.myCalendar
   }else{
     this.myCalendar = this._foodCalendarService.myCalendar
     console.log('usingOld');
   }
   
   console.log(this._foodCalendarService.myCalendar,"9999");
 }

 purchaseCoupons(){
   this._router.navigate([PURCHASE_LUNCH_COUPON.fullUrl])
 }
 updateCalendarData(data:any){

   console.log(data,"JUMPKAR2");
   this.myCalendar = data;
   this._foodCalendarService.myCalendar = data
   
 }

 viewDetails(){
   let config = {
     minWidth:'29rem',
     data:'',
     minHeight:'50vh',
     panelClass:'app-full-bleed-dialog'
   }
   this._dialog.open(CouponsHistoryComponent,config);
 }

}

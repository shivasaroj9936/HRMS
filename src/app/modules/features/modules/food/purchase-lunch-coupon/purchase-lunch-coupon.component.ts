import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FOOD } from 'src/app/constants/routes';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { FoodCalendarDataService } from '../services/food-calendar-data.service';

@Component({
  selector: 'app-purchase-lunch-coupon',
  templateUrl: './purchase-lunch-coupon.component.html',
  styleUrls: ['./purchase-lunch-coupon.component.scss']
})
export class PurchaseLunchCouponComponent implements OnInit {

  constructor(private _foodCalendarService:FoodCalendarDataService,
    private notificationService:NotificationService, private _route:Router , private _formBuilder:FormBuilder) { }
  couponForm!:FormGroup;

  myCalendar = [];
  updatedCalendar = [];
  options = {
    edit:true,
    cancel:false,
    select:true
  }

  ngOnInit(): void {
    
    this.myCalendar = this._foodCalendarService.myCalendar
    if(this.myCalendar.length == 0){
      this._route.navigate(['admin/food'])
    }

    this.createForm() 
    this.couponForm.get('coupon_count')?.disable();
    this.couponForm.get('total_amount')?.disable();

  }

  createForm(){
    this.couponForm = this._formBuilder.group({
      coupon_count: [''],
      total_amount:['']
    });
    // this.couponForm.controls['coupon_count'].disable();
    // this.couponForm.controls['total_amount'].disable();


  }


  buyCoupons(){
    this.myCalendar.map((week:any)=> {
      week.map((day:any)=>{
        if(day.booked == true){
          day.couponPurchased = true;
        }
      })
    })
    this.notificationService.showSuccess("Successfully Bought Coupons","")
      // console.log(this.myCalendar,"myCalendar");       
    this._foodCalendarService.myCalendar = this.myCalendar  
    
  }


  updateCalendarData(data:any){
    // console.log(data,"CD");
    let couponCount = 0;
    data.map((week:any)=>{
      week.map((day:any)=>{
        if(day.booked == true){
          couponCount++;
        }
      })
    })
    // console.log(count,"cuddliest");
    this.updatedCalendar = data;
    this.couponForm.get('coupon_count')?.setValue(couponCount);
    this.couponForm.get('total_amount')?.setValue(couponCount * 25);
    
  }

  selectAll(){

  }

  backToFood(){
    this._route.navigate([FOOD.fullUrl])
  }

}

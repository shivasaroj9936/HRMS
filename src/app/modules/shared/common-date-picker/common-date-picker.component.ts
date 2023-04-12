import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: "app-common-date-picker",
  templateUrl: "./common-date-picker.component.html",
  styleUrls: ["./common-date-picker.component.scss"],
  providers:[DatePipe]
})
export class CommonDatePickerComponent implements OnInit {

  @Input() set inputFormControl(data: FormControl | AbstractControl) {
    this.inputControl = data;
  }
  inputControl!: FormControl | AbstractControl;
  @Input() label: string = ' ';
  @Input() placeHolder: string =' ';

  minDate: Date;
  maxDate: Date;

  constructor(  private datePipe:DatePipe) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {

    // this.inputControl.valueChanges.subscribe((val)=>{
      
     

      
      
    // })
  }

  onDateClick(){
    const date=this.datePipe.transform(this.inputControl.value,"yyy-MM-dd");
    this.inputControl.patchValue(date)
  }
}

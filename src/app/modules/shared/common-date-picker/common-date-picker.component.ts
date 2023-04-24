// import { DatePipe } from "@angular/common";
import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: "app-common-date-picker",
  templateUrl: "./common-date-picker.component.html",
  styleUrls: ["./common-date-picker.component.scss"],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },DatePipe
  ]
})



export class CommonDatePickerComponent implements OnInit {

  @Input() set inputFormControl(data: FormControl | AbstractControl) {
    this.inputControl = data;
  }
  inputControl!: FormControl | AbstractControl;
  @Input() label: string = ' ';
  @Input() placeHolder: string = ' ';
  @Input() labelStyle: any;

  @Input() minDate: any;
  @Input() maxDate: any;

  constructor( private datePipe: DatePipe ) { }

  ngOnInit(): void {

  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    const date = this.datePipe.transform(event.value, "yyy-MM-dd");
    this.inputControl.setValue(date);
    console.log(this.inputControl.value);
  }
}

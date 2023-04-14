import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss']
})
export class CommonInputComponent implements OnInit {

  @Input() set inputFormControl(data:FormControl | AbstractControl){
    this.inputControl = data;    
  } 
   inputControl!:FormControl | AbstractControl
  @Input() label!: string;
  @Input() data:any;
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  @Input() labelStyle:any;
  @Input() maxLength:number=200;
  @Input() minLength!:number;

  @Input() maxValue:number=200;
  @Input() minValue!:number;
  @Input() directiveName!:string;
  @Input() passwordType=false;
  hide=true;


  constructor() { }

  ngOnInit(): void {
  }

}

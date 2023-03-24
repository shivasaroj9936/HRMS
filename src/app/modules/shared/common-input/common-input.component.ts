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
    // console.log(data);
    
  } 
   inputControl!:FormControl | AbstractControl

  // @Input() inputFormControl!:FormControl ;
  @Input() label!: string;
  @Input() data:any;
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  @Input() labelStyle:any;
  constructor() { }

  ngOnInit(): void {
  }

}

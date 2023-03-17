import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-text-area',
  templateUrl: './common-text-area.component.html',
  styleUrls: ['./common-text-area.component.scss']
})
export class CommonTextAreaComponent implements OnInit {
  @Input() inputFormControl!:FormControl ;
  @Input() label!: string;
  @Input() data:any;
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  @Input() labelStyle:any;
  constructor() { }

  ngOnInit(): void {
  }

}

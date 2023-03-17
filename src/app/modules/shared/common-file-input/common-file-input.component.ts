import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-file-input',
  templateUrl: './common-file-input.component.html',
  styleUrls: ['./common-file-input.component.scss']
})
export class CommonFileInputComponent implements OnInit {
  @Input() inputFormControl!:FormControl ;
  @Input() label!: string;
  @Input() data:any;
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  constructor() { }

  ngOnInit(): void {
  }

}

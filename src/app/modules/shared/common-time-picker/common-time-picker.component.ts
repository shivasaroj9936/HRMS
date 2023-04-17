import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-time-picker',
  template: `
<div class="formfield 1">
    <label class="label" [ngClass]="labelStyle"  >{{label|titlecase}}</label>
    <mat-form-field appearance="outline" class="increaseFormfield"  >
    <input readonly [ngxMatTimepicker]="picker" [format]="24" matInput  [formControl]="$any(inputControl)"  >
    <ngx-mat-timepicker #picker></ngx-mat-timepicker  >
    <mat-icon matSuffix  >schedule</mat-icon>
        <mat-error>{{ inputControl | validate : label }}</mat-error>
    </mat-form-field>
</div>
     
  `,
  styleUrls: ['./common-time-picker.component.scss']
})
export class CommonTimePickerComponent implements OnInit {
  @Input() set inputFormControl(data: FormControl | AbstractControl) {
    this.inputControl = data;
  }
  inputControl!: FormControl | AbstractControl;
  @Input() label!: string;
  @Input() data: any;
  @Input() errorType: any;
  @Input() formfieldCSS: any;
  @Input() labelStyle: any;
  // @ViewChild
  constructor() { }

  ngOnInit(): void {
  }

}

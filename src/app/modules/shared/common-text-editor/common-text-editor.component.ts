import { AfterContentChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-text-editor',
  templateUrl: './common-text-editor.component.html',
  styleUrls: ['./common-text-editor.component.scss']
})
export class CommonTextEditorComponent implements OnInit, AfterContentChecked {
  @Input() inputFormControl!: FormControl;
  @Input() label!: string;
  @Input() labelStyle!: string;
  // @ViewChild("tinymce") tinymce!: any;

  constructor() { }


  ngOnInit(): void {


  }
  ngAfterContentChecked() {

  }





}

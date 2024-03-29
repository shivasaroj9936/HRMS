import { AfterViewInit, Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VALIDATION_MESSAGES } from 'src/app/constants/messages';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.scss']
})
export class CommonDropdownComponent implements OnInit,AfterViewInit {
  @Output() dropdownSelection = new EventEmitter();

  @Input() set dropdownDownControlName(data:FormControl | AbstractControl){
    this.inputFormControl = data;    
  }
   inputFormControl!:FormControl | AbstractControl;
  @Input() label!: string;
  @Input() data:(string|any)[]=[];
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  @Input() labelStyle:any;
  myControl = new FormControl(null);
  filteredOptions!: Observable<string[]>;
  
  constructor() {  
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl?.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        return res;
      })
    );
  }
  ngAfterViewInit(): void {
    if(this.data.length){
      this.inputFormControl.patchValue(this.data[0])
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data.filter((option:any) => {
      const res = option?.toLowerCase().includes(filterValue);

      return res;
    });
  }
  selectionChange(event:any){
    const index= this.data.findIndex((item)=>{
      return item==event.value;
    })
    const returnData={
      itemIndex:index,
      value:event.value
    }
    this.dropdownSelection.emit(returnData);

  }
}




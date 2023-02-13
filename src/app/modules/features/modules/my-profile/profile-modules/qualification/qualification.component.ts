import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { slideInRight } from "src/animations/slide-in-right";
import {
  BASIC_INFORMATION,
  EDUCATION_DROPDOWN,
  FORM_LABEL,
  LANGUAGE_DROPDOWN,
} from "src/app/constants/ui-texts/dashboard-card";

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
  animations: [slideInRight],
})
export class QualificationComponent implements OnInit {
  myControl = new FormControl("");
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  educationDropdown: string[] = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "BBA",
    "M.Sc.",
    "Diloma",
  ];
  languageDropdown = LANGUAGE_DROPDOWN;
  
  
  options: string[] = [ "B.Tech",  "M.Tech", "BCA", "BBA", "M.Sc.", "Diloma",];
  filteredOptions!: Observable<string[]>;




  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        
      let res  =      this._filter(value ||'')
      if(!res.length){
        res=['not found']
      }
      console.log(res);
      return res;
      
      }),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => 
    {
      const res= option.toLowerCase().includes(filterValue);
      // console.log(res,'dsds');
      
      return res;
    }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { slideInRight } from "src/animations/slide-in-right";
import {
  BASIC_INFORMATION,
  EDUCATION_DROPDOWN,
  FORM_LABEL,
  LANGUAGE_DROPDOWN,
} from "src/app/constants/ui-texts/dashboard-card";
import { FormService } from "src/app/services/form-service/form.service";

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

  qualificationForm!:FormGroup;


  constructor(private formBuilder:FormBuilder,private _formService:FormService) {}

  ngOnInit(): void {
    this.createForm();

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



  createForm() {
    this.qualificationForm = this.formBuilder.group({
      school: this._formService.getControl('school'),
      education: this._formService.getControl('last_name'),
      time_from: this._formService.getControl('time_from'),
      time_to: this._formService.getControl('time_to'),
      language: this._formService.getControl('language'),
      professional_course: this._formService.getControl('professional_course',false),
      description: this._formService.getControl('description'),
    });
  }


  getControl(control: any) :any{
    return this.qualificationForm.controls[control];
  }

  save() {
    console.log(this.qualificationForm.value);
    
  }
}

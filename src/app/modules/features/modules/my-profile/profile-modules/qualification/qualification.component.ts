import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { slideInRight } from "src/animations/slide-in-right";
import {
  BASIC_INFORMATION,
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
  qualificationForm!:FormGroup;
  
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Action', key: 'action', isSortable: 'isSortable', type: 'text', },
    { heading: 'School/University', key: 'school', isSortable: 'isSortable', type: 'text', },
    { heading: 'Time Period', key: 'time', isSortable: 'isSortable', type: 'text', },
    { heading: 'Education Level', key: 'education', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [
    // { 's_no': '1', 'transaction_id': 5, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ]

  constructor(private formBuilder:FormBuilder,private _formService:FormService) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
    this.createForm();
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

  onSubmit() {
    console.log(this.qualificationForm.value);
    
  }
}

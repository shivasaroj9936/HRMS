import { DatePipe } from "@angular/common";
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
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
  providers: [DatePipe],
  animations: [slideInRight],

})
export class QualificationComponent implements OnInit {
  myControl = new FormControl("");
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  educationDropdown: string[] = [  "B.Tech",  "M.Tech", "BCA",  "BBA", "M.Sc.", "Diloma", ];
  languageDropdown = LANGUAGE_DROPDOWN;
  
  
  options: string[] = [ "B.Tech",  "M.Tech", "BCA", "BBA", "M.Sc.", "Diloma",];
  qualificationForm!:FormGroup;
  
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Action', key: 'action', isSortable: '', type: 'action', },
    { heading: 'School/University', key: 'school', isSortable: 'isSortable', type: 'text', },
    { heading: 'Time Period', key: 'time', isSortable: 'isSortable', type: 'text', },
    { heading: 'Education Level', key: 'education', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [ 
    {action:[{ btnStyle: 'delete',icon: 'delete', route: 'LEAVE_DETAILS', type: 'route', routeID: 121 },{ icon: 'edit', route: 'LEAVE_DETAILS', type: 'route', routeID: 121,btnStyle: 'edit' }],
    emp_name:'Shiva saroj',
    email:'shivavasaroj@appinventiv.com',
    education:'B.tech',
    time:'01/01/2022',
    school:'Appinventiv '
  }



  ]

  constructor(private formBuilder:FormBuilder,private _formService:FormService,private datePipe:DatePipe,private notficationService:NotificationService) {
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
    if(this.qualificationForm.valid){
      // this.qualificationForm.value['action']=[{ icon: '', btnStyle:'btn_add_new', btnText:'pending',route: 'DSR_DETAILS', type: 'route', routeID: 121 }];
      this.qualificationForm.value['time'] = this.datePipe.transform(this.getControl('time_from').value - this.getControl('time_to').value , 'yyyy-MM-dd');
      this.qualificationForm.value['emp_name'] = 'Shiva Saroj(AI 1580)';
      this.qualificationForm.value['email'] = 'shiva.saroj@appinventiv.com';
      // this.qualificationForm.value['action'] = [{ icon: 'delete', route: 'LEAVE_DETAILS', type: 'route', routeID: 121,btnStyle: 'delete'},{ icon: 'edit', route: 'LEAVE_DETAILS', type: 'route', routeID: 121,btnStyle:'edit' }];
      this.Table_DATA.push(this.qualificationForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      console.log(this.dataSource);

      console.log(this.qualificationForm.value);
      this.notficationService.showSuccess('Added','Qualification');
      this.qualificationForm.reset();
    }
    
  }
}

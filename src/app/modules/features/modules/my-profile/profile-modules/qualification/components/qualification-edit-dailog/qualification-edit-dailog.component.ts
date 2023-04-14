import { AfterContentChecked, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trim } from 'src/app/constants/helperMethods';
import { BASIC_INFORMATION } from 'src/app/constants/routes';
import { FORM_LABEL, LANGUAGE_DROPDOWN } from 'src/app/constants/ui-texts/dashboard-card';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-qualification-edit-dailog',
  templateUrl: './qualification-edit-dailog.component.html',
  styleUrls: ['./qualification-edit-dailog.component.scss']
})
export class QualificationEditDailogComponent implements OnInit , AfterContentChecked {
  qualificationForm!: FormGroup;
  labelMessage = FORM_LABEL;
  educationDropdown: string[] = [  "B.Tech", "M.Tech", "BCA",  "BBA", "M.Sc.", "Diloma", ];
  languageDropdown = LANGUAGE_DROPDOWN;
  uiMessage = BASIC_INFORMATION;

  constructor(    
    public dialogRef: MatDialogRef<QualificationEditDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formService: FormService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  onNoClick(): void {
    // this.data=this.qualificationForm.value;
    
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    // console.log(this.data,'fffffffff');

    this.createForm()
    this.setValue();
  }

  createForm() {

    this.qualificationForm = this.formBuilder.group({
      school: this._formService.getControl("school"),
      education: this._formService.getControl("cv"),
      time_from: this._formService.getControl("time_from"),
      time_to: this._formService.getControl("time_to"),
      language: this._formService.getControl("language"),
      professional_course: this._formService.getControl( "professional_course",  false  ),
           description: this._formService.getControl("description"),
    });
  }
  setValue(){
    this.qualificationForm.patchValue(this.data);
    // this.getControl('school').patchValue(this.data.school);
    // this.getControl('time_from').patchValue('01/01/2022');
    // this.getControl('school').patchValue(this.data.school);
    // console.log(this.qualificationForm.value);
    

  }
  getControl(control: any) {
    return this.qualificationForm.controls[control] as FormControl;
  }
  onSubmit(){
    this.checkValidation();
    if(this.qualificationForm.valid){
      this.dialogRef.close(this.qualificationForm.value);
    }
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  checkValidation() {
    this.qualificationForm.patchValue(trim(this.qualificationForm.value))
  }
}

import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder,  FormGroup, FormGroupDirective } from '@angular/forms';
import { slideInRight } from 'src/animations/slide-in-right';
import { trim } from 'src/app/constants/helperMethods';
import { BASIC_INFORMATION, FORM_LABEL, GENDER_INPUT_DROPDOWN, MARITAL_DROPDOWN } from 'src/app/constants/ui-texts/dashboard-card';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations: [slideInRight]
})
export class BasicInformationComponent implements OnInit,AfterContentChecked {
  uiMessage = BASIC_INFORMATION
  labelMessage = FORM_LABEL
  genderValue = GENDER_INPUT_DROPDOWN
  maritalStatusValue = MARITAL_DROPDOWN
  basicInformationForm!: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(private formBuilder: FormBuilder, private _formService: FormService, private notificationService: NotificationService,private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.basicInformationForm = this.formBuilder.group({
      first_name: this._formService.getControl('name'),
      last_name: this._formService.getControl('name'),
      dob: this._formService.getControl('dob'),
      gender: this._formService.getControl('gender'),
      marital_status: this._formService.getControl('marital_status'),
      contact_number: this._formService.getControl('contact_number'),
      tot_exp_years: this._formService.getControl('year'),
      tot_exp_month: this._formService.getControl('month'),
      rel_exp_year: this._formService.getControl('year'),
      rel_exp_month: this._formService.getControl('month'),
      address: this._formService.getControl('address'),
    });
  }


  getControl(control: string): any {
    return this.basicInformationForm?.controls[control];
  }


  save() {
    this.checkValidation();
    if (this.basicInformationForm.valid) {
      this.notificationService.showSuccess('Saved', 'Basic Information');
      // console.log(this.basicInformationForm);
      this.formGroupDirective.resetForm()
    } else {
      this.notificationService.showError('Error !', 'Please Provide All Information');

    }
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  checkValidation() {
    this.basicInformationForm.patchValue(trim(this.basicInformationForm.value))
  }
}

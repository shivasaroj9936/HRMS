import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { trim } from "src/app/constants/helperMethods";
import { MY_PITCH } from "src/app/constants/routes";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { ADD_PITCH } from "../../dashboard/interfaces/interfaces";

@Component({
  selector: "app-add-pitch",
  templateUrl: "./add-pitch.component.html",
  styleUrls: ["./add-pitch.component.scss"],
})
export class AddPitchComponent implements OnInit {
  labelMessage = ADD_PITCH;
  addPitchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private _router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getControl('name').patchValue('Shiva Saroj');
    this.getControl('name').disable();
    this.getControl('dob').patchValue('16/05/199');
    this.getControl('dob').disable();
    this.getControl('employee_id').patchValue('AI 1580');
    this.getControl('employee_id').disable();
  }
  createForm() {
    this.addPitchForm = this.formBuilder.group({
      pitch_title: this._formService.getControl("name"),
      industry: this._formService.getControl("name"),
      type: this._formService.getControl("name"),
      idea: this._formService.getControl("description"),
      presentation: this._formService.getControl("cv"),
      name: this._formService.getControl("name"),
      employee_id: this._formService.getControl("name"),
      dob: this._formService.getControl("dob"),
    });
  }
  // setValueInForm() {
  //   this.getControl("department_name").patchValue(this.data.jobTite);
  //   this.getControl("job_code").patchValue(12345);
  //   this.getControl("location").patchValue(this.data.location);
  //   this.getControl("experience").patchValue(`${this.data.exp_from + ' to ' + this.data.exp_to + ' years'}`);
  // }

  getControl(control: string) {
    return this.addPitchForm?.controls[control] as FormControl;
  }
  onSubmit() {
    // console.log(this.addPitchForm);
    this.checkValidation();
    if (this.addPitchForm.valid) {
      this.notificationService.showSuccess("Added", "Pitch");
    }else{
      this.notificationService.showError('Error !' ,' Please Provide All Information')
    }
  }
  onCancel() {}
  toMyPitch() {
    this._router.navigate([MY_PITCH.fullUrl]);
  }
  checkValidation() {
    this.addPitchForm.patchValue(trim(this.addPitchForm.value));
  }
}

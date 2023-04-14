import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { slideInRight } from "src/animations/slide-in-right";
import { BASIC_INFORMATION } from "src/app/constants/ui-texts/dashboard-card";
import { FORM_LABEL } from "src/app/constants/ui-texts/dashboard-card";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
  animations: [slideInRight],
})
export class ChangePasswordComponent implements OnInit {
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  passwordResetForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private _notificationService: NotificationService


  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.passwordResetForm = this.formBuilder.group(
      {
        old_password: this._formService.getControl("password"),
        new_password: this._formService.getControl("password"),
        confirm_password: this._formService.getControl("password"),
      },
      {
        validator: this.matchPassword("new_password", "confirm_password"),
      }
    );
  }

  getControl(control: any) {
    return this.passwordResetForm.controls[control];
  }

  save() {
    if (this.passwordResetForm.valid) {
      // console.log(this.passwordResetForm);

      this._notificationService.showSuccess('Updated','Password');
      this.passwordResetForm.reset();
    }
  }

  matchPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.matchPassword) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ matchPassword: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MY_DSR } from "src/app/constants/routes";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";

@Component({
  selector: "app-dsr-edit",
  templateUrl: "./dsr-edit.component.html",
  styleUrls: ["./dsr-edit.component.scss"],
})
export class DsrEditComponent implements OnInit {
  dsrForm!: FormGroup;
  projects:string[]=['All','Trainee Project Angular'];

  // routeID: string|number=0;
  dsr: any;
  routeID: any;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService,
    private _router: Router,
    private utilityService: UtilityServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeID = this.activatedRoute.snapshot?.paramMap?.get("id");
    this.dsr = this.utilityService.dsrList[this.routeID];

    this.createForm();
    // this.dsrForm.patchValue(this.dsr)
    this.getControl("project").patchValue("Trainee Project Angular");
    this.getControl("date").setValue("2023-03-01");
    this.getControl("logged_hr").setValue("08:00");
    this.getControl("description").setValue(
      '<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">Meetings</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">&nbsp; NA&nbsp;</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">Task&nbsp;</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">&nbsp; &nbsp;Bug fixing [2hr]</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">&nbsp; &nbsp;Portal registration [1 hr]</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">&nbsp; Working on job openings module [ 3 hr]</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">Challenges</p>\n<p style="box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;">NA</p>'
    );
  }

  createForm() {
    this.dsrForm = this.formBuilder.group({
      project: this._formService.getControl("cv"),
      date: this._formService.getControl("cv"),
      logged_hr: this._formService.getControl("cv"),
      description: this._formService.getControl("dsr"),
    });
  }
  getControl(control: string): FormControl {
    return this.dsrForm?.controls[control] as FormControl;
  }
  onUpdate() {
    this.notificationService.showSuccess("DSR Updated SuccesFully", "");
    this._router.navigate([MY_DSR.fullUrl]);
  }
}

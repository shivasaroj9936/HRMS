import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { MY_DSR } from "src/app/constants/routes";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";
import {  updateDSR } from "src/app/state/data.action";
import { getDSR } from "src/app/state/data.selector";

@Component({
  selector: "app-dsr-edit",
  templateUrl: "./dsr-edit.component.html",
  styleUrls: ["./dsr-edit.component.scss"],
})
export class DsrEditComponent implements OnInit {
  dsrForm!: FormGroup;
  projects: string[] = ['All', 'Trainee Project Angular'];
  dsr: any;
  routeID: any;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService,
    private _router: Router,
    private utilityService: UtilityServiceService,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ Data: any }>
  ) { }

  ngOnInit(): void {
    this.routeID = this.activatedRoute.snapshot?.paramMap?.get("id");

    this.createForm();
    this.store.select(getDSR).subscribe((data) => {
      this.dsr = data[this.routeID - 1];
      this.dsrForm.patchValue(this.dsr);
    })
  }

  createForm() {
    this.dsrForm = this.formBuilder.group({
      project: this._formService.getControl("cv"),
      date: this._formService.getControl("cv"),
      logged_hr: this._formService.getControl("cv"),
      dsr: this._formService.getControl("dsr"),
    });
  }
  getControl(control: string): FormControl {
    return this.dsrForm?.controls[control] as FormControl;
  }
  onUpdate() {
    this.notificationService.showSuccess("DSR Updated SuccesFully", "");
    this.dsr={
      ...this.dsr,
      ...this.dsrForm.value
    }
    let upDatedDSR={
      value:this.dsr,
      id:this.routeID
    };
    console.log(upDatedDSR);
    
    this.store.dispatch(updateDSR(upDatedDSR))
    this._router.navigate([MY_DSR.fullUrl]);
  }
}

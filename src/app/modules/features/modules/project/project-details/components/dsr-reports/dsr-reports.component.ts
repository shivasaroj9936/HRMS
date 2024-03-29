import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormService } from "src/app/services/form-service/form.service";

@Component({
  selector: "app-dsr-reports",
  templateUrl: "./dsr-reports.component.html",
  styleUrls: ["./dsr-reports.component.scss"],
})
export class DsrReportsComponent implements OnInit {
  filterForm!: FormGroup;
  departments = ["All", "Angular", "Node js", "React Js", "Android"];

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      date_from: this._formService.getControl("cv"),
      date_to: this._formService.getControl("cv"),
      submission_status: this._formService.getControl("cv"),
      department: this._formService.getControl("cv"),
      project_resource: this._formService.getControl("cv"),
      pm_pproval_status: this._formService.getControl("cv"),
      am_pproval_status: this._formService.getControl("cv"),
      rm_pproval_status: this._formService.getControl("cv"),
      final_pproval_status: this._formService.getControl("cv"),
      hours: this._formService.getControl("cv"),
    });
  }

  getControl(control: string): any {
    return this.filterForm?.controls[control];
  }
  search() {}
}

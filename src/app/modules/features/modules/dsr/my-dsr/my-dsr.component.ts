import { DatePipe } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { fadeInUpAnimation } from "src/animations/fade-in-up.animation";
import { MY_DSR_TABLE_HEADING } from "src/app/constants/table-headers";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";
import { USERDATA } from "../../dashboard/interfaces/interfaces";
import { trim } from "src/app/constants/helperMethods";
import { Store } from "@ngrx/store";
import { getDSR } from "src/app/state/data.selector";
import { addNewDSR } from "src/app/state/data.action";

@Component({
  selector: "app-my-dsr",
  templateUrl: "./my-dsr.component.html",
  styleUrls: ["./my-dsr.component.scss"],
  providers: [DatePipe],
  animations: [fadeInUpAnimation],
})
export class MyDsrComponent implements OnInit {
  dsrForm!: FormGroup;
  filterForm!: FormGroup;
  noWork = false;
  dataSource!: MatTableDataSource<any>;
  columns = MY_DSR_TABLE_HEADING;
  Table_DATA: any[] = [];
  testDsrDataFromStore: any[] = [];
  submissionStatus: string[] = ["All", "Submitted", "Due"];
  projects: string[] = ["All", "Trainee Project Angular"];
  finalApprovalStatus: string[] = ["All", "Pending", "Approved", "Rejected"];
  hours: string[] = [
    "Hours",
    "Less than 5 Hours",
    "Greater than 5 and Less than equal to 8",
    "Greater than 8",
    "Greater than 10",
  ];
  userData!: USERDATA;
  // @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService,
    private datePipe: DatePipe,
    private utilityService: UtilityServiceService,
    private _elementRef: ElementRef,
    // private store:Store<{counter:{counter:number}}>
    private store: Store<{ Data: any }>


  ) { }

  ngOnInit(): void {
    this.createForm();
    this.userData = this.utilityService.userData;
    this.Table_DATA = [];
    this.store.select(getDSR).subscribe((data) => {
      this.Table_DATA = data;
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      console.log(data);
    })
  }

  createForm() {
    this.dsrForm = this.formBuilder.group({
      project: this._formService.getControl("cv"),
      date: this._formService.getControl("cv"),
      logged_hr: this._formService.getControl("cv"),
      dsr: this._formService.getControl("dsr"),
    });

    this.filterForm = this.formBuilder.group({
      start_date: this._formService.getControl("cv", false),
      end_date: this._formService.getControl("cv", false),
      submission_status: this._formService.getControl("cv", false),
      project: this._formService.getControl("cv"),
      final_approve: this._formService.getControl("cv", false),
      hours: this._formService.getControl("cv", false),
    });
  }

  toggleForm() {
    let content = this._elementRef.nativeElement.querySelector('.form');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2 * content.scrollHeight + "px";
    }
  }
  onSelect() {
    this.noWork = !this.noWork;
    if (this.noWork) {
      this.getControl("logged_hr").setValue("0:00");
      this.getControl("dsr").setValue(" No Work Done Today");
      this.getControl("logged_hr").disabled;
    } else {
      this.getControl("logged_hr").reset();
      this.getControl("description").reset();
    }
  }

  getControl(control: string): FormControl {
    return this.dsrForm?.controls[control] as FormControl;
  }
  getFilterControl(control: string): FormControl {
    return this.filterForm?.controls[control] as FormControl;
  }
  onFilter() {
    console.log(this.filterForm.value);
    console.log(this.Table_DATA);

    const start_date = new Date(
      this.getFilterControl("start_date").value
    ).getTime();
    const end_date = new Date(
      this.getFilterControl("end_date").value
    ).getTime();
    const status = this.getFilterControl("start_date").value;
    const project = this.getFilterControl("project").value;
    const hours = this.getFilterControl("hours").value;

    const finalApprovalStatus = this.getFilterControl("start_date").value;

    const filteredData = this.Table_DATA.filter((item) => {
      const dsr_date = new Date(item.date).getTime();

      return start_date && end_date
        ? dsr_date >= start_date && dsr_date <= end_date
        : end_date
          ? dsr_date <= end_date
          : dsr_date >= start_date;
    });
    // || (finalApprovalStatus!='all'?finalApprovalStatus==item.action[0].btnText:true)
    // console.log(filteredData);
    // this.Table_DATA=filteredData;

    this.dataSource = new MatTableDataSource<any>(filteredData);
    this.dataSource._updateChangeSubscription();
  }
  resetFilter() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  onSubmit() {
    this.checkValidation();
    this.notificationService.checkControls(this.dsrForm)

    if (this.dsrForm.valid) {
      this.dsrForm.value["s_no"] = this.Table_DATA.length + 1;
      this.dsrForm.value["id"] = this.Table_DATA.length + 1;

      this.dsrForm.value["date"] = this.datePipe.transform(
        this.getControl("date").value, "yyyy-MM-dd");
      this.dsrForm.value["employment_type"] = this.userData.emp_type;
      this.dsrForm.value["emp_name"] = this.userData.name;
      this.dsrForm.value['project_name'] = 'Project Trainee Angular';
      this.dsrForm.value["email"] = this.userData.email;
      this.dsrForm.value["rm_approval"] = 'N/A';
      this.dsrForm.value["am_approval"] = 'N/A';
      this.dsrForm.value["pm_approval"] = 'N/A';
      this.dsrForm.value["final_approval"] = 'pending';
      this.dsrForm.value["status"] = 'submitted';
      this.dsrForm.value["action"] = [
        {
          icon: "",
          btnStyle: "btn_add_new",
          btnText: "pending",
          route: "DSR_DETAILS",
          type: "route",
          routeID: 121,
        },
      ];

      this.store.dispatch(addNewDSR(this.dsrForm.value))
      // this.utilityService.dsrList.push(this.dsrForm.value);

      // this.dataSource.data.push(this.dsrForm.value);

      // this.dataSource._updateChangeSubscription();

      this.notificationService.showSuccess("DSR Added", "");
      this.toggleForm()
      this.dsrForm.reset();
      this.noWork = false;
    } else {
      // this.notificationService.showError("All fields Requierd", "");
    }
  }
  checkValidation() {
    this.dsrForm.patchValue(trim(this.dsrForm.value));
  }
}

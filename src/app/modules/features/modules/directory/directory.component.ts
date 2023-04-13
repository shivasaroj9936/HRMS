import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import {
  DIRECTORY_EMPLOYEE_DATA,
  IDIRECTORY_DATA,
} from "../dashboard/interfaces/interfaces";
import { BASIC_INFORMATION } from "./constants/ui-text";

@Component({
  selector: "app-directory",
  templateUrl: "./directory.component.html",
  styleUrls: ["./directory.component.scss"],
})
export class DirectoryComponent implements OnInit {
  uiText = BASIC_INFORMATION;
  data: IDIRECTORY_DATA[] = DIRECTORY_EMPLOYEE_DATA;
  directoryDataList: IDIRECTORY_DATA[] = DIRECTORY_EMPLOYEE_DATA;
  departments = ["All", "Angular", "Node js", "React Js", "Android"];
  filterForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService:NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      name: this._formService.getControl("name", false),
      technology: this._formService.getControl("name"),
    });
  }

  getControl(control: string) {
    return this.filterForm?.controls[control] as FormControl;
  }
  filter() {
    if (this.filterForm.valid) {
      this.getControl("name").patchValue(this.getControl("name").value?.trim());
      let tech = this.getControl("technology")?.value?.toLowerCase();
      let name = this.getControl("name").value?.toLowerCase();
      let newData = this.data.filter((item) => {
        if (tech && !name) {
          return tech == "all"
            ? true
            : item.EMP_TECHNOLOGY?.toLowerCase().includes(tech);
        } else {
          return tech == "all"
            ? item.EMP_NAME.toLocaleLowerCase().includes(name.toLowerCase())
            : item.EMP_NAME?.toLowerCase()?.includes(name) &&
                item.EMP_TECHNOLOGY?.toLowerCase().includes(tech);
        }
      });
      this.directoryDataList = newData;
    }else{
      // this.notificationService.showError('')
    }
  }
  reset() {
    this.directoryDataList = this.data;
    this.getControl('technology').patchValue('All')
    this.createForm()
  }
}

import { DatePipe } from "@angular/common";
import {
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { slideInRight } from "src/animations/slide-in-right";
import { trim } from "src/app/constants/helperMethods";
import { QUALIFICATION_TABLE_HEADING } from "src/app/constants/table-headers";
import {
  BASIC_INFORMATION,
  FORM_LABEL,
  LANGUAGE_DROPDOWN,
} from "src/app/constants/ui-texts/dashboard-card";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";
import { QualificationEditDailogComponent } from "./components/qualification-edit-dailog/qualification-edit-dailog.component";

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
  // providers: [DatePipe],
  animations: [slideInRight],
})
export class QualificationComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  myControl = new FormControl("");
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  educationDropdown: string[] = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "BBA",
    "M.Sc.",
    "Diloma",
  ];
  languageDropdown = LANGUAGE_DROPDOWN;

  options: string[] = ["B.Tech", "M.Tech", "BCA", "BBA", "M.Sc.", "Diloma"];
  qualificationForm!: FormGroup;

  dataSource!: MatTableDataSource<any>;
  columns = QUALIFICATION_TABLE_HEADING;
  Table_DATA: any;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notficationService: NotificationService,
    public dialog: MatDialog,
    private utilityService:UtilityServiceService
  ) {
  }
  
  ngOnInit(): void {
    this.createForm();
    this.Table_DATA=this.utilityService.qualificationSlist;
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  createForm() {
    this.qualificationForm = this.formBuilder.group({
      school: this._formService.getControl("name"),
      education: this._formService.getControl("cv"),
      time_from: this._formService.getControl("time_from"),
      time_to: this._formService.getControl("time_to"),
      language: this._formService.getControl("language"),
      professional_course: this._formService.getControl("name", false),
      description: this._formService.getControl("description"),
    });
  }

  getControl(control: any): any {
    return this.qualificationForm.controls[control];
  }

  onSubmit() {
    this.checkValidation();
    console.log(this.qualificationForm.value);

    if (this.qualificationForm.valid) {
      this.qualificationForm.value["time"] = Math.floor(
        (this.getControl("time_to").value -
          this.getControl("time_from").value) /
          (1000 * 60 * 60 * 24)
      );
      this.qualificationForm.value["emp_name"] = "Shiva Saroj(AI 1580)";
      this.qualificationForm.value["email"] = "shiva.saroj@appinventiv.com";
      this.qualificationForm.value["action"] = [
        {
          btnStyle: "delete",
          icon: "delete",
          type: "dialogOpen",
          routeID: 121,
        },
        { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },
      ];
      // this.Table_DATA.push(this.qualificationForm.value);
      this.dataSource.data.push(this.qualificationForm.value);
      // this.qualificationForm.reset();
      // this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.dataSource._updateChangeSubscription();

      this.notficationService.showSuccess("Added", "Qualification");
      this.formGroupDirective.resetForm();
    }
  }

  editQualification(index: number): void {
    const dialogRef = this.dialog.open(QualificationEditDailogComponent, {
      data: this.dataSource.data[index],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data[index] = {
          ...this.dataSource.data[index],
          ...result,
        };
        this.dataSource._updateChangeSubscription();
        this.notficationService.showSuccess(" Successfully", "Item Updated");
      }
    });
  }
  deleteConfirmation(index: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: "Are You Sure To Delete Record ?",
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
        this.notficationService.showSuccess("Deleted Successfully", "Item");
      }
    });
  }

  eventFromTable(event: any) {
    if (event.item.btnStyle == "edit") {
      this.editQualification(event.index);
    }

    if (event.item.btnStyle == "delete") {
      this.deleteConfirmation(event.index);
    }
  }

  checkValidation() {
    this.qualificationForm.patchValue(trim(this.qualificationForm.value));
  }
}

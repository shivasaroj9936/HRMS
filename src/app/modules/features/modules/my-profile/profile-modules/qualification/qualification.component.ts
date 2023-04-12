import { DatePipe } from "@angular/common";
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { slideInRight } from "src/animations/slide-in-right";
import {
  BASIC_INFORMATION,
  FORM_LABEL,
  LANGUAGE_DROPDOWN,
} from "src/app/constants/ui-texts/dashboard-card";
import { ConfirmationDialogComponent } from "src/app/dialogs/confirmation-dialog/confirmation-dialog.component";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { QualificationEditDailogComponent } from "./components/qualification-edit-dailog/qualification-edit-dailog.component";

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
  providers: [DatePipe],
  animations: [slideInRight],
})
export class QualificationComponent implements OnInit,AfterContentChecked {
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
  columns = [
    { heading: "Action", key: "action", isSortable: "", type: "action" },
    {
      heading: "School/University",
      key: "school",
      isSortable: "isSortable",
      type: "text",
    },
    {
      heading: "Time Period",
      key: "time",
      isSortable: "isSortable",
      type: "date",
    },
    {
      heading: "Education Level",
      key: "education",
      isSortable: "isSortable",
      type: "text",
    },
  ];
  Table_DATA: any[] = [
    {
      action: [
        {
          btnStyle: "delete",
          icon: "delete",
          type: "dialogOpen",
          routeID: 121,
        },
        { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },
      ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj123@appinventiv.com",
      education: "B.Tech",
      time: "01/08/2012",
      school: "Appinventiv 1 ",
      language:'English',
      time_from:'01/02/2017',
      time_to:'01/05/2019',
      professional_course:'Python , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amettio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },
    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 2 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },
    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
    emp_name: "Shiva saroj",
    email: "shivavasaroj@appinventiv.com",
    education: "B.Tech",
    time: "01/01/2022",
    school: "Appinventiv 3 ",
    language:'Hindi',
    time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
    time_to:'01/05/2022',
    professional_course:'JAVA , HTML ,CSS',
    description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
  },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
  emp_name: "Shiva saroj",
  email: "shivavasaroj@appinventiv.com",
  education: "B.Tech",
  time: "01/01/2022",
  school: "Appinventiv 4 ",
  language:'Hindi',
  time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
  time_to:'01/05/2022',
  professional_course:'JAVA , HTML ,CSS',
  description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
},    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 3 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv q214 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 5 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 12 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 6 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 7 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 9 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 11 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Appinventiv 3 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Nikhil 2 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Tech",
      time: "01/01/2022",
      school: "Harshit 21 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "M.Tech",
      time: "01/01/2022",
      school: "Shivam 23 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },    { action: [ { btnStyle: "delete", icon: "delete",  type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },   ],
      emp_name: "Shiva saroj",
      email: "shivavasaroj@appinventiv.com",
      education: "B.Sc",
      time: "01/01/2022",
      school: "Appinventiv 24 ",
      language:'Hindi',
      time_from:'Thu Apr 13 2023 00:00:00 GMT+0530 (India Standard Time) {}',
      time_to:'01/05/2022',
      professional_course:'JAVA , HTML ,CSS',
      description:'  Lorem, ipsum dolor sit amet sint quisquam iste distinctio asperiores ipsam ipsa odit! Placeat totam ipsam voluptatum? Sint repellat accusamus officia assumenda.'
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private datePipe: DatePipe,
    private notficationService: NotificationService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.qualificationForm = this.formBuilder.group({
      school: this._formService.getControl("name"),
      education: this._formService.getControl("cv"),
      time_from: this._formService.getControl("time_from"),
      time_to: this._formService.getControl("time_to"),
      language: this._formService.getControl("language"),
      professional_course: this._formService.getControl("name", false ),
      description: this._formService.getControl("description"),
    });
  }

  getControl(control: any): any {
    return this.qualificationForm.controls[control];
  }

  onSubmit() {
    
    if (this.qualificationForm.valid) {
      this.qualificationForm.value["time"] =  Math.floor((this.getControl("time_to").value - this.getControl("time_from").value)/(1000 * 60 * 60 * 24));
        this.qualificationForm.value["emp_name"] = "Shiva Saroj(AI 1580)";
        this.qualificationForm.value["email"] = "shiva.saroj@appinventiv.com";
        this.qualificationForm.value['action']=[  {    btnStyle: "delete", icon: "delete", type: "dialogOpen", routeID: 121,  }, { icon: "edit", type: "dialogOpen", routeID: 121, btnStyle: "edit" },  ];
        // this.Table_DATA.push(this.qualificationForm.value);
        this.dataSource.data.push(this.qualificationForm.value)
      // this.qualificationForm.reset();
      // this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.dataSource._updateChangeSubscription();

      this.notficationService.showSuccess("Added", "Qualification");
      this.formGroupDirective.resetForm()

    }
  }

  editQualification( index:number): void {
    
    const dialogRef = this.dialog.open(QualificationEditDailogComponent, {
      data: this.dataSource.data[index],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.dataSource.data[index]={...this.dataSource.data[index],...result}
        this.dataSource._updateChangeSubscription();
        this.notficationService.showSuccess(' Successfully','Item Updated')
        
        
      }
    });
  }
  deleteConfirmation(index: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        heading: 'Are You Sure To Delete Record ?'
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
        this.notficationService.showSuccess('Deleted Successfully','Item')
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
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}

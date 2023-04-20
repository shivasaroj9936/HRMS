import { DatePipe } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInUpAnimation } from 'src/animations/fade-in-up.animation';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UtilityServiceService } from 'src/app/services/utility-service/utility-service.service';
import { USERDATA } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
  providers: [DatePipe],
  animations: [fadeInUpAnimation]

})
export class MyDsrComponent implements OnInit {

  toggle = false;
  dsrForm!: FormGroup;
  filterForm!: FormGroup;
  noWork = false;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "Sr.No.", key: 's_no', isSortable: 'yes', type: 'text', },
    { heading: "Emp Name", key: 'emp_name', isSortable: 'yes', type: 'text', link: 'client-details' },
    { heading: "Email", key: 'email', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Employment Type", key: 'employment_type', isSortable: 'yes', type: 'text', link: 'client-details' },
    { heading: "Date", key: 'date', isSortable: 'yes', type: 'date', link: 'client-details' },
    { heading: "Total(Logged Hr)", key: 'logged_hr', isSortable: 'yes', type: 'text', link: 'client-details' },
    { heading: 'Final Approval', key: 'action', type: 'action', action: [{}] },
  ]
  Table_DATA: any[] = [];

  submissionStatus: string[] = ['All', 'Submitted', 'Due'];
  projects: string[] = ['All', 'Trainee Project Angular'];
  finalApprovalStatus: string[] = ['All', 'Pending', 'Approved', 'Rejected']
  hours: string[] = ['Hourse', 'Less than 5 Hourse', 'Greater than 5 and Less than equal to 8', 'Greater than 8', 'Greater than 10']
  userData!: USERDATA;
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService, private datePipe: DatePipe,
    private utilityService: UtilityServiceService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.userData = this.utilityService.userData;
    this.Table_DATA = this.utilityService.dsrList;
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  createForm() {
    this.dsrForm = this.formBuilder.group({
      project: this._formService.getControl('cv'),
      date: this._formService.getControl('cv',),
      logged_hr: this._formService.getControl('cv',),
      description: this._formService.getControl('dsr'),
    });

    this.filterForm = this.formBuilder.group({
      start_date: this._formService.getControl('cv', false),
      end_date: this._formService.getControl('cv', false),
      submission_status: this._formService.getControl('cv', false),
      project: this._formService.getControl('cv'),
      final_approve: this._formService.getControl('cv', false),
      hours: this._formService.getControl('cv', false),
    });
  }
  onSelect() {
    this.noWork = !this.noWork;
    if (this.noWork) {
      this.getControl('logged_hr').setValue("0:00");
      this.getControl('description').setValue(' No Work Done Today');
      this.getControl('logged_hr').disabled;
    } else {
      this.getControl('logged_hr').reset();
      this.getControl('description').reset();
    }

  }


  getControl(control: string): FormControl {
    return this.dsrForm?.controls[control] as FormControl;
  }
  getFilterControl(control: string): FormControl {
    return this.filterForm?.controls[control] as FormControl;
  }
  onFilter() {
    console.log(this.filterForm);
    const filteredData = this.Table_DATA.filter((item) => {
      const start_date= new Date(this.getFilterControl('start_date').value).getTime();
      const end_date= new Date(this.getFilterControl('end_date').value).getTime();
      const dsr_date =  new Date(item.date).getTime();
      console.log(dsr_date ,start_date , end_date);
      
      return (dsr_date  >= start_date&& dsr_date  <= end_date  );
      // && (this.getFilterControl('final_approve').value.toLowerCase())==item.action[0].btnText 
    })
    console.log(filteredData)

  }
  onSubmit() {

    if (this.dsrForm.valid) {
      this.dsrForm.value['s_no'] = this.Table_DATA.length + 1;
      this.dsrForm.value['date'] = this.datePipe.transform(this.getControl('date').value, 'yyyy-MM-dd');
      this.dsrForm.value['employment_type'] = this.userData.designation;
      this.dsrForm.value['emp_name'] = this.userData.name;
      // this.dsrForm.value['project_name'] = 'Project Trainee Angular';
      this.dsrForm.value['email'] = this.userData.email;
      this.dsrForm.value['action'] = [{ icon: '', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_DETAILS', type: 'route', routeID: 121 }];
      // this.utilityService.dsrList.push(this.dsrForm.value);

      this.dataSource.data.push(this.dsrForm.value);

      this.dataSource._updateChangeSubscription()

      this.notificationService.showSuccess('DSR', 'Added');
      this.toggle = false;
      this.dsrForm.reset();
      this.noWork = false
    } else {
      this.notificationService.showError('All fields', 'Requierd');

    }
  }

}

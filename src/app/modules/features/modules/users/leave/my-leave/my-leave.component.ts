import { DatePipe } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInUpAnimation } from 'src/animations/fade-in-up.animation';
import { MY_LEAVE_TABLE_HEADING } from 'src/app/constants/table-headers';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UtilityServiceService } from 'src/app/services/utility-service/utility-service.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss'],
  providers: [DatePipe],
  animations: [fadeInUpAnimation]
})
export class MyLeaveComponent implements OnInit, AfterContentChecked {
  leaves = [
    {
      leaveType: 'Planned',
      totalLeave: '6.00',
      usedLeave: 1
    }, {
      leaveType: 'Privileged',
      totalLeave: '5.00',
      usedLeave: 0
    },
    {
      leaveType: 'Emergency',
      totalLeave: '5.50',
      usedLeave: 1
    },
    {
      leaveType: 'Short',
      totalLeave: '10.00',
      usedLeave: 1
    }
  ]
  shortLeaveStartTime=['10:00','12:00','2:00','3:00','5:00'];
  shortLeaveEndTime=['12:00','2:00','4:00','5:00','7:00'];

  leaveTypes: string[] = ['Planned Leave', 'Privileged Leave', 'Emergency Leave', 'Short Leave', 'All Reamaining Leave']
  leaveForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = MY_LEAVE_TABLE_HEADING;
  Table_DATA!: any[];
  constructor(private formBuilder: FormBuilder, private _formService: FormService,
    private notificationService: NotificationService,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,
    private utilityService: UtilityServiceService,
    private _elementRef: ElementRef

  ) {

  }


  ngOnInit(): void {
    this.createForm();
    this.Table_DATA = this.utilityService.leaveList;
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.getControl('end_time').patchValue('12:00');
    this.getControl('end_time').disable();
  }


  toggleForm() {
    let content = this._elementRef.nativeElement.querySelector('.form');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
    } 
  }

  createForm() {
    this.leaveForm = this.formBuilder.group({
      leave_type: this._formService.getControl('cv'),
      start_time: this._formService.getControl('cv', false),
      end_time: this._formService.getControl('cv', false),
      is_half_day: this._formService.getControl('cv', false),
      half_day: this._formService.getControl('cv', false),
      start_date: this._formService.getControl('cv'),
      end_date: this._formService.getControl('cv'),
      remark: this._formService.getControl('name'),
      document: this._formService.getControl('cv'),
      reason: this._formService.getControl('address'),
    });
  }
 


  getControl(control: string): any {
    return this.leaveForm?.controls[control];
  }
  onSubmit() {
    console.log(this.leaveForm, 'leave  form');
    if (this.leaveForm.valid) {
      const today = new Date();
      this.leaveForm.value["applied_on"] = this.datePipe.transform(today, "yyyy-MM-dd");
      this.leaveForm.value["level_1"] = 'HR (Human Resourse)';
      this.leaveForm.value["level_2"] = 'Suyash Saxena(AI057)';
      this.leaveForm.value["status"] = 'pending';
      this.leaveForm.value['action'] = [{ icon: 'arrow_forward', route: 'LEAVE_DETAILS', type: 'route', routeID: 121 }];
      this.dataSource.data.push(this.leaveForm.value);
      this.dataSource._updateChangeSubscription();
      this.notificationService.showSuccess('Leave', 'Saved');
      // this.toggle = false;
      this.leaveForm.reset();
    } else {
      this.notificationService.showError('Requierd', 'All fields')
    }
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  dropdownSelection(event:any){
    this.getControl('end_time').patchValue(this.shortLeaveEndTime[event.itemIndex]);
  }
}

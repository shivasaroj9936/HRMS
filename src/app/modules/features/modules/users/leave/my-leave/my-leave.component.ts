import { DatePipe } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss'],
  providers:[DatePipe]
})
export class MyLeaveComponent implements OnInit,AfterContentChecked {
  toggle = false;
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
  leaveTypes: string[] = ['Planned Leave', 'Privileged Leave', 'Emergency Leave', 'Short Leave', 'All Reamaining Leave']
  leaveForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
    { heading: "Leave Type", key: 'leave_type', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request From", key: 'start_date', isSortable: '', type: 'date', link: 'client-details' },
    { heading: "Request To", key: 'end_date', isSortable: '', type: 'date', link: 'client-details' },
    { heading: "Applied On", key: 'applied_on', isSortable: '', type: 'date', link: 'client-details' },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Level 1", key: 'level_1', isSortable: '', type: 'text', link: 'client-details',class:'red' },
    { heading: "Level 2", key: 'level_2', isSortable: '', type: 'text', link: 'client-details',class:'red'  },
  ]
  Table_DATA: any[] = [
   {action:[{icon:'arrow_forward',route:'LEAVE_DETAILS',type:'route',routeID:121}],leave_type:'Short Leave',start_date:'01/01/2022',end_date:'01/01/2022',applied_on:'01/01/2022',status:'pending',level_1:'	Suyash Saxena(AI057)',level_2:'HR (Human Resourse)'}
  ]
  constructor(private formBuilder: FormBuilder, private _formService: FormService,
    private notificationService:NotificationService,
    private datePipe:DatePipe,
    private cdr:ChangeDetectorRef
    
    ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.leaveForm = this.formBuilder.group({
      leave_type: this._formService.getControl('cv'),
      start_time: this._formService.getControl('cv',false),
      end_time: this._formService.getControl('cv',false),
      is_half_day: this._formService.getControl('cv',false),
      half_day: this._formService.getControl('cv',false),
      start_date: this._formService.getControl('cv'),
      end_date: this._formService.getControl('cv'),
      remark: this._formService.getControl('cv'),
      document: this._formService.getControl('cv'),
      reason: this._formService.getControl('address'),
    });
  }


  getControl(control: string): any {
    return this.leaveForm?.controls[control];
  }
  onSubmit(){
    console.log(this.leaveForm);
    if(this.leaveForm.valid){
      const today=new Date();
      this.leaveForm.value["applied_on"] = this.datePipe.transform( today, "yyyy-MM-dd" );
      this.leaveForm.value["level_1"] = 'HR (Human Resourse)';
      this.leaveForm.value["level_2"] = 'Suyash Saxena(AI057)';
      this.leaveForm.value["status"] = 'pending';
      this.leaveForm.value['action']=[ {icon:'arrow_forward',route:'LEAVE_DETAILS',type:'route',routeID:121}];
      this.dataSource.data.push(this.leaveForm.value);
      this.dataSource._updateChangeSubscription();
      this.notificationService.showSuccess('Leave','Saved');
      this.toggle=false;
      this.leaveForm.reset() ;
    }else{
      this.notificationService.showError('Requierd','All fields')
    }
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}

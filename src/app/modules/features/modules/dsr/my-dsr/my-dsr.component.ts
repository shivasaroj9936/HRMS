import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss']
})
export class MyDsrComponent implements OnInit {

  toggle = false;
  leaveTypes: string[] = ['Planned Leave', 'Privileged Leave', 'Emergency Leave', 'Short Leave', 'All Reamaining Leave']
  leaveForm!: FormGroup;
  filterForm!: FormGroup;

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
    { heading: "Leave Type", key: 'leave_type', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request From", key: 'request_from', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request To", key: 'request_to', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Applied On", key: 'applied_on', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Level 1", key: 'level_1', isSortable: '', type: 'text', link: 'client-details',class:'red' },
    { heading: "Level 2", key: 'level_2', isSortable: '', type: 'text', link: 'client-details',class:'red'  },
  ]
  Table_DATA: any[] = [
   {action:[{icon:'arrow_forward',route:'LEAVE_DETAILS',type:'route',routeID:121}],leave_type:'Short Leave',request_from:'01/01/2022',request_to:'01/01/2022',applied_on:'01/01/2022',status:'pending',level_1:'	Suyash Saxena(AI057)',level_2:'HR (Human Resourse)'}
  ]
  constructor(private formBuilder: FormBuilder, private _formService: FormService,private notificationService:NotificationService) {
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
    
    this.filterForm = this.formBuilder.group({
      start_date: this._formService.getControl('cv',false),
      end_date: this._formService.getControl('cv',false),
      submission_status: this._formService.getControl('cv',false),
      project: this._formService.getControl('cv'),
      final_approve: this._formService.getControl('cv',false),
      hours: this._formService.getControl('cv',false),
    });
  }
    


  getControl(control: string): any {
    return this.leaveForm?.controls[control] ;
  }
  getFilterControl(control: string): any {
    return this.filterForm?.controls[control] ;
  }
  onFilter(){
    console.log(this.filterForm);
    
  }
  onSubmit(){
    console.log(this.leaveForm);
    if(this.leaveForm.valid){
      this.notificationService.showSuccess('Leave','Saved');
      this.toggle=false;
      this.leaveForm.reset() ;
    }
  }

}

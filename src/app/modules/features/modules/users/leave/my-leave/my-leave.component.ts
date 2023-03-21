import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
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
  constructor(private formBuilder: FormBuilder, private _formService: FormService) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.leaveForm = this.formBuilder.group({
      leave_type: this._formService.getControl('cv'),
      is_half_day: this._formService.getControl('cv'),
      half_day: this._formService.getControl('cv'),
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
  onSave(){
    console.log(this.leaveForm);
    
  }
}

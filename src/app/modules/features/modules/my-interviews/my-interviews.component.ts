import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MY_INTERVIEW_TABLE_HEADING } from 'src/app/constants/table-headers';
import { STATUS, TECHNOLOGY } from '../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-my-interviews',
  templateUrl: './my-interviews.component.html',
  styleUrls: ['./my-interviews.component.scss']
})
export class MyInterviewsComponent implements OnInit {
  department = new FormControl();
  technology = new FormControl();
  status=STATUS;
  techList=TECHNOLOGY;
  dataSource!: MatTableDataSource<any>;
  
  columns = MY_INTERVIEW_TABLE_HEADING;
  Table_DATA: any[] = [
    // { s_no: 1, training_name: 'Anusha',experience:'3 years', department: 'Angular', position: 'Sr. Software Engineer', date_of_referral: '22/01/2023',  candidate_status:'closed',"action": [ {icon:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf'}] },
    // { s_no: 2, candidate_name: 'Rajesh Kumar', experience:'5 + years',department: 'Node Js', position: 'Tech Lead', date_of_referral: '22/01/2023',  candidate_status:'open',"action": [ {icon:'download',link:'/assets/applogo.png'}] },
   
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}

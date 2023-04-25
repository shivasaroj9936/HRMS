import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { REFERRAL_LIST_TABLE_HEADING } from 'src/app/constants/table-headers';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns =REFERRAL_LIST_TABLE_HEADING;
  Table_DATA: any[] = [
    { s_no: 1, candidate_name: 'Anusha',experience:'3 years', department: 'Angular', position: 'Sr. Software Engineer', date_of_referral: '22/01/2023',  candidate_status:'closed',"action": [ {icon:'download',type:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf'}] },
    { s_no: 2, candidate_name: 'Rajesh Kumar', experience:'5 + years',department: 'Node Js', position: 'Tech Lead', date_of_referral: '22/01/2023',  candidate_status:'open',"action": [ {icon:'download',type:'download',link:'/assets/applogo.png'}] },
   
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}

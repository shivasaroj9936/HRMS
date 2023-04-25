import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ASSET_TABLE_HEADING } from 'src/app/constants/table-headers';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  
  columns = ASSET_TABLE_HEADING;
  Table_DATA: any[] = [
    {asset_name:'LAPTOP',asset_category:'Laptop',company_asset_code:'A&M11',brand:'HP',serial_no:'-',model:'G5',is_working:'Yes',company:'Appinventiv Technology'},
    // { s_no: 1, training_name: 'Anusha',experience:'3 years', department: 'Angular', position: 'Sr. Software Engineer', date_of_referral: '22/01/2023',  candidate_status:'closed',"action": [ {icon:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf'}] },
    // { s_no: 2, candidate_name: 'Rajesh Kumar', experience:'5 + years',department: 'Node Js', position: 'Tech Lead', date_of_referral: '22/01/2023',  candidate_status:'open',"action": [ {icon:'download',link:'/assets/applogo.png'}] },
   
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {

  empName= new FormControl('Shiva Saroj');
  company= new FormControl('Appinventiv Technologies');
  punchRequest= new FormControl('08/01/2023');

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Name', key: 'name', isSortable: 'isSortable', type: 'text', },
    { heading: 'Punch Time', key: 'punch_time', isSortable: 'isSortable', type: 'text', },
    { heading: 'Direction', key: 'direction', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [
    // { 's_no': '1', 'transaction_id': 5, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ]

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
  }

}

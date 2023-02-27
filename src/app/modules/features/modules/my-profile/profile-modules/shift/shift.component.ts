import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  dataSourceForTable!: MatTableDataSource<any>;
  columns = [
    { heading: 'Action', key: 'action', isSortable: 'isSortable', type: 'text', },
    { heading: 'School/University', key: 'school', isSortable: 'isSortable', type: 'text', },
    { heading: 'Time Period', key: 'time', isSortable: 'isSortable', type: 'text', },
    { heading: 'Education Level', key: 'education', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [
    // { 's_no': '1', 'transaction_id': 5, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ]

  constructor() {
    this.dataSourceForTable = new MatTableDataSource<any>(this.Table_DATA);
  }
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MANUAL_PUNCH_TABLE_HEADING } from 'src/app/constants/table-headers';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {
  empName= new FormControl('Shiva Saroj');
  company= new FormControl('Appinventiv Technologies');
  punchRequest= new FormControl('08/01/2023');

  dataSource!: MatTableDataSource<any>;
  columns = MANUAL_PUNCH_TABLE_HEADING;
  Table_DATA: any[] = [
    // { 's_no': '1', 'transaction_id': 5, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ]

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
  }

}

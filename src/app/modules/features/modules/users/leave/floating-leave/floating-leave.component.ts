import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FLOATING_LEAVE_TABLE_HEADING } from 'src/app/constants/table-headers';

@Component({
  selector: 'app-floating-leave',
  templateUrl: './floating-leave.component.html',
  styleUrls: ['./floating-leave.component.scss']
})
export class FloatingLeaveComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = FLOATING_LEAVE_TABLE_HEADING;
  Table_DATA: any[] = [
    { s_no: 1, event_name: ' Janmashtami', date: '	7th Sep, 2023',   },
    { s_no: 2, event_name: ' 	Eid al-Adha', date: '	29th Jun, 2023',   },
    
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }
  ngOnInit(): void {
  }

}

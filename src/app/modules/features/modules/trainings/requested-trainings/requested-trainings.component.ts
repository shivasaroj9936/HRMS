import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TRAING_REQUEST_TABLE_HEADING } from 'src/app/constants/table-headers';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss']
})
export class RequestedTrainingsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = TRAING_REQUEST_TABLE_HEADING;
  Table_DATA: any[] = [  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}

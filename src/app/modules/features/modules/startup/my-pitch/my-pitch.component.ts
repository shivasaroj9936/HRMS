import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss']
})
export class MyPitchComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: '#', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Title", key: 'title', isSortable: '', type: 'text', link: '' },
    { heading: "Industry", key: 'industry', isSortable: '', type: 'text', link: '' },
    { heading: 'Technical / Non-Technical', key: 'technical', isSortable: '', type: 'text', },
    { heading: 'Submitted On', key: 'submitted_on', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },
  ]
  Table_DATA: any[] = [ ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }
  ngOnInit(): void {
    
  }

}

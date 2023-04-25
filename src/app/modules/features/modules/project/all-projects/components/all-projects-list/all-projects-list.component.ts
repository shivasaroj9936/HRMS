import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PROJECT_LIST_TABLE_HEADING } from 'src/app/constants/table-headers';

@Component({
  selector: 'app-all-projects-list',
  templateUrl: './all-projects-list.component.html',
  styleUrls: ['./all-projects-list.component.scss']
})
export class AllProjectsListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = PROJECT_LIST_TABLE_HEADING;
  Table_DATA: any[] = [{
     action: [{ icon: '', btnStyle:'link', btnText:'Trainee Project Angular',route: 'PROJECT_DETAILS', type: 'route', routeID: 121 }],
     billing_type_resource: '3', hrs: '34232', total_milestone: '01',
     delivered: '1', pending: '01', compete_status: '	66 %',
  }
  ]
  constructor(  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}

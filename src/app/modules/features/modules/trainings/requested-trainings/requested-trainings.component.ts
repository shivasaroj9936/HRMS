import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss']
})
export class RequestedTrainingsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Training Name", key: 'training_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Timeline to conduct", key: 'timeline_to_conduct', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Requested date", key: 'requested_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Status', key: 'status', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },

  ]
  Table_DATA: any[] = [  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}

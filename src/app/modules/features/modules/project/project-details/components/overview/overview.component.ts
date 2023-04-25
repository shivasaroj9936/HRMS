import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PLANNED_DELIVERIES_TABLE_HEADING, PROJECT_TEAM_DETAILS_TABLE_HEADING } from 'src/app/constants/table-headers';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  plannedDeliveriesDataSource!: MatTableDataSource<any>;
  teamDetailColumnsDataSource!: MatTableDataSource<any>;
  tags1=['Designs','Scope of work','WireFrame','RoadMap',];
  tags2=['Project Plan','User stories','project App Links','Other'];


  plannedDeliveriesColumns = PLANNED_DELIVERIES_TABLE_HEADING;
  teamDetailColumns = PROJECT_TEAM_DETAILS_TABLE_HEADING;
  Table_DATA: any[] = [];
  Table_DATA1: any[] = [
    {      name: 'Rabban Ahmad', allocated_as: 'Tech Lead', department: 'Angular', alloc_hrs: '0.00', exp: '11.0', relevant_exp: '0.3', hrs_log: '63:0'    },
    {      name: 'Shiva Saroj', allocated_as: 'Tech Lead', department: 'Angular', alloc_hrs: '0.00', exp: '11.0', relevant_exp: '0.3', hrs_log: '63:0'    },
    {      name: 'Nandini Rohatgi  ', allocated_as: 'Tech Lead', department: 'Angular', alloc_hrs: '0.00', exp: '11.0', relevant_exp: '0.3', hrs_log: '63:0'    },
  ]
  constructor(private notificationService: NotificationService) {
    this.plannedDeliveriesDataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.teamDetailColumnsDataSource = new MatTableDataSource<any>(this.Table_DATA1);


  }

  ngOnInit(): void {
  }

}

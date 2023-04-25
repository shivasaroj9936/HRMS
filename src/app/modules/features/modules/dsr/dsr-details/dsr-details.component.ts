import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MY_DSR_DETAILS_TABLE_HEADING } from 'src/app/constants/table-headers';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { UtilityServiceService } from 'src/app/services/utility-service/utility-service.service';

@Component({
  selector: 'app-dsr-details',
  templateUrl: './dsr-details.component.html',
  styleUrls: ['./dsr-details.component.scss']
})
export class DsrDetailsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  routeID: any;
  dsr: any;


  columns = MY_DSR_DETAILS_TABLE_HEADING;
  Table_DATA: any[] = [
    {
    s_no: 1, type: 'text', isSortable: 'sortable', action: [{ icon: 'edit', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_EDIT', type: 'route', routeID: 121 }], project_name: '	Trainee Project Angular', status: 'Submitted',
    pm_approval: 'N/A', am_approval: 'N/A', rm_approval: 'N/A',final_approve:'Pending',logged_hr:'8:00',
    dsr: "<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Meetings</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; NA&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Task&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; &nbsp;Bug fixing [2hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; &nbsp;Portal registration [1 hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; Working on job openings module [ 3 hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Challenges</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">NA</p>"
  }
  ]
  constructor(private notificationService: NotificationService,
    private utilityService: UtilityServiceService,
    private activatedRoute: ActivatedRoute
    ) {
      
    }
    
    ngOnInit(): void {
      // this.routeID = this.activatedRoute.snapshot?.paramMap?.get("id");
      // this.dsr = this.utilityService.dsrList[this.routeID];
      // this.dsr['action']= [{ icon: 'edit', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_EDIT', type: 'route', routeID: 121 }] 
      // this.Table_DATA.push(this.dsr);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    
  }

}

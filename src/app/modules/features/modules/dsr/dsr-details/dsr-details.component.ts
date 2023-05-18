import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { MY_DSR_DETAILS_TABLE_HEADING } from "src/app/constants/table-headers";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";
import { getDSR } from "src/app/state/data.selector";

@Component({
  selector: "app-dsr-details",
  templateUrl: "./dsr-details.component.html",
  styleUrls: ["./dsr-details.component.scss"],
})
export class DsrDetailsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  routeID: any;
  dsr: any;

  columns = MY_DSR_DETAILS_TABLE_HEADING;
  Table_DATA: any[] = [ ];
  constructor(
    private notificationService: NotificationService,
    private utilityService: UtilityServiceService,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ Data: any }>
  ) {}

  ngOnInit(): void {
    this.routeID = this.activatedRoute.snapshot?.paramMap?.get("id");
    // this.dsr = this.utilityService.dsrList[this.routeID];
    // this.dsr['action']= [{ icon: 'edit', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_EDIT', type: 'route', routeID: 121 }]
    // this.Table_DATA.push(this.dsr);
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.store.select(getDSR).subscribe((data) => {
      let dsr = data[this.routeID-1];
      dsr = {
        ...dsr,
        action: [
          {
            icon: "edit",
            btnStyle: "btn_add_new",
            btnText: "pending",
            route: "DSR_EDIT",
            type: "route",
            routeID: 121,
          },
        ],
      };
      console.log();
      this.Table_DATA.push(dsr);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    });
  }
}

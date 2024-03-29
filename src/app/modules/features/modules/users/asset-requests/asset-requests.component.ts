import { DatePipe } from "@angular/common";
import { Component, ElementRef, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import {  ASSET_REQUEST_TABLE_HEADING } from "src/app/constants/table-headers";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-asset-requests",
  templateUrl: "./asset-requests.component.html",
  styleUrls: ["./asset-requests.component.scss"],
  providers: [DatePipe]
})
export class AssetRequestsComponent implements OnInit {
  assetCategory = ["Laptop", "Mobile", "Desktop"];
  quantity = ["1", "2", "3", "4", "5"];
  priority = ["Low", "Medium", "High"];
  allocationType = ["Permanent", "Temporary"];
  formToggle = false;
  assetRequestForm!: FormGroup;


  dataSource!: MatTableDataSource<any>;
  
  columns = ASSET_REQUEST_TABLE_HEADING;
  Table_DATA: any[] = [
    {s_no:1,status:'under process',request_reason:'work need',priority:'high',request_at:'01/01/2022',asset_category:'Laptop',company:'Appinventiv Technology'}
  ]
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService:NotificationService,
    private datePipe: DatePipe,
    private _elementRef: ElementRef
  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.assetRequestForm = this.formBuilder.group({
      asset_category: this._formService.getControl("name"),
      quantity: this._formService.getControl("cv"),
      priority: this._formService.getControl("cv"),
      require_date: this._formService.getControl("cv"),
      allocation_type: this._formService.getControl("cv"),
      request_reason: this._formService.getControl("address"),
    });
  }

  getControl(control: string): any {
    return this.assetRequestForm?.controls[control];
  }
  toggleForm() {
    let content = this._elementRef.nativeElement.querySelector('.form');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
    } 
  }
  onSubmit() {

    if(this.assetRequestForm.valid){
      this.assetRequestForm.value['s_no']=this.Table_DATA.length;
      this.assetRequestForm.value['status']='pending';
      this.assetRequestForm.value['request_at']=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.assetRequestForm.value['company']='Apple';
      this.Table_DATA.push(this.assetRequestForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.assetRequestForm.reset();
      this.toggleForm();
      this.notificationService.showSuccess('Asset Request','Saved')
    }
  }
}

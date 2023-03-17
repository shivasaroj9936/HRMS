import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/services/form-service/form.service';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss']
})
export class AssetDeclarationComponent implements OnInit {

  assetCategory = ["Laptop", "Mobile", "Desktop"];
  quantity = ["1", "2", "3", "4", "5"];
  priority = ["Low", "Medium", "High"];
  allocationType = ["Permanent", "Temporary"];
  formToggle = false;
  assetDeclarationForm!: FormGroup;


  dataSource!: MatTableDataSource<any>;
  
  columns = [
    { heading: 'S.No', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request Reason", key: 'request_reason', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Priority", key: 'priority', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Request At", key: 'request_at', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Asset Category", key: 'asset_category', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Company', key: 'company', isSortable: '', type: 'text', },
  ]
  Table_DATA: any[] = [
    {s_no:1,status:'under process',request_reason:'work need',priority:'high',request_at:'01/01/2022',asset_category:'Laptop',company:'Appinventiv Technology'}
  ]
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService
  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.assetDeclarationForm = this.formBuilder.group({
      emp_id: this._formService.getControl("cv"),
      unique_asset_code: this._formService.getControl("cv"),
      serial_no: this._formService.getControl("cv"),
      model_no: this._formService.getControl("cv"),
      os: this._formService.getControl("cv"),
      os_version: this._formService.getControl("cv"),
      brand: this._formService.getControl("cv"),
      colour: this._formService.getControl("cv"),
      device_working_condition: this._formService.getControl("cv"),
      asset_image: this._formService.getControl("cv"),
    });
  }

  getControl(control: string): any {
    return this.assetDeclarationForm?.controls[control];
  }
  onSubmit() {
    console.log(this.assetDeclarationForm.value);
    
  }

}

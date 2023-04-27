import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ASSETDECLARATION_TABLE_HEADING } from 'src/app/constants/table-headers';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

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
  
  columns = ASSETDECLARATION_TABLE_HEADING;

  Table_DATA: any[] = [
    // {s_no:1,status:'under process',request_reason:'work need',priority:'high',request_at:'01/01/2022',asset_category:'Laptop',company:'Appinventiv Technology'}
  ]
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService:NotificationService,
    private _elementRef: ElementRef

  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
    this.createForm();
    this.getControl('emp_id').patchValue('AI1580');
    this.getControl('emp_id').disable();

  }

  createForm() {
    this.assetDeclarationForm = this.formBuilder.group({
      emp_id: this._formService.getControl("cv"),
      unique_asset_code: this._formService.getControl("cv"),
      serial_no: this._formService.getControl("cv"),
      model_no: this._formService.getControl("cv"),
      os: this._formService.getControl("cv"),
      os_version: this._formService.getControl("cv"),
      brand: this._formService.getControl("name"),
      colour: this._formService.getControl("name"),
      device_working_condition: this._formService.getControl("cv"),
      asset_image: this._formService.getControl("cv"),
    });
  }

  getControl(control: string) {
    return this.assetDeclarationForm?.controls[control] as FormControl;
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
    // console.log(this.assetDeclarationForm.value);
    if(this.assetDeclarationForm.valid){
      this.assetDeclarationForm.value['s_no']=this.Table_DATA.length;
      this.assetDeclarationForm.value['added']='yes';
      this.Table_DATA.push(this.assetDeclarationForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.assetDeclarationForm.reset();
      this.toggleForm();
      this.notificationService.showSuccess('Asset Declaration','Saved')
    }
  }

}

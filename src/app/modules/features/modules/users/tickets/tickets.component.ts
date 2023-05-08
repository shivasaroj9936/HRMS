import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TICKET_TABLE_HEADING } from 'src/app/constants/table-headers';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [DatePipe]

})
export class TicketsComponent implements OnInit {
  ticketCategory: string[] = ['IT', 'Admin']

  ticketForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = TICKET_TABLE_HEADING;
  Table_DATA: any[] = [ ]
  constructor(private formBuilder: FormBuilder, private _formService: FormService, private notificationService: NotificationService,
    private datePipe: DatePipe,
    private _elementRef: ElementRef


  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ticketForm = this.formBuilder.group({
      subject: this._formService.getControl('name'),
      department: this._formService.getControl('cv',),
      ticket_category: this._formService.getControl('cv',),
      priority: this._formService.getControl('cv',),
      ticket_description: this._formService.getControl('address'),
    });
  }


  getControl(control: string): any {
    return this.ticketForm?.controls[control];
  }
  onSubmit() {

    if (this.ticketForm.valid) {

      this.ticketForm.value['status'] = 'pending';
      this.ticketForm.value['date'] = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.ticketForm.value['ticket_code'] = '8762';
      this.ticketForm.value['employee'] = 'Shiva Saroj(AI 1580)';
      this.ticketForm.value['action'] = [{ icon: 'arrow_forward', route: 'LEAVE_DETAILS', type: 'route', routeID: 121 }];
      this.Table_DATA.push(this.ticketForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.notificationService.showSuccess('Ticket', 'Added');
      // console.log(this.ticketForm.value);
      this.ticketForm.reset();
    }else{
      this.notificationService.showError('All fields', 'Requierd');


    }
  }
  toggleForm() {
    let content = this._elementRef.nativeElement.querySelector('.form');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
    } 
  }

}

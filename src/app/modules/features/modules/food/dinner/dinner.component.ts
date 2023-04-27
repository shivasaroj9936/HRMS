import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { fadeInUpAnimation } from 'src/animations/fade-in-up.animation';
import { FormService } from 'src/app/services/form-service/form.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss'],
  animations:[fadeInUpAnimation]
})
export class DinnerComponent implements OnInit {
  dinnerRequestForm!: FormGroup;
  toggle = false;
  projects: string[] = ['All', 'Trainee Project Angular'];

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService,
    private _elementRef :ElementRef
  ) { }

  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.dinnerRequestForm = this.formBuilder.group({
      project: this._formService.getControl('cv'),
      date: this._formService.getControl('cv',),
      description: this._formService.getControl('dsr'),
    });
    this.getControl('date').patchValue(new Date())
    this.getControl('date').disable();

  }
  getControl(control: string): FormControl {
    return this.dinnerRequestForm?.controls[control] as FormControl;
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

    if (this.dinnerRequestForm.valid) {
      this.dinnerRequestForm.value['date'] = this.getControl('date').value;

      this.dinnerRequestForm.value['action'] = [{ icon: '', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_DETAILS', type: 'route', routeID: 121 }];
      // this.utilityService.dsrList.push(this.dinnerRequestForm.value);



      this.notificationService.showSuccess('Dinner Request  Added', '');
      this.toggle = false;
      this.dinnerRequestForm.reset();
    } else {
      this.notificationService.showError('All fields', 'Requierd');

    }
  }
}

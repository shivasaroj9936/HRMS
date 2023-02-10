import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slide-in-right';
import { BASIC_INFORMATION, FORM_LABEL, GENDER_INPUT_DROPDOWN, MARITAL_DROPDOWN } from 'src/app/constants/ui-texts/dashboard-card';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations:[slideInRight]
})
export class BasicInformationComponent implements OnInit {
  uiMessage=BASIC_INFORMATION         
  labelMessage=FORM_LABEL
  genderValue=GENDER_INPUT_DROPDOWN
  maritalStatusValue=MARITAL_DROPDOWN
  constructor() { }

  ngOnInit(): void {
  }

}

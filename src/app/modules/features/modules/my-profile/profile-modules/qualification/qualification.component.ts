import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slide-in-right';
import { BASIC_INFORMATION, EDUCATION_DROPDOWN, FORM_LABEL, LANGUAGE_DROPDOWN } from 'src/app/constants/ui-texts/dashboard-card';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations:[slideInRight]
})
export class QualificationComponent implements OnInit {
  uiMessage=BASIC_INFORMATION
  labelMessage=FORM_LABEL
  educationDropdown = EDUCATION_DROPDOWN
  languageDropdown = LANGUAGE_DROPDOWN
  // heading =  QUALIFICATION_HEADING
  constructor() { }

  ngOnInit(): void {
  }

}

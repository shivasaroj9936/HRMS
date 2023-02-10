import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slide-in-right';
import { BASIC_INFORMATION } from 'src/app/constants/ui-texts/dashboard-card';
import { FORM_LABEL } from 'src/app/constants/ui-texts/dashboard-card';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations:[slideInRight]
})
export class ChangePasswordComponent implements OnInit {
  uiMessage=BASIC_INFORMATION
  labelMessage = FORM_LABEL
  constructor() { }

  ngOnInit(): void {
  }

}

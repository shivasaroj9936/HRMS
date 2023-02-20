import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { REFER_A_CANDIDATE_DIALOG } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-referal-form',
  templateUrl: './referal-form.component.html',
  styleUrls: ['./referal-form.component.scss']
})
export class ReferalFormComponent implements OnInit {
  constantLabels=REFER_A_CANDIDATE_DIALOG;
  referCandidateForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { TRAININGS } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-my-internal-trainings',
  templateUrl: './my-internal-trainings.component.html',
  styleUrls: ['./my-internal-trainings.component.scss']
})
export class MyInternalTrainingsComponent implements OnInit {
  trainingData=TRAININGS;

  constructor() { }

  ngOnInit(): void {
  }

}

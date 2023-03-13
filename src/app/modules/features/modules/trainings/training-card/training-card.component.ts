import { Component, Input, OnInit } from '@angular/core';
import { FRESHER_TRAINING_ITEM } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() data!:FRESHER_TRAINING_ITEM;
  constructor() { }

  ngOnInit(): void {
  }
  feedback(){}
}

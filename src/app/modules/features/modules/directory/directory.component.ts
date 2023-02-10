import { Component, OnInit } from '@angular/core';
import { BASIC_INFORMATION } from './constants/ui-text';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  uiText=BASIC_INFORMATION;
  departments=['dadd','dddddd','reredere','dsfere']
  constructor() { }

  ngOnInit(): void {
  }

}

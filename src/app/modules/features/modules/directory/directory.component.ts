import { Component, OnInit } from '@angular/core';
import { DIRECTORY_EMPLOYEE_DATA, IDIRECTORY_DATA } from 'src/app/interfaces/common.interface';
import { BASIC_INFORMATION } from './constants/ui-text';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  uiText=BASIC_INFORMATION;
  directoryDataList :IDIRECTORY_DATA[]=DIRECTORY_EMPLOYEE_DATA;
  departments=['dadd','dddddd','reredere','dsfere']
  constructor() { }

  ngOnInit(): void {
  }

}

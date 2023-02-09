import { Component, OnInit } from '@angular/core';
import { ProfilePart, PROFILE_PARTS } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

    profileParts :ProfilePart[]= PROFILE_PARTS
  constructor() { }

  ngOnInit(): void {
  }

}

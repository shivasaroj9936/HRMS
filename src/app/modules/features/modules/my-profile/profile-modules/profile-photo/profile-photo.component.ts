import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slide-in-right';
import { PROFILE_PICTURE_VALUE } from 'src/app/constants/ui-texts/dashboard-card';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
  animations:[slideInRight]
})
export class ProfilePhotoComponent implements OnInit {
  uiMessage=PROFILE_PICTURE_VALUE

  constructor() { }

  ngOnInit(): void {
  }

}

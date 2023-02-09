import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePhotoRoutingModule } from './profile-photo-routing.module';
import { ProfilePhotoComponent } from './profile-photo.component';


@NgModule({
  declarations: [
    ProfilePhotoComponent
  ],
  imports: [
    CommonModule,
    ProfilePhotoRoutingModule
  ]
})
export class ProfilePhotoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePhotoRoutingModule } from './profile-photo-routing.module';
import { ProfilePhotoComponent } from './profile-photo.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProfilePhotoComponent
  ],
  imports: [
    CommonModule,
    ProfilePhotoRoutingModule,
    MatButtonModule
  ]
})
export class ProfilePhotoModule { }

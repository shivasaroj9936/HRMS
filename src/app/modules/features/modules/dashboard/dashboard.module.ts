import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReferralBonousProgramComponent } from './components/referral-bonous-program/referral-bonous-program.component';
import { LatestJobOpeningComponent } from './components/latest-at-appinventiv/latest-job-opening/latest-job-opening.component';
import { NewFamilyMemberComponent } from './components/new-family-member/new-family-member.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'src/app/modules/shared/carousel/carousel.module';
import { MatIconModule } from '@angular/material/icon';
import { WorkAnniversaryComponent } from './components/latest-at-appinventiv/work-anniversary/work-anniversary.component';
import { CommonCardComponent } from './components/latest-at-appinventiv/common-card/common-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BirthdayCelebrationComponent } from './components/latest-at-appinventiv/birthday-celebration/birthday-celebration.component';
import { AwardsComponent } from './components/latest-at-appinventiv/awards/awards.component';
import { AppreciationComponent } from './components/latest-at-appinventiv/appreciation/appreciation.component';
import { GalleryImagesDialogComponent } from './components/gallery-images-dialog/gallery-images-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NguCarouselModule } from '@ngu/carousel';

const MATERIAL = [
  // MatSidenavModule,
  // MatListModule,
  MatIconModule,
  MatDialogModule,

  // MatToolbarModule,
  // MatMenuModule,
  MatButtonModule,
];
@NgModule({
  declarations: [
    DashboardComponent,
    ReferralBonousProgramComponent,
    LatestJobOpeningComponent,
    NewFamilyMemberComponent,
    AppreciationComponent,
    AwardsComponent,
    BirthdayCelebrationComponent,
    GalleryComponent,
    CommonCardComponent,
    WorkAnniversaryComponent,
    GalleryImagesDialogComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule,
    NguCarouselModule,

    ...MATERIAL

  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReferralBonousProgramComponent } from './components/referral-bonous-program/referral-bonous-program.component';
import { LatestJobOpeningComponent } from './components/latest-job-opening/latest-job-opening.component';
import { NewFamilyMemberComponent } from './components/new-family-member/new-family-member.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'src/app/modules/shared/carousel/carousel.module';
import { NguCarouselModule } from '@ngu/carousel';

const MATERIAL = [
  // MatSidenavModule,
  // MatListModule,
  // MatIconModule,
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

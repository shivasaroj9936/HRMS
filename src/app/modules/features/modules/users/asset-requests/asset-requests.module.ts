import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRequestsRoutingModule } from './asset-requests-routing.module';
import { AssetRequestsComponent } from './asset-requests.component';


@NgModule({
  declarations: [
    AssetRequestsComponent
  ],
  imports: [
    CommonModule,
    AssetRequestsRoutingModule
  ]
})
export class AssetRequestsModule { }

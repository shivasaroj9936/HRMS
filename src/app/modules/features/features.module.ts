import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";
import { FeaturesComponent } from "./features.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SideBarComponent } from "./feature-parts/side-bar/side-bar.component";
import { HeaderComponent } from "./feature-parts/header/header.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { ListItemComponent } from './feature-parts/side-bar/list-item/list-item.component';

const MATERIAL = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
];

@NgModule({
  declarations: [FeaturesComponent, SideBarComponent, HeaderComponent, ListItemComponent],
  imports: [CommonModule, FeaturesRoutingModule, ...MATERIAL],
})
export class FeaturesModule {}

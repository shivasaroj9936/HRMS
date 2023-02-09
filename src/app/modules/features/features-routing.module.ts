import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DASHBOARD, DIRECTORY, PROFILE } from "src/app/constants/routes";
import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,

    children: [
      { path: "", redirectTo: DASHBOARD.path, pathMatch: "full" },
      {
        path: DASHBOARD.path,
        loadChildren: () =>
          import("./modules/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: PROFILE.path,
        loadChildren: () =>
          import("./modules/my-profile/my-profile.module").then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: DIRECTORY.path,
        loadChildren: () =>
          import("./modules/directory/directory.module").then(
            (m) => m.DirectoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

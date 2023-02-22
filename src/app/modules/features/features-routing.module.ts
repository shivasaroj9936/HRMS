import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DASHBOARD, DIRECTORY, ENTREPRENEURSHIP_PROGRAM, MY_LINKS, PROFILE, STARTUP } from "src/app/constants/routes";
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
      {
        path:MY_LINKS.path,
        loadChildren:()=>import('./modules/my-links/my-links.module').then((m)=>m.MyLinksModule)
      },
      {
        path:ENTREPRENEURSHIP_PROGRAM.path,
        loadChildren:()=>import('./modules/entrepreneurship-program/entrepreneurship-program.module').then((m)=>m.EntrepreneurshipProgramModule)
      },
      {
        path:STARTUP.path,
        loadChildren:()=>import('./modules/startup/startup.module').then((m)=>m.StartupModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

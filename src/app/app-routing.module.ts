import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ACCOUNT, ADMIN } from "./constants/routes";
import { AuthGuard } from "./guards/auth/auth.guard";
import { HomeGuard } from "./guards/home/home.guard";
import { NotFoundComponent } from "./modules/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: ADMIN.path,
    pathMatch: "full",
  },
  {
    path: ADMIN.path,
    loadChildren: () =>
      import("./modules/features/features.module").then(
        (m) => m.FeaturesModule
      ),
      canActivate:[AuthGuard]

  },
  {
    path: ACCOUNT.path,
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
      canActivate:[HomeGuard]
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

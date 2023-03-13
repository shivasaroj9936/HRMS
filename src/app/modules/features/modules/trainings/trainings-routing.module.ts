import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  MY_TRAINING,
  ONGOING_TRAININGS,
  REQUESTED_TRAININGS,
  TRAININGS,
  UPCOMING_TRAINING,
} from "src/app/constants/routes";
import { TrainingsComponent } from "./trainings.component";

const routes: Routes = [
  {
    path: "",
    component: TrainingsComponent,
    children: [
      { path: "", redirectTo: UPCOMING_TRAINING.path, pathMatch: "full" },
      {
        path: UPCOMING_TRAINING.path,
        loadChildren: () =>
          import("./upcoming-trainings/upcoming-trainings.module").then(
            (m) => m.UpcomingTrainingsModule
          ),
      },
      {
        path: ONGOING_TRAININGS.path,
        loadChildren: () =>
          import("./ongoining-trainings/ongoining-trainings.module").then(
            (m) => m.OngoiningTrainingsModule
          ),
      },
      {
        path: MY_TRAINING.path,
        loadChildren: () =>
          import("./my-trainings/my-trainings.module").then(
            (m) => m.MyTrainingsModule
          ),
      },
      {
        path: REQUESTED_TRAININGS.path,
        loadChildren: () =>
          import("./requested-trainings/requested-trainings.module").then(
            (m) => m.RequestedTrainingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingsRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MY_DSR } from "src/app/constants/routes";
import { DrsComponent } from "./drs.component";

const routes: Routes = [
  {
    path: "",
    component: DrsComponent,
    children: [
      { path: "", redirectTo: MY_DSR.path, pathMatch: "full" },
      {
        path: MY_DSR.path,
        loadChildren: () =>
          import("./my-dsr/my-dsr.module").then((m) => m.MyDsrModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsrRoutingModule {}

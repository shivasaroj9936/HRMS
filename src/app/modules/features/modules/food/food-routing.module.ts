import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DINNER, LUNCH, PURCHASE_LUNCH_COUPON } from "src/app/constants/routes";
import { FoodComponent } from "./food.component";

const routes: Routes = [
  {
    path: "",
    component: FoodComponent,
    children: [
      { path: "", redirectTo: LUNCH.path, pathMatch: "full" },
      {
        path: LUNCH.path,
        loadChildren: () => import("./lunch/lunch.module").then((m) => m.LunchModule),
      },
      {
        path: DINNER.path,
        loadChildren: () => import("./dinner/dinner.module").then((m) => m.DinnerModule),
      },
      {
        path: PURCHASE_LUNCH_COUPON.path,
        loadChildren: () => import("./purchase-lunch-coupon/purchase-lunch-coupon.module").then((m) => m.PurchaseLunchCouponModule ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule { }

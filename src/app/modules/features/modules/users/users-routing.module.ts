import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ASSETS_DECLARATION, MY_ASSET_INVENTORY, REQUEST_ASSETS } from "src/app/constants/routes";
import { UsersComponent } from "./users.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {path:'',redirectTo:MY_ASSET_INVENTORY.path,pathMatch:'full'},
      {
        path: MY_ASSET_INVENTORY.path,
        loadChildren: () =>
          import("./assets/assets.module").then((m) => m.AssetsModule),
      },
      {
        path:REQUEST_ASSETS.path, loadChildren:()=>import('./asset-requests/asset-requests.module').then((m)=>m.AssetRequestsModule)
      },
      {
        path:ASSETS_DECLARATION.path,loadChildren:()=>import('./asset-declaration/asset-declaration.module').then((m)=>m.AssetDeclarationModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

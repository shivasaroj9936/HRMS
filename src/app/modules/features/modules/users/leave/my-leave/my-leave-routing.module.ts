import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLeaveComponent } from './my-leave.component';

const routes: Routes = [

  {path:'',
  component:MyLeaveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLeaveRoutingModule { }

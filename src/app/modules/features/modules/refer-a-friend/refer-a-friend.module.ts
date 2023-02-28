import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferAFriendRoutingModule } from './refer-a-friend-routing.module';
// import { ReferalFormComponent } from './referal-form/referal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReferAFriendComponent } from './refer-a-friend.component';


@NgModule({
  declarations: [
    // ReferalFormComponent
  
    ReferAFriendComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReferAFriendRoutingModule,
    MatSelectModule,
  ]
})
export class ReferAFriendModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ConfirmationDialogComponent } from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { environment } from "src/environments/environment";
import { AngularFireModule, FIREBASE_OPTIONS } from "@angular/fire/compat";
import { CommonTextAreaModule } from "./modules/shared/common-text-area/common-text-area.module";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { dataReducer } from "./state/data.reducer";
@NgModule({
  declarations: [AppComponent, ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    CommonModule,
    CommonTextAreaModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      positionClass: "toast-top-center",
    }),
    MatButtonModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot({ Data: dataReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

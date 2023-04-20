import { Injectable } from "@angular/core";
import { GoogleAuthProvider } from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { NotificationService } from "../notification-service/notification.service";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private route: Router,
    private notificationService: NotificationService

  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.route.navigate(["/admin"]);
        localStorage.setItem("token", "234");

        console.log(result,"You have been successfully logged in!");
        this.notificationService.showSuccess('Login Successfull','');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

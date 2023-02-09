import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-login-with-credential",
  templateUrl: "./login-with-credential.component.html",
  styleUrls: ["./login-with-credential.component.scss"],
})
export class LoginWithCredentialComponent implements OnInit {
  @Input() loginForm!: FormGroup;
  hide = false;
  constructor() {}

  ngOnInit(): void {}
  getControl(control: any) {
    return this.loginForm.controls[control];
  }
  login() {}
}

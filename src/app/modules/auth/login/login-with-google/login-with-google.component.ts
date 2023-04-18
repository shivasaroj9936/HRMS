import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.scss']
})
export class LoginWithGoogleComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.GoogleAuth();
  }
}

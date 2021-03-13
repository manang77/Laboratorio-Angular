import { Component, OnInit, Output } from '@angular/core';
import { Credential, newCredential } from '../model/credential';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userProfile: Credential = newCredential();
  userLogged: boolean = false;
  loginAction: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  validateCredentials() {
    this.loginAction = true;
    this.userLogged = this.authService.login(this.userProfile);
    if (this.userLogged) {
      this.router.navigate(['/dashboard']);
    }
  }

}

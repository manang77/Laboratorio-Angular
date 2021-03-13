import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfile: string = this.authService.getUserName();

  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(
  ): void {
  }
  updateProfile() {
    this.authService.setNewProfileName(this.userProfile);
  }
}

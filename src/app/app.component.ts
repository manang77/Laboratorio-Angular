import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Laboratorio Angular';

  userLogged():boolean {
    return this.authService.isLogged();
  }

  userProfile(): string {
    return this.authService.userCredential.profileName;
  }
  
  constructor(private authService: AuthService) {}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userLogged: boolean = this.authService.isLogged();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-rotate',
  templateUrl: './image-rotate.component.html',
  styleUrls: ['./image-rotate.component.scss']
})
export class ImageRotateComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}

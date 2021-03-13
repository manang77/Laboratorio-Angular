import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { User, newUser } from '../model/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-maintenance',
  templateUrl: './users-maintenance.component.html',
  styleUrls: ['./users-maintenance.component.scss']
})

export class UsersMaintenanceComponent implements OnInit {

  userList: User[] = this.usersService.getUsers();
  currentUser: User = newUser();

  deleteUser(id: string) {
    this.usersService.deleteUser(id);
    this.userList = this.usersService.getUsers();
    if (this.currentUser.id === id) {
      this.currentUser = newUser();
    }
  }

  addNewUser(newUser: User) {
    this.usersService.addUser(newUser);
    this.userList = this.usersService.getUsers();
  }

  updateUser(user: User) {
      this.usersService.updateUser(user);
      this.userList = this.usersService.getUsers();
  }

  editUser(id: string) {
    const selectedUser = this.usersService.getUser(id);
    if (selectedUser) {
      this.currentUser = { ...selectedUser };
    } else {
      this.currentUser = { ...newUser() };
    }
  }

  constructor(private usersService: UsersService, private router: Router, private authService: AuthService) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
    }
   }

  ngOnInit(): void {
  }

}

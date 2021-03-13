import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, newUser } from '../model/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  newUser: User = newUser();

  addNewUser() {
    this.onAddUser.emit(this.newUser);
    this.newUser = newUser();
  }

  constructor(private userService: UsersService ) { }

  ngOnInit(): void {
  }

}

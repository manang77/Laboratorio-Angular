import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User, newUser } from '../model/users';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  @Input() currentUser: User = newUser();
  @Output() onUserChanged: EventEmitter<User> = new EventEmitter();

  constructor() { }

  updateSelectedUser() {
    if (this.currentUser.name.length > 0 &&
      this.currentUser.email.length > 0 &&
      this.currentUser.phoneNumber.length > 0) {
        this.onUserChanged.emit(this.currentUser);
      }
  }

  ngOnInit(): void {
  }

}

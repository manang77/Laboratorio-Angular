import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../model/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() userList: User[] = [];
  @Output() onUserSelect: EventEmitter<string> = new EventEmitter();
  @Output() onDeleteUser: EventEmitter<string> = new EventEmitter();

  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'action'];

  deleteUser(id: string) {
    this.onDeleteUser.emit(id);
  }

  updateUser(id: string) {
    this.onUserSelect.emit(id);
  }

  constructor() { }

  ngOnInit(): void {

  }
}

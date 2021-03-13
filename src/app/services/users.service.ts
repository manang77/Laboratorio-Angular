import { Injectable } from '@angular/core';
import { User, userList } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = userList;

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  updateUser(editedUser: User) {
      const newUserList = this.users.filter(user => user.id !== editedUser.id);
      this.users = [...newUserList, editedUser].sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }

  private calculateId(): string {
    const newId = this.users.reduce((acum, user) => {
      if (parseInt(user.id) > parseInt(acum)) {
        acum = user.id;
      }
      return acum;
    }, '0')
    return (parseInt(newId) + 1).toString();
  }

  addUser(newUser: User) {
    this.users = [...this.users,
    {
      ...newUser,
      id: this.calculateId(),
    }];
  }

  deleteUser(id: string) {
    this.users = [...this.users.filter(user => user.id !== id)];
  }

  getUser(id: string) {
    const selectedUser = this.users.find(user => user.id === id);
    return selectedUser;
  }
}

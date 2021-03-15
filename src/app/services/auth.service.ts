import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Credential, newCredential } from '../model/credential'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged: boolean = false;
  userCredential: Credential = newCredential();

  constructor() { }

  login(user: Credential): Observable<boolean> {
    const login = (user.userId === 'laboratorio' && user.password === 'angular')
    ||
    (user.userId === 'laboratorio2' && user.password === 'angular2')
    ?
    true
    :
    false;
    if (login) {
      const profileName: string = this.setProfileNameInLocalStorage(user.userId);
      this.userCredential = { ...user, profileName: profileName};
    }
    return of(login).pipe(delay(3000));
  }

  logout() {
    this.userLogged = false;
    this.userCredential = newCredential();
  }

  isLogged(): boolean {
    return this.userLogged;
  }

  getUserName() {
    return (this.userLogged) ? this.userCredential.profileName : '';
  }

  setProfileNameInLocalStorage(loggedUserId: string): string {
    const profileNameInLocalStorage = localStorage.getItem(`profileName-${loggedUserId}`);
    if (profileNameInLocalStorage) {
      return profileNameInLocalStorage;
    } else {
      localStorage.setItem(`profileName-${loggedUserId}`, loggedUserId);
      return loggedUserId;
    }
  }

  setLogged(status: boolean) {
    this.userLogged = status;
  }

  setNewProfileName(newProfileName: string) {
    this.userCredential.profileName = newProfileName;
    localStorage.setItem(`profileName-${this.userCredential.userId}`, newProfileName);
  }
}

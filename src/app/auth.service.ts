import { Injectable } from '@angular/core';
import {USERNAME,AUTHTOKEN} from './constants'
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private username:string = null ;
  private password :string = null;
  private _isAuthenticated = new BehaviorSubject(false);

  constructor() { }


  // saveUserData(id, token) {
  //   localStorage.setItem(GC_USER_ID, id);
  //   localStorage.setItem(GC_AUTH_TOKEN, token);
  //   this.authService.setUserId(id);
  // }

  saveUserData(username: string, token: string) {
    localStorage.setItem(USERNAME, username);
    localStorage.setItem(AUTHTOKEN, token);
    this.setusername(username);
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  setusername(username: string) {
    this.username = username;
    this._isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem(USERNAME);
    localStorage.removeItem(AUTHTOKEN);
    // localStorage.removeItem(AFF_ID);
    this.username = null;
    this._isAuthenticated.next(false);
  }

  // 8
  autoLogin() {
    const username = localStorage.getItem(USERNAME);
    if (username) {
      this.setusername(username);

    }
  }
}

import { UserModel } from 'src/app/security';
import { Router } from '@angular/router';

export class SessionUtils {

  constructor(){}

  static getToken(): string {
    return sessionStorage.getItem('token');
  }

  static setToken(token: string): void {
    return sessionStorage.setItem('token', token);
  }

  static getUser(): UserModel {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  static setUser(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  static closeSession(router: Router): void {
    localStorage.clear();
    sessionStorage.clear();
    router.navigate(['/security']);
  }

}

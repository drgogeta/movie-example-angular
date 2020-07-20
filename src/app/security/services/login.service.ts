import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { UserModel, LoginModel } from '../models';
import { SaveUserUtil } from '../utils/save-user.util';

@Injectable()
export class LoginService {
  constructor() {}

  login(data: LoginModel): Observable<UserModel> {
    let userUtil: SaveUserUtil = new SaveUserUtil();
    return userUtil.validateUser(data).pipe(
      tap((data) => userUtil.saveUser(data))
    );
  }

}

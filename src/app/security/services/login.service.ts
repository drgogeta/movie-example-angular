import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserModel, LoginModel } from '../models';
import { SaveUserUtil } from '../utils/save-user.util';

@Injectable()
export class LoginService {
  constructor() {}

  login(data: LoginModel): Observable<UserModel> {
    const userUtil: SaveUserUtil = new SaveUserUtil();
    return userUtil.validateUser(data).pipe(
      tap(value => userUtil.saveUser(value))
    );
  }

}

import { Observable, of, throwError } from 'rxjs';
import { UserModel, LoginModel } from '../models';

export class SaveUserUtil {
  private listUsers = [
    {
      userName: 'Jaydon',
      password: 'London2020',
      firstName: 'Jaydon',
      lastName: 'Edwards',
      age: 20,
    },
    {
      userName: 'string',
      password: 'Liverpool2020',
      firstName: 'Findlay ',
      lastName: 'Shields',
      age: 21,
    },
    {
      userName: 'Philip',
      password: 'Madrid2020',
      firstName: 'Philip',
      lastName: 'Coleman',
      age: 22,
    },
    {
      userName: 'Gethin',
      password: 'Barcelona2020',
      firstName: 'Gethin',
      lastName: 'Amin',
      age: 23,
    },
    {
      userName: 'Zachary',
      password: 'Bogota2020',
      firstName: 'Zachary',
      lastName: 'Short',
      age: 24,
    },
    {
      userName: 'Marcia',
      password: 'Bristol2020',
      firstName: 'Marcia',
      lastName: 'Cotton',
      age: 25,
    },
    {
      userName: 'Diogo',
      password: 'Exeter2020',
      firstName: 'Diogo',
      lastName: 'Turner',
      age: 26,
    },
  ];

  validateUser(data: LoginModel): Observable<UserModel> {
    const userAuthentication = this.listUsers.find(
      user =>
        user.password === data.password && user.userName === data.userName
    );
    if (!userAuthentication) {
      return throwError('User Not Found');
    }
    return of({
      userName: userAuthentication.userName,
      firstName: userAuthentication.firstName,
      lastName: userAuthentication.lastName,
      age: userAuthentication.age,
    });
  }

  saveUser(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', this.makeId(25));
  }

  makeId(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

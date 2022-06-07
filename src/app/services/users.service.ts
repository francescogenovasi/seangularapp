import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  constructor() {
    this.users = [
      {
        name: 'Mario',
        surname: 'Rossi',
        email: 'mario@rossi.it',
        birthdate: new Date('1999/05/01')
      },
      {
        name: 'Franco',
        surname: 'Neri',
        email: 'franco@neri.it',
        birthdate: new Date('1984/04/23')
      },
      {
        name: 'Dario',
        surname: 'Bianchi',
        email: 'dario@bianchi.it',
        birthdate: new Date('1988/09/23')
      }
    ];
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  createUser(user: User){
    this.users.unshift(user)
  }

}








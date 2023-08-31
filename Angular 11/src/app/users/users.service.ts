import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static getUsers() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

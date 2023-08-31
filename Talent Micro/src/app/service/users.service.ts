import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api = ' https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.api);
  }
}

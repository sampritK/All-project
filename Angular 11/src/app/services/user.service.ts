import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //  baseUrl: string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http: HttpClient ) { }

  addEmployee(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/Employee',data);
  }

  // listUsers(){
  // return this.http.get(this.baseUrl + 'users')
  // }

  // viewUsers(id:string){
  // return this.http.get(this.baseUrl + 'users' + id)
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { any } from 'cypress/types/bluebird';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  

  


 deleteUser(id:any): Observable<object>{


  const deleteHeader = new HttpHeaders({
    'authenticationToken' : 'User1234',
    'expiryToken' : '15'
  });


  return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id,{ headers: deleteHeader, });
 }

  addUser(body:any){

    
  

  return this.http.post('https://jsonplaceholder.typicode.com/users',body)
  }

  getUsers() {

  const headers = new HttpHeaders({
    'content-type': 'aplication/json',
    'authenticationToken' : '12345'
  });

  

  const params2 = new HttpHeaders()
  .set('pageNum', '10')
  .set('pageSize', '100');

  return this.http.get('https://jsonplaceholder.typicode.com/users',{ headers: headers, });
  

    // const users = [
    //    {userId:10, userName: 'YouTube'},
    //    {userId: 20, userName: 'Instagram'}
    // ];
    // return users;
  }
}


function HttpParams() {
  throw new Error('Function not implemented.');
}
  
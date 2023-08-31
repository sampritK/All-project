import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  

  constructor(private http: HttpClient ) { }



  addEmployee(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/Employee',data);
  }

  updateEmployee(id:number,data:any): Observable<any>{
    return this.http.put(`http://localhost:3000/Employee/${id}`,data);
  }

  getEmployeeList(): Observable<any>{
    return this.http.get('http://localhost:3000/Employee');
  }

  deleteEmployee(id: number): Observable<any> {
  return this.http.delete(`http://localhost:3000/Employee/${id}`);
}
  
}

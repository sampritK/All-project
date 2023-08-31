import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  constructor(private _http: HttpClient) { }

  addEmployee(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/employee',data);
  }

  getEmployeeList(): Observable<any>{
    return this._http.get('http://localhost:3000/employee');
  }

  
    deleteEmployee(id: number): Observable<any> {
      return this._http.delete(`http://localhost:3000/Employee/${id}`);
    }
  

    updateEmployee(id:number,data:any): Observable<any>{
      return this._http.put(`http://localhost:3000/Employee/${id}`,data);
    }
}

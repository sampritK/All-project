import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

   //addemployee
  addEmployee(data:datamodel){
   return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts")
  }

  //delete employee
  deleteEmployee(id: number) {
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }

  //Patch data
  fatchdata(id:number){
   return this.http.get<datamodel>("http://localhost:3000/posts/"+id);
  }

//  update
updateemployee(data:datamodel,id:number){
return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data);

}


}

import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './crud/product';

// import { Product } from './product';





@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor( private httpclient: HttpClient ) { }


  create(product: any): Observable<Product> {
    return this.httpclient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  getById(id: any): Observable<Product> {
    return this.httpclient.get<Product>(this.apiServer + '/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Product[]> {
    return this.httpclient.get<Product[]>(this.apiServer + '/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id: number, product: any): Observable<Product> {
    return this.httpclient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // delete(id: number){
  //   return this.httpclient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  delete(id: number){
    this.httpclient.delete(this.apiServer + '/products/' + id, this.httpOptions).subscribe({
      next: (res:any) => {
        alert('Employee deleted!')
      }
    });
    
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}

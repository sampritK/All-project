import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { datamodel } from './menu/report/model';

@Injectable({
  providedIn: 'root'
})
export class ZebraService {

  [x: string]: any;

  constructor(private http: HttpClient) { }


  addEmployee(data: datamodel) {
    return this.http.post<datamodel>("http://localhost:3000/posts", data)
  }

  // fetch(){
  //  return this.http.fetch("https://api.zebra.com/v2/data/devices/batteries/analytics/visibility/critical-battery-events")
  //   .then((response: { text: () => any; }) => response.text())
  //   .then((result: any) => console.log(result))
  //   .catch((error: any) => console.log('error', error));

  // }
  // fetch(){
  // fetch("https://api.zebra.com/v2/data/devices/batteries/analytics/visibility/critical-battery-events")

  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  //   return this.http.get<Headers>("https://api.zebra.com/v2/data/devices/batteries/analytics/visibility/critical-battery-events")

  // }

  private apiUrl = 'https://api.zebra.com/v2/data/devices/batteries/analytics/visibility/critical-battery-events';

  private headers = new HttpHeaders({
    "X-APIKey": "fzzEAqmVsALrgmYvNQ7brG4G9GCNAtNU",
    "partnerName": "PARTNER DEMO",
    "companyName": "DEMO COMPANY 2",
    "Startdatetime": "2023-08-03T00:00:00Z",
    "Enddatetime": "2023-08-04T00:00:00Z"
  });


  // headers = new HttpHeaders()
  // .set('X-APIKey', 'fzzEAqmVsALrgmYvNQ7brG4G9GCNAtNU')
  // .set('partnerName','PARTNER DEMO')
  // .set('companyName', 'DEMO COMPANY 2')
  // .set('startDatetime', '2023-08-03T00:00:00Z')
  // .set('endDatetime', '2023-08-04T00:00:00Z');


  getWithHeaders(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }

}





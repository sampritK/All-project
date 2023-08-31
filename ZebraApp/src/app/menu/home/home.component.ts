import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZebraService } from 'src/app/zebra.service';
import { datamodel } from './model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})



export class HomeComponent implements OnInit  {

  

//   data:any;
//   Headers: any;
// constructor( private formbuilder:FormBuilder, private zebra:ZebraService){}
  
//     var myHeaders = new Headers();
// myHeaders.append("X-APIKey", "fzzEAqmVsALrgmYvNQ7brG4G9GCNAtNU");
// myHeaders.append("partnerName", "PARTNER DEMO");
// myHeaders.append("companyName", "DEMO COMPANY 2");
// myHeaders.append("startDatetime", "2023-08-03T00:00:00Z");
// myHeaders.append("endDatetime", "2023-08-04T00:00:00Z");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };



//   }

//   fatch(data:any){
//     this.zebra.fetch().subscribe((res=>{
//       this.Headers.reset();
//     }))
//   }

  

// fetch("https://api.zebra.com/v2/data/devices/batteries/analytics/visibility/critical-battery-events")
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

datas:any;

constructor(private zebra:ZebraService){}

ngOnInit(): void {
  // this.zebra.getWithHeaders().subscribe((res)=>{
  //   this.datas = res;
  //   console.log(res);
  // })
}


 }


  


  
  
  
  


 
  
  
  


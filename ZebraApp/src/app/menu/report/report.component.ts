import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZebraService } from 'src/app/zebra.service';
import { datamodel } from './model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  employeeforms!: FormGroup;
  data: undefined | datamodel[];
  apiResponseData: any;
  datas: any;

  constructor(private formbuilder: FormBuilder, private zebra: ZebraService) { }

  ngOnInit(): void {
    
    this.zebra.getWithHeaders().subscribe((res)=>{
         this.datas = res;
         console.log(res);
       })

    this.getemployee();
    // this.getApiData();
  }
  
  getemployee() {
    throw new Error('Method not implemented.');
  }


  addEmployee(data: any) {
    // console.log(data)
    this.zebra.addEmployee(data).subscribe((res => {
      this.employeeforms.reset();
      alert('Employee added successfully')
    }))
    this.getemployee();
  };

  // Api response
  // getApiData() {
  //   this.zebra.getWithHeaders().subscribe(response => {
  //     this.apiResponseData = response;
  //     console.log(this.apiResponseData);
  //   })
  // }

}

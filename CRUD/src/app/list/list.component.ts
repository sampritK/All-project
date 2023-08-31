import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeforms!:FormGroup;
  data:undefined|datamodel[];


  constructor( private formbuilder:FormBuilder, private api:ApiService){}
  ngOnInit(): void {
    this.employeeforms = this.formbuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      city:['', Validators.required],
      pincode:['', Validators.required],
      phone:['', Validators.required]
    })

    this.getemployee();
  }

  

  addEmployee(data:any){
    // console.log(data)
    this.api.addEmployee(data).subscribe((res=>{
     this.employeeforms.reset();
     alert('Employee added successfully')  
    }))
    this.getemployee();
  }

  getemployee(){
    this.api.getemployee().subscribe(res=>{
      this.data = res;
    })
  }
  deleteEmployee(id: number){
    this.api.deleteEmployee(id).subscribe({
      next: (res:any) => {
        alert('Employee deleted!')
      }
    });
    
  }
}

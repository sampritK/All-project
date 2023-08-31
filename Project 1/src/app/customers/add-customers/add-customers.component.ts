import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { any } from 'cypress/types/bluebird';
import { data } from 'cypress/types/jquery';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  firstName: string = '';
  terms: boolean = false;
  CustomerTypes: string = '';
  description: string = '';
 constructor( private UsersService: UsersService ) {}
  ngOnInit(): void {
    let userDetails = {
      firstName: 'Angular',
      terms: false,
      CustomerTypes: 'Premium',
      description: 'This is SET value in forms'
    }
  }

loadValues(formValue: NgForm){
  let userDetails = {
    firstName: 'Angular Devloper',
    terms: false,
    CustomerTypes: '2',
    description: 'This is SET value in forms'
  }
  formValue.setValue(userDetails);
}

  resetform( formValue: NgForm){
    formValue.reset();
  }
  addCustomer( formValue: NgForm){
    console.log(formValue.value);

    const postBbody = {
      title: formValue.value.firstName,
      body: formValue.value.description,
    };
    this.UsersService.addUser(postBbody).subscribe(data =>{
    console.log(data);
    },(err)=> {
     console.log("Unable to add user");
    })
    // this.UsersService.addUser()
  }


}

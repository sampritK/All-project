import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent {

 constructor(private userService: UsersService) {}

//  deleteUser(){
//   this.userService.deleteUser(1).subscribe((data) => {
//     console.log("User deleted successfully");
//   }, (err) => {
//    console.log("Unable to delete the user")
//   })
//  }

 deleteUser(){
  this.userService.deleteUser(1).subscribe(_data =>  {
    console.log("User deleted successfully");
  },(err) =>{
    console.log("Unable to delete the user" +err);
   })
 }

}

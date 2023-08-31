import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { data } from 'cypress/types/jquery';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  

  users: any;

  constructor(private userService: UsersService){ }
  ngOnInit(): void {
  this.userService.getUsers().subscribe(data => {
   this.users = data;
  })

  }
  
clientList = [
  { clientId:10, firstName: 'Samprit', lastName: 'kanungo'},
  { clientId:11, firstName: 'Hakuna', lastName: 'Matata'},
  { clientId:12, firstName: 'Happy', lastName: 'kanungo'},
  { clientId:13, firstName: 'Gyana', lastName: 'Ranjan'},
  { clientId:14, firstName: 'Nilesh', lastName: 'Nayak'},
  { clientId:15, firstName: 'Salman', lastName: 'Khan'},
  { clientId:16, firstName: 'Rashmika', lastName: 'mandana'},
  
];

isDirty = true;

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  data:any;
  storedSessionData : any = {}
  
  
  constructor(private user: UsersService,private _dialog:MatDialog ) { }
  ngOnInit(): void {
    this.userData();

    const formDataString = sessionStorage.getItem('formDatas');
    if(formDataString){
      this.storedSessionData = JSON.parse(formDataString);
    }
  }

  userData() {
    this.user.getUser().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    })
  }

  addUser(){
    const dialogRef = this._dialog.open(AddUserComponent);
   }





  
}

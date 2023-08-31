import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  [x: string]: any;
  userId: string = '' ;
constructor(private userService: UserService, private activatedRouter: ActivatedRoute){}
  contacts$: any;
  users: any;
  userStatus: any;
  userDetails: any;
  // userService: any;

  ngOnInit(): void {


  this.activatedRouter.params.subscribe(data => {
    this['UserId'] = data['id'];
    console.log(this.userId)
  })

    // this.userService.viewUsers(this.userId).subscribe(data =>{
    //   this.userDetails = data;
    // })
  //   this.users = ['jivika', 'lisa', 'gyan', 'samprit']

  //   this.contacts$ = of(this.users);
  //   console.log(this.contacts$);


  //    new Observable(observer =>{
  //     setTimeout(() => {
  //       observer.next('in Progress');
  //     }, 2000);

  //     setTimeout(() => {
  //       observer.next('pending');
  //     }, 4000);

  //     setTimeout(() => {
  //       observer.next('Completed');
  //     }, 6000);

  //    }).subscribe(data=> {
  //     this.userStatus = data;
  //    });

  //    this.userService.getUsers().subscribe((data: any) => {
      
  //    })

   }

  
}

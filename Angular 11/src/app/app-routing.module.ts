import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'view-users', component: ViewUsersComponent },
  { path: 'roles', component: ListRolesComponent },
  {
    path: 'users',
    children: [
      { path: '', component: ListUsersComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'view/:id', component: ViewUsersComponent },
      { path: 'delete/:id', component: DeleteUserComponent },
      { path: 'create', component: AddUserComponent },
      { path: 'edit/:id', component: EditUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

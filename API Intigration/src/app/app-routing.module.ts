import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { UpdateComponent } from './crud/update/update.component';
import { CreateComponent } from './crud/create/create.component';



// const routes: Routes = [
//   { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
//   { path: 'crud/home', component: HomeComponent },
//   { path: 'crud/details/:productId', component: DetailsComponent },
//   { path: 'crud/create', component: CreateComponent },
//   { path: 'crud/update/:productId', component: UpdateComponent } 
// ];

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: 'details/:productId', component: DetailsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:productId', component: UpdateComponent } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

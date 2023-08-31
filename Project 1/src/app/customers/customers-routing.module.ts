import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

const routes: Routes = 
[{ path: 'customers', component: CustomersComponent },
 { path: 'add-customer', component: AddCustomersComponent},
 { path:'delete', component:DeleteCustomerComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

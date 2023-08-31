import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { FormsModule } from '@angular/forms';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomersComponent,
    DeleteCustomerComponent,
    
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ],
  exports:[AddCustomersComponent]
})
export class CustomersModule { }

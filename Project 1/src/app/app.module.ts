import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { Form1Component } from './form1/form1.component';
import { StudentComponent } from './student/student.component';
import { ContactsModule } from './contacts/contacts.module';
import { Employee } from './employee';
// import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLoansComponent } from './add-loans/add-loans.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
// import { ClinetsComponent } from './client/clients.component';
import { ClientComponent } from './client/client.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { CustomersModule } from './customers/customers.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component'



@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    StudentComponent,
    AddLoansComponent,
    ProductComponent,
    ClientComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    AdminManageComponent,
    UsersComponent,
    ViewUsersComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ContactsModule,
    AppRoutingModule,
    CustomersModule,
    HttpClientModule
   ],
   providers: [ {provide:LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { superAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { DeletComponetComponent } from './contacts/delet-componet/delet-componet.component';
import { adminAccessGuard } from './admin-access.guard';
import { preferencesCheckGuard } from './preferences-check.guard';
import { unsavedGuard } from './unsaved.guard';
import { Form1Component } from './form1/form1.component';



const routes: Routes = [
  {path: 'form1', component: Form1Component},

  {path:'client', component: ClientComponent, canDeactivate: [unsavedGuard]},
  {path:'admin',  canActivate: [superAdminGuard],

  // canActivateChild: [adminAccessGuard],
   children: [
    {
      path: '', component: AdminComponent
    },
    {
      path: '',
      canActivateChild: [adminAccessGuard],
      children: [
      {path: 'manage', component: AdminManageComponent},
      {path: 'edit', component: EditContactComponent},
      {path: 'delete', component: DeletComponetComponent},
    ]
    }
    
   ]
},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'preferences',
  canMatch:[preferencesCheckGuard],
   loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

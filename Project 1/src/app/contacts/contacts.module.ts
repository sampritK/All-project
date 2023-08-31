import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeletComponetComponent } from './delet-componet/delet-componet.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    DeletComponetComponent,
    ListContactComponent,
    ViewContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AddContactComponent]
})
export class ContactsModule { }

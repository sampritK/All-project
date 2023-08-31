import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfileComponent } from './list-profile/list-profile.component';



@NgModule({
  declarations: [
    ListProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListProfileComponent]
})
export class ProfileModule { }

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  empForm!: FormGroup;

  constructor(private _fb: FormBuilder, private user: UsersService,
    private _dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // this.empForm.patchValue(this.data);
    this.empForm = this._fb.group({
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      company: [''],

    })
  }

  onFormSumbit() {
  
    sessionStorage.setItem('formDatas', JSON.stringify(this.empForm.value));
  }
}

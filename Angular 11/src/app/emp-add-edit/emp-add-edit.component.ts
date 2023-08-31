import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';
import { EmployeeService } from './service/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

  empForm: FormGroup

 education: string[] = [
  'Matric',
  'Diploma',
  'Intermediate',
  'Graduate',
  'Post Graduate',
 ];
 constructor(private _fb: FormBuilder, private _empService: EmployeeService,
  private _dialogRef: MatDialogRef<EmpAddEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  this.empForm = this._fb.group({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender:'',
    education:'',
    company: '',
    expreience:'',
    package:'',
  })
 }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
 onFormSumbit(){
  if(this.empForm.valid) {
    if(this.data) {
      this._empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
        next:(val:any) => {
          alert('Employee details updated!');
          this._dialogRef.close(true);
        },
        error: (err:any) => {
          console.error(err);
        }
      });
    } else{
      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any) => {
          alert('Employee added successfully');
          this._dialogRef.close(true);
        },
        error: (err:any) => {
          console.error(err);
        }
      })
    }
  }
  
 }
}

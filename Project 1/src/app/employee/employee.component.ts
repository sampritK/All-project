import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule}  from '@angular/common/http';
import { preserveWhitespacesDefault } from '@angular/compiler';



console.log("Employee component loaded....");
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,HttpClientModule,],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css','./test.css'],
  preserveWhitespaces : true
})
export class EmployeeComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {

empsalary: number=0;
  message: string='';

  salaryIncrement(){
this.empsalary = this.empsalary + 500;
this.message = "Employee Increment Salary"
  }

  salaryDecrement(){
    this.empsalary = this.empsalary - 500;
    this.message = "Employee decrement salary"
  }

}

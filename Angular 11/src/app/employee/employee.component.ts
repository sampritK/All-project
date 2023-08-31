import { Component, ViewChild } from '@angular/core';
import { SalaryComponent } from '../salary/salary.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  @ViewChild(SalaryComponent)
  salaryCompoent!: SalaryComponent;

  increment(){
  this.salaryCompoent.salaryIncrement();
  }

  decrement(){
    this.salaryCompoent.salaryDecrement();
  }

}
function viewChild(target: EmployeeComponent, propertyKey: 'increment', descriptor: TypedPropertyDescriptor<() => void>): void | TypedPropertyDescriptor<() => void> {
  throw new Error('Function not implemented.');
}


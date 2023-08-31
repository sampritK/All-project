import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './srvices/employee.service';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud';
  

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
     'company',
     'expreience',
    'package',
    'action',
];

  constructor(private _dialog: MatDialog, private _empService:EmployeeService){}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
     next : (val) => {
       if(val) {
         this.getEmployeeList();
       }
     }
    })
   }

  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
    next: (res:any) => {
      this.dataSource = new MatTableDataSource(res);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    },
    error: console.log,
    
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number){
    this._empService.deleteEmployee(id).subscribe({
      next: (res:any) => {
        alert('Employee deleted!')
      }
    });
    
  }

  openEditForm(data:any){
    this._dialog.open(EmpAddEditComponent, {
      data,
    });
  }
  
  }


import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] =[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.employees=this.employeeService.getEmployees();
    this.employeeService.employeesChanged.subscribe((employees:Employee[]) => {

      this.employees=employees;

    });
  }

  deleteEmployee(index: number) {
    this.employeeService.deleteEmployee(index);
  }

  editEmployee(employee: Employee, index: number) {
    this.employeeService.setSelectedEmployee(employee, index);
  }


}

  

  




  





 // employees: Employee[] = [
  //  {  name: 'Bhuvan',age:19, email: '//.com',occupation:'student' },
//    { name: 'Janvi',age:14, email: '//.com',occupation:'student' }
 // ];






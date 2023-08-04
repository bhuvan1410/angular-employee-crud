import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})




export class AddEmployeeComponent {

  constructor(private employeeServ : EmployeeService, private router: Router){

  }

  goToHomePage() {
    this.router.navigate(['/']);
  }


  addValues(form: NgForm) {
    const value = form.value;
    const newEmployee = new Employee(
      value.name,
      value.age,
      value.email,
      value.occupation
    );

    this.employeeServ.addEmployee(newEmployee);
    this.router.navigate(['/']);
  }
}
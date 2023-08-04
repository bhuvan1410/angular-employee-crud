
import { EventEmitter } from "@angular/core";
import { Employee } from "./employee.model";

export class EmployeeService{


    employeesChanged = new EventEmitter<Employee[]>;

    selectedEmployeeIndex: number = -1;


    employees: Employee[] = [
        {  name: 'Bhuvan',age:19, email: 'bhuvany84@gmail.com',occupation:'student' },
        { name: 'Janvi',age:14, email: 'janviy998@gmail.com',occupation:'student' }
      ];


      addEmployee(employee: Employee){
        this.employees.push(employee);
        this.employeesChanged.emit(this.employees.slice());
      }

      deleteEmployee(index: number) {
        this.employees.splice(index, 1);
        this.employeesChanged.emit(this.employees.slice());
      }

      setSelectedEmployee(employee: Employee, index: number) {
        this.selectedEmployeeIndex = index;
      }
    
      editEmployee(index: number, updatedEmployee: Employee) {
        this.employees[index] = updatedEmployee;
        this.employeesChanged.emit(this.employees.slice());
      }
    
    


    getEmployees()
    {
        return this.employees.slice();
    }



}
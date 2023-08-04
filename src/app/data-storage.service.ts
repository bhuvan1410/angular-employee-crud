
import {HttpClient} from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Employee } from './employee.model'
import { EmployeeService } from './employee.service'


@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor (private http: HttpClient, private employeeService : EmployeeService){}

        storeEmployees(){
            const employees = this.employeeService.getEmployees();
            this.http.put('https://employee-project-f8d90-default-rtdb.firebaseio.com/',employees).subscribe(
                {
                    
                }
            );


        }

    
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  strURL: string = "http://localhost:3000/Employees";

  GetAllEmployees()
  {
    return this.http.get(this.strURL);
  }

  AddNewEmployee(employee : any)
  {
    return this.http.post(this.strURL, employee);
  }
}

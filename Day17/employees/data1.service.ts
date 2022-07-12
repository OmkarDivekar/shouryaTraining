import { Injectable } from '@angular/core';
import { EmployeesModule } from './employees.module';
@Injectable({
  providedIn: EmployeesModule
})
export class Data1Service {

  constructor() { }
  DisplayEmp():string
  {
   return "Employees Service is called...!!!";
  }
}

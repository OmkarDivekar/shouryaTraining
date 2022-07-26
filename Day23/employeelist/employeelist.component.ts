import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../Services/employee.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
EmpData : any=[];
frmEmployee : any;
  constructor(private employee : EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoadEmployee();
    this.frmEmployee = this.formBuilder.group({
      id : '',
      employeename : '',
      designation : '',
      status : ''
    })
  }
  LoadEmployee(){
    this.employee.GetAllEmployees().subscribe(data =>{
      this.EmpData = data;
    })
  }

  onSubmit(){
    console.log("form", this.frmEmployee.value);
    const empValue = this.frmEmployee.value;
    this.employee.AddNewEmployee(empValue).subscribe((res : any) =>{
      console.log(res);
      this.LoadEmployee();
    })
  }

}

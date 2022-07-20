import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
EmployeeData:any=[];
selectedEmpId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.EmployeeData = [
      {eid:1, ename:"Prakhar", designation:"Developer", salary:25000},
      {eid:2, ename:"Amol", designation:"Manager", salary:35000},
      {eid:3, ename:"Pradip", designation:"Web Developer", salary:50000},
      {eid:4, ename:"Anand", designation:"Developer", salary:65000},
      {eid:5, ename:"Vinayak", designation:"HR", salary:37000},
      {eid:6, ename:"Omkar",designation:"Web Developer", salary:50000}
      
    ]
  }
  
  onDetails(selectedId:number)
  {
    this.selectedEmpId = selectedId;
  }
}

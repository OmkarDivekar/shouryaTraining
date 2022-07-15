import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 childShow:boolean=true;
  constructor() { }

  ngOnInit(): void {
    console.log("employee ngOnInit");
  }
  
  onDestroyHandler()
  {
    this.childShow =! this.childShow;
  }
}

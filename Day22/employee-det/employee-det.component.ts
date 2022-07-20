import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-det',
  templateUrl: './employee-det.component.html',
  styleUrls: ['./employee-det.component.css']
})
export class EmployeeDetComponent implements OnInit {
@Input('PropEmp') EmpData:any;
  constructor() { }

  ngOnInit(): void {
  }

}

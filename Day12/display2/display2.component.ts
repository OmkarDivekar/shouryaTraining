import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Display2();
  }

   Display2()
   {
    console.log("Display2");
    const arrEmployee:EmployeeModel= {"empname":"Anuj Kumar","age":22,"phone":1234444};
    console.log(arrEmployee);
   }

}

class EmployeeModel
{
  "empname":string;
  "age": number;
  "phone":number;
}
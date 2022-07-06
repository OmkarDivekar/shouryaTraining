import { Component, OnInit } from '@angular/core';

interface IEmployee{
  empname:string,
  designation:string,
  salary:number,
  active:boolean,
  company:string

}


@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Display();
  }

  Display()
  {
    let arrEmp:IEmployee = {empname:'Rahul Sharma',designation:'fullstack developer',salary:12345,active:true,company:'Shourya Infotech'};
    console.log(arrEmp);
  }

}

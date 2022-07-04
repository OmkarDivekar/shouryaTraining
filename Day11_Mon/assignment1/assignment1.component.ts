import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  
  ContactID: number = 123;
  ContactName:string = "Omkar Divekar";
  Company:string = "Shourya Infotech";
  DueAmount:number = 4555;
  Phone:any = +91-7038386677;
  Area = "South Zone";
  constructor() { }

  ngOnInit(): void {
  }

}

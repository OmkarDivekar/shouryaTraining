import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   Res:string="";
  DisplayContact()
  {
    this.Res = this.AddName(); 
  }

  AddName():string
  {
     return "Rohit Kumar";
  }
}

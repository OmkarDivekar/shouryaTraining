import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
colorSet:string="";
  constructor() { }

  ngOnInit(): void {
  }
  
  onRed()
  {
    this.colorSet = "Red"
  }

  onBlue()
  {
    this.colorSet = "Blue"
  }

  onGreen()
  {
    this.colorSet = "Green"
  }
}

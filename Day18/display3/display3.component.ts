import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
arrEmp:any =[
  {userid:101, username:'Omkar', status:'A'},
  {userid:102, username:'Priyanka', status:'D'},
  {userid:106, username:'Sairaj', status:'A'},
  {userid:103, username:'Shubham', status:'A'},
  {userid:106, username:'Sayali', status:'A'},
  {userid:104, username:'Kiran', status:'D'},
  {userid:105, username:'Prafull', status:'A'},
  {userid:106, username:'Sayaji', status:'A'},
  {userid:107, username:'Jack', status:'D'},
  {userid:108, username:'Pranay', status:'E'},  
]
  constructor() { }

  ngOnInit(): void {
  }

}

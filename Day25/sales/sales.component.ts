import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
salesData:any=[
  {sr_no:1,product:'iphone13',price:100000},
  {sr_no:2,product:'iphone12',price:90000},
  {sr_no:3,product:'iphone13 proMax',price:150000},
  {sr_no:4,product:'iphone11',price:60000},
  {sr_no:5,product:'iphone SE',price:50000}
  
];
  constructor() { }

  ngOnInit(): void {
  }

}

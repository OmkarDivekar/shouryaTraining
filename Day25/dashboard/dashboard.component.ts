import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
Total_cat:number=7;
Total_Pro:number=25;
Total_Sales:number=456725;

  constructor() { }

  ngOnInit(): void {
  }

}

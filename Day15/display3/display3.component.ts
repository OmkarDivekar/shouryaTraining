import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
 Res:any;
  constructor() { }

  ngOnInit(): void {
    const Result = Data2Service.StaticHeadertext;
    console.log(Result);
    this.Res= Result;
  }

}

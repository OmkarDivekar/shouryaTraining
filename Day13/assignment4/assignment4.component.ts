import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  arrData:any = [10,20,30,40];
  constructor() { }

  ngOnInit(): void {
    // this.arrData = [
    //   {id1:10 ,value1:10},
    //   {id2:20 ,value2:20},
    //   {id3:30 ,value3:30},
    //   {id4:40 ,value4:40}
    // ]
  }

}

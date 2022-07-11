import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';
@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {
Res:string="";
  constructor(private data : Data3Service) { }

  ngOnInit(): void {
  }
   
  onClicking()
  {
     this.Res = this.data.MessageNotify("This is my service using static modifier");
  }
}

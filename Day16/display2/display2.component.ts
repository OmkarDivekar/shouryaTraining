import { Component, OnInit } from '@angular/core';
import { MsgDisplayService } from '../msg-display.service';
@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  Res:string="";
  constructor(private data:MsgDisplayService) { }

  ngOnInit(): void {
    
   
  }
  onClickHandler()
   {
     this.data.DisplayMessage();
   }
  
  
 
  

}

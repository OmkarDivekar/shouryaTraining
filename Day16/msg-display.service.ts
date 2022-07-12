import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class MsgDisplayService {
   message:string="";
  constructor(private data : LoggerService) { }

  DisplayMessage()
  {
    this.message = this.data.LoggerData("Admin logged today at 11 am");
    console.log(this.message);
    
  }
}

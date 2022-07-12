import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
   LoggerData(msg:any):string
   {
      return msg;
   }
}

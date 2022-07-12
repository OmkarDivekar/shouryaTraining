import { Injectable } from '@angular/core';
import { Data4Service } from './data4.service';
@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor(private data4:Data4Service) { }

  DisplayData3()
  {
    this.data4.DisplayData4();
    console.log("Data3Service");
   
  }
}

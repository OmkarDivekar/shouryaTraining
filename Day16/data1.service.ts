import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { } 

   DisplayDataService()
   {
     console.log("DisplayData1Service");
   }
}

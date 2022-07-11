import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { } 

   public  publicHeaderText = "This is my service using public modifier";
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }

  static StaticHeadertext = "This is my service using static modifier";
}

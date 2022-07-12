import { Component, OnInit } from '@angular/core';
import { Contacts } from '../data.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
   Res1:string="";
   Res2:string="";
   Res3:string="";
   Res4:string="";
  constructor() { }

  ngOnInit(): void {
    const data1 = new Contacts.AddNewContact();
    this.Res1 = data1.DisplayNewContact();
    const data2 = new Contacts.EditContact();
    this.Res2 = data2.DisplayEditContact();
    const data3 = new Contacts.DeleteContact();
    this.Res3 = data3.DisplayDeleteContact();
    const data4 = new Contacts.ListContact();
    this.Res4 = data4.DisplayListContact();
  }

}

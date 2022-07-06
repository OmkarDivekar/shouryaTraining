import { Component, OnInit } from '@angular/core';

interface EmpData
{
  contactname:string,
  contactadd:string,
  contactph:number,
  areacode:any
}

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }
         arrEmp:EmpData={contactname:"",contactadd:"",contactph:0,areacode:""};
  ngOnInit(): void {
   
  }
   
  Show()
  {
     this.arrEmp = {contactname:"Nidhi Singh",contactadd:"H.no.12345",contactph:1234567,areacode:"South Zone"};
    
     
    console.log(this.arrEmp);
   

  }
}

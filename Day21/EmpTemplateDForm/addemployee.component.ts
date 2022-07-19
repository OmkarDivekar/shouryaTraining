import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
Result:string="";
  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(frmEmployee:any)
  {
    
    this.Result ="Form Submitted status : " + " " + frmEmployee.status;

  }
}

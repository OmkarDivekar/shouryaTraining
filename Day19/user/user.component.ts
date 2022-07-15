import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
Name:any;
childShow:boolean=true;
  constructor() { 
    console.log("User constructor");
  }

  ngOnInit(): void {
    console.log("user ngOnInit");
  }
  
  onClickHandler()
  {
     console.log(this.Name);
  }

  onDestroyHandler()
  {
    this.childShow =! this.childShow;
  }

}

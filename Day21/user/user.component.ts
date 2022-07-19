import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
UsersData:any=[];
selectUserId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.UsersData = [
      {userid:1,displayname:"Jack", userstatus:"Active", roleassign:"Admin"},
      {userid:2,displayname:"Sai", userstatus:"Active", roleassign:"User"},
      {userid:3,displayname:"Kiran", userstatus:"Disabled", roleassign:"Manager"},
      {userid:4,displayname:"Mahesh", userstatus:"Active", roleassign:"Team Leader"},
      {userid:5,displayname:"Pritam", userstatus:"Disabled", roleassign:"HR"},
      {userid:6,displayname:"Dipak", userstatus:"Active", roleassign:"User"},
      {userid:7,displayname:"Swara", userstatus:"Active", roleassign:"Developer"},
      {userid:8,displayname:"Priti", userstatus:"Disabled", roleassign:"Admin"},
      
    ]
  }

  onDetails(selectedId:number)
  {
    this.selectUserId = selectedId;
  }

}

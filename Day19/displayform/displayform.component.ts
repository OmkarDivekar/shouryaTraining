import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {
formUser: any;
  constructor() { }

  ngOnInit(): void {
    this.formUser = new FormGroup(
      {
        ContactId: new FormControl(""),
        ContactName: new FormControl(""),
        Address: new FormControl(""),
        Pincode: new FormControl("")
      }
    )
  }
  onSubmit(userForm:any){
    console.log(userForm);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
frmClient:any;
Result:any;
  constructor() { }

  ngOnInit(): void {
    this.frmClient = new FormGroup({
      clientid: new FormControl("", [Validators.required, Validators.minLength(6)]),
      clientname : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      address: new FormControl("",Validators.required),
      phone : new FormControl("",Validators.pattern('^[0-9]+$'))
    })
  }

  onSubmit(){
    console.log("Submited", this.frmClient.status);
    this.Result =  "Submited Succesfully" + " " + this.frmClient.status;
  }

}

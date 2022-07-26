import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  UserData: any = [];
  frmUser: any;
  Login: string = "";
  constructor(private user: FormServiceService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.LoadUser();
    this.frmUser = this.formBuilder.group({
      userName: '',
      password: '',
      status: ''
    })
  }

  LoadUser() {
    this.user.GetAllUser().subscribe(data => {
      // console.log(data);
      this.UserData = data;
      console.log(this.UserData);
      console.log(this.UserData.userName);
    })
  }

  onSubmit() {
    const UserNameValue = this.frmUser.value.userName;
    console.log(UserNameValue)

    const serverData = this.UserData.filter((item: any) => {
      return item.username == UserNameValue;
    })
    console.log(serverData);
    const UserPassword = this.frmUser.value.password;
    console.log(UserPassword);

    if(serverData[0]?.password === this.frmUser.value.password && serverData[0].status === "Active") {
      this.Login = "Login Successfully";
    }
    else {
      this.Login = "Failed to Login"
    }
  }
}

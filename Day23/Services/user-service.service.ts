import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class formSevice {

  constructor(private http : HttpClient) { }
  strURL:string = "http://localhost:3000/Users";
  GetAllUsers()
  {
    return this.http.get(this.strURL);
  }
 
}
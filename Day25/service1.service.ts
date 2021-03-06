import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }
strURL:string="http://localhost:3000/Employees/";

  GetAllEmployee(){

    return this.http.get(this.strURL);
  }
  DeleteClient(eid:any)
  {
    const DeleteURL = this.strURL + eid;
    return this.http.delete(DeleteURL);
  }

}
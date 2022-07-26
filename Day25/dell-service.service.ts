import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DellServiceService {
strURL:string="http://localhost:3000/dell";
  constructor(private http: HttpClient) { }

  GetAllData(){
    return this.http.get(this.strURL);
  }

}

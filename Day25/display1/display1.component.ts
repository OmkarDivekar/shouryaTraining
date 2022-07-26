import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  employeedata:any=[];
  frmEmp:any
  empMsg:string="";
  name:string="";

  constructor(private emp:Service1Service, private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.LoadEmployee();

  }
  LoadEmployee(){
    this.emp.GetAllEmployee().subscribe(data=>{
      this.employeedata=data;
    })
  }

  onDelete(name: any) {

    let myDelete = this.employeedata.filter((v:any)=> {
    //  console.log(JSON.stringify(v));
      return v.employeename .match(name);
    });
  
   // console.log("arra");
    //console.log(myDelete );
    
    myDelete.forEach((element :any) => {
      
      this.emp.DeleteClient(element.id).subscribe((res: any) => {
       // console.log("Deleted ", res);
        this.LoadEmployee();
        this.empMsg = "employee info Deleted Successfully"
        this.name ="";
      })
    });
  }
}

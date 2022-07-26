import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {

  ChildPara:string="";
  paraStatus:string="";
  
    constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      // routing parameters

      this.activatedRoute.params.subscribe((para:Params)=>{
        
        this.ChildPara = para['productname'];
        this.paraStatus =para['price'];
      })
      
      
  
    }
  }

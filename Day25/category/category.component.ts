import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
productData:any=[
{proname:'Dell', status:'In Stock',productname:'Dell Vostro',price:'55000'},
{proname:'HP', status:'In Stock', productname:'HP pavillon',price:'65000'},
{proname:'Sony', status:'In Stock',productname:'Sony Vision',price:'50000'},
{proname:'IBM', status:'In Stock',productname:'IBM',price:'57000'},
{proname:'HCL', status:'In Stock',productname:'HCL',price:'45000'}
];
  constructor() { }

  ngOnInit(): void {
  }

}

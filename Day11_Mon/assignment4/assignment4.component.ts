import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  ColorType:Color=Color.None;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(ColNo:any)
  {
    if(ColNo===11)
    {
      this.ColorType = Color.Red;
    }
    else if(ColNo===22)
    {
      this.ColorType = Color.Green;
    }
    else if(ColNo===33)
    {
      this.ColorType = Color.Blue;
    }
    else if(ColNo===44)
    {
      this.ColorType = Color.Black;
    }
    else
    {
      this.ColorType = Color.None;
    }
  }

}
enum Color
{
  None = "None",
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Black = "Black",
 


}

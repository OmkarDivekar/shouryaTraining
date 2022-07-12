import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';
@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {

  constructor(private data3:Data3Service) { }

  ngOnInit(): void {
    this.data3.DisplayData3();
  }

}

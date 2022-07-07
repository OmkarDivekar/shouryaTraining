import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { Display3Component } from './display3/display3.component';
import { Display4Component } from './display4/display4.component';
import { Display4DetComponent } from './display4-det/display4-det.component';
import { Display5Component } from './display5/display5.component';
import { Display5DetComponent } from './display5-det/display5-det.component';
import { Display6Component } from './display6/display6.component';
import { Display6DetComponent } from './display6-det/display6-det.component';
import { Display7Component } from './display7/display7.component';
import { Display8Component } from './display8/display8.component';
import { Display9Component } from './display9/display9.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { Assignment4Component } from './assignment4/assignment4.component';




@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component,
    Display3Component,
    Display4Component,
    Display4DetComponent,
    Display5Component,
    Display5DetComponent,
    Display6Component,
    Display6DetComponent,
    Display7Component,
    Display8Component,
    Display9Component,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    EmployeeLeaveComponent,
    Assignment4Component,
                
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetComponent } from './employee-det/employee-det.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component,
    EmployeeComponent,
    EmployeeDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

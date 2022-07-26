import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Matdisplay1Component } from './matdisplay1/matdisplay1.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    ClientlistComponent,
    EmployeelistComponent,
    UserlistComponent,
    Matdisplay1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

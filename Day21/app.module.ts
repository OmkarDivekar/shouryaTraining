import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { AddemployeeComponent } from './EmpTemplateDForm/addemployee.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserlistComponent } from './userDetails/userlist.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeslistComponent,
    AddemployeeComponent,
    ProductListComponent,
    AddProductComponent,
    UserlistComponent,
    UserComponent
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

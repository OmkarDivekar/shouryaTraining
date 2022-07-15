import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
const routes: Routes = [
  {path:'display1', component:Display1Component},
  {path:'displayform', component:DisplayformComponent},
  {path:'user', component:UserComponent},
  {path:'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

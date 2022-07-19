import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserComponent } from './user/user.component';
import { AddemployeeComponent } from './EmpTemplateDForm/addemployee.component';
const routes: Routes = [
  {path:'employeelist', component: EmployeeslistComponent},
  {path:'productlist', component: ProductListComponent},
  {path:'user', component: UserComponent},
  {path:'emp', component:AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

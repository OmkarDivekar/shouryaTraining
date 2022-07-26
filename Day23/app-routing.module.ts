import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UserlistComponent } from './userlist/userlist.component';
const routes: Routes = [
  {path:'clientlist', component : ClientlistComponent},
  {path:'employeelist', component: EmployeelistComponent},
  {path:'userlist', component: UserlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

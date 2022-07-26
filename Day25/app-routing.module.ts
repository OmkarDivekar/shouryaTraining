import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { SalesComponent } from './sales/sales.component';
import { SubcatComponent } from './category/subcat/subcat.component';
import { Display1Component } from './display1/display1.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'sales', component:SalesComponent},
  {path:'category', component:CategoryComponent,
   children:[{path:'subcat/:productname/:price',component:SubcatComponent}]
   },
  {path:'display1', component:Display1Component},
  {path:'login', component:LoginFormComponent},
  {path:'page',component:PagenotfoundComponent},
  {path:'**', redirectTo:'/page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

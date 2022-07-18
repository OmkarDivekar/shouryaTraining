import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayFormComponent } from './display-form/display-form.component';
const routes: Routes = [
  {path:'displayform', component: DisplayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

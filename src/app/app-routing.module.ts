import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import {PagesComponent} from './pages/pages.component'

const approutes: Routes = [
  {
   path:'',
    component:PagesComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},
      {path:'progress', component:ProgressComponent},
      {path:'graficas1', component:Graficas1Component},
      {path:'', redirectTo:'/dashboard', pathMatch:'full'}
    ]},
   {path:'register', component:RegisterComponent},
   {path:'login', component:LoginComponent},
   {path:'**', component:NopagefoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES =RouterModule.forRoot(approutes,{useHash:true})

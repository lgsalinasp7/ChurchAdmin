import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const approutes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:LoginComponent},
  {path:'progress', component:ProgressComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES =RouterModule.forRoot(approutes,{useHash:true})

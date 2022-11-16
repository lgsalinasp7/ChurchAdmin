import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const approutes: Routes = [

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

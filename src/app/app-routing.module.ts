import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './View/pages/auth/login/login.component';
import { RegisterComponent } from './View/pages/auth/register/register.component';
import { RecoverComponent } from './View/pages/auth/recover/recover.component';
import { DashboardComponent } from './View/pages/dashboard/dashboard.component';
import { ListPrincipalComponent } from './View/company/list-principal/list-principal.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login/register', component:RegisterComponent},
  {path:'login/recover', component:RecoverComponent},
  {path:'dashboard', component:DashboardComponent, children: [
    {path:'company', component: ListPrincipalComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

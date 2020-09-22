import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './View/pages/auth/login/login.component';
import { RegisterComponent } from './View/pages/auth/register/register.component';
import { RecoverComponent } from './View/pages/auth/recover/recover.component';
import { DashboardComponent } from './View/pages/dashboard/dashboard.component';
import { CompanyComponent } from './Core/m_service/company/company/company.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login/register', component:RegisterComponent},
  {path:'login/recover', component:RecoverComponent},
  {path:'menu', component:DashboardComponent, children: [
    {path:'company', component: CompanyComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

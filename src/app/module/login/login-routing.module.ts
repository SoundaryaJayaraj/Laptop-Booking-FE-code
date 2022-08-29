import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/login.guard';
import { PageDashboardComponent } from '../dashboard/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { RegistrationComponent } from './page-registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:PageLoginComponent
  },
  {
    path: 'register',
    component:RegistrationComponent
  },
  {
    path: 'dashboard',
    component:PageDashboardComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

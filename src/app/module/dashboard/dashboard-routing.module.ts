import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/login.guard';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:PageDashboardComponent,
  },
  {
    path: 'booking',
    component: AppointmentBookingComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'confirmation',
    component: BookingConfirmationComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'appointments',
    component:AppointmentViewComponent,
    canActivate:[LoginGuard]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

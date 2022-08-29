import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageDashboardService } from 'src/app/service/page-dashboard.service';
import { AppointmentBookingService } from 'src/app/service/appointment-booking.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { SiteFrameworkModule } from '../site-framework/site-framework.module';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextColorDirective } from './text-color.directive';


@NgModule({
  declarations: [
    PageDashboardComponent,
    AppointmentBookingComponent,
    BookingConfirmationComponent,
    AppointmentViewComponent,
    TextColorDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    SiteFrameworkModule,
    HeaderFooterModule,
    AccordionModule.forRoot()
  ],
  providers: [PageDashboardService,
  AppointmentBookingService],
})
export class DashboardModule { }

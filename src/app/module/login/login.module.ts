import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './page-login/page-login.component';
import { RegistrationComponent } from './page-registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLoginService } from 'src/app/service/page-login.service';
import { HeaderFooterModule } from '../header-footer/header-footer.module';


@NgModule({
  declarations: [
    PageLoginComponent,
    RegistrationComponent,
  ],
  imports: [
    HeaderFooterModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PageLoginService],
})
export class LoginModule { }

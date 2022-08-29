import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AuthInterceptorInterceptor } from 'src/interceptors/auth-interceptor.interceptor';
import { LoginGuard } from './login.guard';
import { HeaderFooterModule } from './module/header-footer/header-footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderFooterModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorInterceptor, multi: true}, LoginGuard],
  bootstrap: [AppComponent],
  exports:[CommonModule]
})
export class AppModule { }

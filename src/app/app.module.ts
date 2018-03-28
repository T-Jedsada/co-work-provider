import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auths/register/register.component';
import { LoginComponent } from './components/auths/login/login.component';
import { ErrorsComponent } from './components/404/errors.component';
import { Configuration } from '../config/app.constants';
import { ForgotPasswordComponent } from './components/auths/register/forgot-password/forgot-password.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FixedpluginComponent } from './components/shared/fixedplugin/fixedplugin.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ErrorsComponent,
    ForgotPasswordComponent,
    FooterComponent,
    DashboardComponent,
    FixedpluginComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
      AlertModule.forRoot(),
      BrowserModule,
      AppRouting,
      MaterialModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
  ],
  providers: [
      Configuration,
      AuthService,
      AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

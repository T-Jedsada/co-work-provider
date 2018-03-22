import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auths/register/register.component';
import { LoginComponent } from './auths/login/login.component';
import { ErrorsComponent } from './404/errors.component';
import { Configuration } from '../config/app.constants';
import { ForgotPasswordComponent } from './auths/register/forgot-password/forgot-password.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './services/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ErrorsComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
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

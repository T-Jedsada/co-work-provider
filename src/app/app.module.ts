import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRouting } from './app.routing';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auths/register/register.component';
import { LoginComponent } from './auths/login/login.component';
import { ErrorsComponent } from './404/errors.component';
import { UsersService } from './services/users.service';
import { Configuration } from '../config/app.constants';
import { ForgotPasswordComponent } from './auths/register/forgot-password/forgot-password.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ImageService } from './services/uploads/image.service';
import { AuthService } from './services/authentication/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ErrorsComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
      AlertModule.forRoot(),
      BrowserModule,
      AppRouting,
      MaterialModule,
      HttpClientModule,
  ],
  providers: [
      UsersService,
      Configuration,
      ImageService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auths/login/login.component';
import { RegisterComponent } from './auths/register/register.component';
import { ErrorsComponent} from './404/errors.component';
import { ForgotPasswordComponent } from './auths/register/forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth/auth.guard';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: LoginComponent },
    { path: 'sign-up', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: ErrorsComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auths/login/login.component';
import { RegisterComponent } from './auths/register/register.component';
import { ErrorsComponent} from './404/errors.component';
import { ForgotPasswordComponent } from './auths/register/forgot-password/forgot-password.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'sign-in', component: LoginComponent },
    { path: 'sign-up', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '**', component: ErrorsComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auths/login/login.component';
import { RegisterComponent } from './auths/register/register.component';
import { ErrorsComponent} from './404/errors.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: ErrorsComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     console.log(localStorage.getItem('email'));
    if (localStorage.getItem('email') === null) {
      this.router.navigate(['/sign-in']);
      return false;
    } else if (localStorage.getItem('email') === undefined) {
      this.router.navigate(['/sign-in']);
      return false;
    } else {
      return true;
    }
  }
  ffd (next: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return false;
  }
}

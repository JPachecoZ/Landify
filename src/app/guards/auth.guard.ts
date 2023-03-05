import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (token && expirationDate) {
      const now = new Date();
      const expiration = new Date(expirationDate);
      if (now < expiration) {
        console.log(`${now} es menor a ${expiration} Paso el test`);
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}

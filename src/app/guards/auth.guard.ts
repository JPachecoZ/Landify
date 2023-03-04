import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')
    const expirationDate = localStorage.getItem('expirationDate')
    console.log(token)
    console.log(expirationDate)
    if (token && expirationDate){
      const now = new Date();
      const expiration = new Date(expirationDate)
      if (now < expiration){
        console.log(`${now} es menor a ${expiration} Paso el test`)
        return true
      }
    }
    this.router.navigate(['/login'])
    return false;
  }
}

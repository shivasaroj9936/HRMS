import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {  ADMIN } from 'src/app/constants/routes';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(
    private _router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem("token");
      if (token) {
        return this._router.navigate([ADMIN.fullUrl]);
      }else{
     
        return true;
      }
  }
  
}

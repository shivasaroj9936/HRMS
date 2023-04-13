import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ACCOUNT, DASHBOARD, LOGIN } from "src/app/constants/routes";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }else{
      return this._router.navigate([ACCOUNT.fullUrl])
    }
  }
}

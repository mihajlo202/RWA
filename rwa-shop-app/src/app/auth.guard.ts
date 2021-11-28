import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedUser } from './models/loggeduser';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedUser: LoggedUser | undefined;
    constructor(//private store: Store<AppState>,
                private router: Router) {   
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.store.select(selectLoggedUser).subscribe((val)=> {
        //     this.loggedUser = val;
        // })
        if(this.loggedUser && route.data['role'].indexof(this.loggedUser.role))
            return true;
        this.router.navigate(['./main']);
        return false;
  }
}

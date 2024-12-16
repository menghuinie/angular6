import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenGuardService implements CanActivate {
  constructor(private router:Router, private authenService: AuthenService ) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authenService.isUserLoggedIn()) {
// Removed, because this cause error during ng build. ERROR ReferenceError: alert is not defined.
// Any DOM objects like alert or window are not defined on server side. Node.js doesn't have such definitions.
          
          //alert('Not allowed to view this page, you are redirected to login Page');

/*           
          if (this.isBrowser) {       // not work.
            alert("we're in the browser!");
          } 
*/

          this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
          return false;

          //var urlTree = this.router.createUrlTree(['login']);
          //return urlTree;
      } 

      return true;
    }
}

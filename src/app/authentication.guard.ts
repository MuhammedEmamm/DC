import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { AuthenticationService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor (private authService: AuthenticationService, private router: Router ,  private Cookie : CookieService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.Cookie.get('UID')) {
        this.router.navigateByUrl('/login');
        return false;
      } 
      console.log('is Authenticated') ; 
      return true;

  }

}

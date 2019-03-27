import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../service/auth.service';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor (private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/add-employee');
      return false;
    }
    return true;
  }
}

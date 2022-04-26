import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../api-rest/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AuthService,
              private router: Router) {}

  canActivate(): boolean {
    if ( ! this.authSvc.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}

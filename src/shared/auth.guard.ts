import { AuthService } from 'shared/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}

  canActivate() {
    if (!this.auth.user) {
        this.router.navigate(['/login']);
    }
    return !!this.auth.user;
  }
}
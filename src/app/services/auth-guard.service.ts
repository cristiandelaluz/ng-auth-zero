import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('next', next);
    console.log('state', state);
    if (this.authService.isAuthenticated()) {
      console.log('Usuario autenticado');
      return true;
    } else {
      console.error('Página bloqueada');
      return false;
    }
  }

}

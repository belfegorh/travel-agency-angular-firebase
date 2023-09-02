import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  CanActivateFn,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(public authService: LoginService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = JSON.parse(localStorage.getItem('rol')!);
    if (user?.rol !== 'hotelAdmin') {
      this.router.navigate(['/traveler/admin']);

      return false;
    }

    return true;
  }
}

export const AuthGuardUser: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(PermissionsService).canActivate(next, state);
};

import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.usuarioEstaAutenticado()) {
      console.log('Autenticado');

      return true;
    }else {
      console.log('Não autenticado');
      this.router.navigate(['/login']);
       return false;
    }
   
  }
  constructor(private authService: AuthService,
              private router: Router) { }
}

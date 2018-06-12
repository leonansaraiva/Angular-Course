import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class CursoGuard implements CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('Guarada de rota filha');

        return true;

    }
    
}
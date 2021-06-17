import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';
import { map,  } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  constructor(private auth:AuthentificationService, private router: Router,private fireAuth: AngularFireAuth) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.fireAuth.authState.pipe(
      map((authState) => {
        if (authState !== null) {
          return true;
        } else {
          this.router.navigateByUrl("/login");
          return false;
        }
      })
    );
    
  }
  
}

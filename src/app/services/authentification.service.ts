import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private fireAuth: AngularFireAuth) {
    //we set user authstate into user$ 
    this.fireAuth.authState.subscribe((res) => {
      this.user$.next(res)
    })
  }

  /**
   *
   * @returns boolean which determine if the user is logged or not
   */
   public isConnected():boolean {
    return this.user$.value !== null
  }

  /**
   *
   * @param email string : email of the user
   * @param password string : password of the user
   * @returns boolean | Object to handle result in component
   */
  public login(email, password): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password).then((userRes:any) => {
      if (userRes.user.uid) {
        this.user$.next(userRes.user)
        return true
      }
      return false
    }).catch((err) => {
      return {code: err.code}
    })
  }

  /**
   *
   * @returns logout promise
   */
  public logout():Promise<any> {
    return this.fireAuth.signOut()
  }
}

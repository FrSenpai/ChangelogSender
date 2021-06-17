import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private fireAuth: AngularFireAuth) { 
    this.fireAuth.authState.subscribe((res) => {
      this.user$.next(res)
      console.log(this.isConnected())
    })
  }


  public isConnected():boolean {
    return this.user$.value !== null
  }

  public login(email, password): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password).then((userRes:any) => {
      if (userRes.user.uid) {
        this.user$.next(userRes.user)
        return true
      } 
      return false
    }).catch((err) => {
      console.log(err.code)
      return {code: err.code}
    })
  }
}

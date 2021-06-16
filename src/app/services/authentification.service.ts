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
      console.log(res)
      this.user$.next(res)
      console.log(this.isConnected())
    })
  }

  public isConnected():boolean {
    return this.user$.value !== null
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AlertService } from 'src/app/services/helpers/alert.service';
import { FirebaseErrorService } from 'src/app/services/helpers/firebase-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginF: FormGroup;
  constructor(private fb: FormBuilder, private auth:AuthentificationService,private fbError: FirebaseErrorService, private alert: AlertService, private router:Router ) {
    this.loginF = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit():void {
    this.auth.login(this.loginF.value.email, this.loginF.value.password).then((user) => {
      console.log(user)
      //handle firebase error code
      if (user?.code) {
        console.log("error")
        const error = this.fbError.handleError(user.code);
        this.alert.displayAlert('error', error)
        return
      }

      if (user) {
        this.alert.displayAlert('success', 'Vous êtes désormais connecté.')
        this.router.navigateByUrl('/')
      }
      
    })
  }
}

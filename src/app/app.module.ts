import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/layouts/top-bar/top-bar.component'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0aT0mJR5ZscjKAqah6sEEn1NmKF7lYT8",
  authDomain: "changelogsender.firebaseapp.com",
  projectId: "changelogsender",
  storageBucket: "changelogsender.appspot.com",
  messagingSenderId: "320974003738",
  appId: "1:320974003738:web:f59d87502dcb84343cfba3"
};
firebase.initializeApp(firebaseConfig)
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

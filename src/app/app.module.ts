import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/layouts/top-bar/top-bar.component'
import { AuthentificationService } from './services/authentification.service'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA0aT0mJR5ZscjKAqah6sEEn1NmKF7lYT8",
  authDomain: "changelogsender.firebaseapp.com",
  projectId: "changelogsender",
  storageBucket: "changelogsender.appspot.com",
  messagingSenderId: "320974003738",
  appId: "1:320974003738:web:f59d87502dcb84343cfba3"
};

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

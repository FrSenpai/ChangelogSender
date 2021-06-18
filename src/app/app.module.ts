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
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FirebaseErrorService } from './services/helpers/firebase-error.service'
import { AlertService } from './services/helpers/alert.service';
import { HomeComponent } from './components/home/home.component';
import { ChangelogComponent } from './components/changelog/changelog.component'
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { BannerComponent } from './components/layouts/banner/banner.component'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    ChangelogComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    EditorModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [AuthentificationService,FirebaseErrorService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

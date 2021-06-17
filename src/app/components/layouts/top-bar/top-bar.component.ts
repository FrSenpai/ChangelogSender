import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AlertService } from 'src/app/services/helpers/alert.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private auth:AuthentificationService, private alert: AlertService,private router:Router) { }

  ngOnInit(): void {

  }

  public logout():void {
    this.auth.logout().then(() => {
      this.alert.displayAlert('success', 'Déconnexion réussie !')
      location.reload()
    })
  }

}

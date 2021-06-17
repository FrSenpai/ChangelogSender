import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() {}
  
  handleError(err): string {
    switch (err) {
      //Login
      case 'auth/wrong-password':
        return "Le mot de passe n'est pas valide.";
      case 'auth/invalid-email':
        return "L'adresse e-mail est mal formatée.";
      case 'auth/user-not-found':
        return "Il n'y a pas d'utilisateur correspondant à cet identifiant. L'utilisateur a peut-être été supprimé.";
      //Register
      case 'auth/email-already-in-use':
        return "L'adresse e-mail est déjà utilisée par un autre compte.";
      case 'auth/weak-password':
        return 'Le mot de passe doit contenir au moins 6 caractères.';
      case 'auth/too-many-requests':
        return 'Votre compte est désactivé suite à plusieurs essais de connexion infructueux'
      default:
        return 'Une erreur est survenue';
    }
  }
}

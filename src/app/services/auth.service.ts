import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth) {}

  async register(Email: string, Contrasena: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(
        Email,
        Contrasena
      );
    } catch (err) {
      console.log('error en register: ', err);
      return null;
    }
  }

  async login(Email: string, Contrasena: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(Email, Contrasena);
    } catch (err) {
      console.log('error en Login: ', err);
      return null;
    }
  }

  async loginWinthGoogle(Email: string, Contrasena: string) {
    try {
      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (err) {
      console.log('error en Login con google: ', err);
      return null;
    }
  }
  getUserLogged() {
    return this.afauth.authState;
  }
  logout() {
    this.afauth.signOut();
  }
}

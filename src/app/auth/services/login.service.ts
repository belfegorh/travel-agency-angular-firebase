import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  auth: Auth;

  constructor(public router: Router) {
    this.auth = getAuth();
    console.log(this.auth.currentUser);
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  async firebaseLogin({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) {
    return signInWithEmailAndPassword(this.auth, login, password);
  }

  signOut() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }
}

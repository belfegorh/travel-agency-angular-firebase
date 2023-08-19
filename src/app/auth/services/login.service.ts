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
import { getApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from '../../app.module';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  auth: Auth;

  constructor(public router: Router) {
    this.auth = getAuth();
    console.log(this.auth.currentUser);
    onAuthStateChanged(this.auth, (userfb) => {
      if (userfb) {
        const rol = this.getTypeUser(userfb.uid);
        const user = { ...userfb, ...rol };

        localStorage.setItem('user', JSON.stringify(userfb));

        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  async getTypeUser(uid: string) {
    const user = JSON.parse(localStorage.getItem('user')!);

    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    const data = await docSnap.data();

    localStorage.setItem('rol', JSON.stringify(data));
    return;
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

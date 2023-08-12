import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  browserLocalPersistence,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';
import {
  Firestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  setLogLevel,
} from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // _app: FirebaseApp;
  // auth: Auth;
  // firestore: Firestore;
  // storage: FirebaseStorage;
  // constructor() {
  //   this.initApp();
  //   this.initFirebaseAuth();
  //   this.initFirestore();
  //   this.initStorage();
  // }
  // /**
  //  * Initilizes the Firebase Application,
  //  * and sets the name of the application
  //  * to the project ID in the firebase configuration.
  //  */
  // private initApp() {
  //   console.log('FIREBASE', 'Init App');
  //   this._app = initializeApp(environment.firebaseConfig);
  // }
  // /**
  //  * Initilizes the Firebase Authentication Client
  //  */
  // private initFirebaseAuth() {
  //   console.log('FIREBASE', 'Init Auth');
  //   if (!this._app) {
  //     throw new Error('Firebase Not Initialized');
  //   }
  //   this.auth = initializeAuth(this._app, {
  //     persistence: [indexedDBLocalPersistence, browserLocalPersistence],
  //   });
  // }
  // /**
  //  * Initilizes the Firestore Database Client and enables Persistence
  //  */
  // private initFirestore() {
  //   console.log('FIREBASE', 'Init Firestore');
  //   if (!this._app) {
  //     throw new Error('Firebase Not Initialized');
  //   }
  //   this.firestore = initializeFirestore(this._app, {
  //     localCache: persistentLocalCache({
  //       tabManager: persistentMultipleTabManager(),
  //     }),
  //   });
  //   if (environment.environmentName === 'DEV') {
  //     setLogLevel('error');
  //   }
  // }
  // /**
  //  * Initilizes the Firebase Storage Client
  //  */
  // private initStorage() {
  //   console.log('FIREBASE', 'Init Storage');
  //   if (!this._app) {
  //     throw new Error('Firebase Not Initialized');
  //   }
  //   this.storage = getStorage(this._app);
  // }
}

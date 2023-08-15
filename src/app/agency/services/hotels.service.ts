import { Injectable } from '@angular/core';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { Hotel } from '../pages/admin/admin.component';
const firebaseApp = getApp();
export const db = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor() {}
  async addHotelDoc(hotel: Hotel) {
    return await addDoc(collection(db, 'hotels'), hotel);
  }
  async updateHotelDoc(hotel: Hotel) {
    return await setDoc(doc(db, 'hotels', hotel.uid), hotel);
  }
}

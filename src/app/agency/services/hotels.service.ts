import { Injectable } from '@angular/core';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  getDoc,
} from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { Hotel, Room } from '../interfaces/agency';
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
  async getHotelDoc(hotelUid: string) {
    return await getDoc(doc(db, 'hotels', hotelUid));
  }
}

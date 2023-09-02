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
import { Booking } from '../interfaces/traveler';
const firebaseApp = getApp();
export const db = getFirestore(firebaseApp);
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}
  async addBookingDoc(booking: Booking) {
    return await addDoc(collection(db, 'bookings'), booking);
  }
}

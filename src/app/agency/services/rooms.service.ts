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
import { Hotel, Room } from '../interfaces/agency';
const firebaseApp = getApp();
export const db = getFirestore(firebaseApp);
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}
  async addRoomDoc(room: Room) {
    return await addDoc(collection(db, 'rooms'), room);
  }
  async updateRoomDoc(room: Room) {
    return await setDoc(doc(db, 'rooms', room.uid), room);
  }
}

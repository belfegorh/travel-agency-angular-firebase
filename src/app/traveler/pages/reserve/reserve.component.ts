import { Component } from '@angular/core';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { HotelsService, db } from '../../../agency/services/hotels.service';
import { Hotel } from '../../../agency/interfaces/agency';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent {
  products!: any[];
  // Data
  hotels: dataviewHotel[] = [];
  hotelsSnapshot: any;

  constructor() {
    const q = query(collection(db, 'hotels'), where('active', '==', true));

    this.hotelsSnapshot = onSnapshot(q, (snap) => {
      this.hotels = snap.docs.map((doc) => {
        const hotel: dataviewHotel = doc.data() as dataviewHotel;
        hotel.rating = this.getRandomNumber();
        hotel.uid = doc.id;
        return hotel;
      });
    });
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.hotelsSnapshot();
  }
  getRandomNumber(): number {
    return Math.floor(Math.random() * 4) + 2;
  }
  getSeverity() {}
}

interface dataviewHotel extends Hotel {
  rating: number;
}

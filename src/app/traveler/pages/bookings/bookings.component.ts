import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../auth/services/login.service';
import { HotelsService } from '../../../agency/services/hotels.service';
import { RoomsService, db } from '../../../agency/services/rooms.service';
import { BookingService } from '../../services/booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Booking, Guest } from '../../interfaces/traveler';
import { Room, Hotel } from '../../../agency/interfaces/agency';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent {
  // Data
  bookings: Booking[] = [];
  bookingsSnapshot: any;

  layout: 'list' | 'grid' = 'list';

  constructor() {}
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')!);

    const q = query(
      collection(db, 'bookings'),
      where('userUid', '==', user.uid)
    );

    this.bookingsSnapshot = onSnapshot(q, (snap) => {
      this.bookings = snap.docs.map((doc) => {
        const booking: any = doc.data() as Booking;
        booking.uid = doc.id;

        booking.accommodationDates[0] = new Date(
          booking.accommodationDates[0].seconds * 1000
        );
        booking.accommodationDates[1] = new Date(
          booking.accommodationDates[1].seconds * 1000
        );
        console.log(booking);
        return booking;
      });
    });
  }
  ngOnDestroy(): void {
    this.bookingsSnapshot();
  }
}

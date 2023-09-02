import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../auth/services/login.service';
import { HotelsService } from '../../../agency/services/hotels.service';
import { RoomsService, db } from '../../../agency/services/rooms.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Booking, Guest } from '../../interfaces/traveler';
import { Room, Hotel } from '../../../agency/interfaces/agency';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  subs: Subscription[] = [];

  // Form
  bookingForm: FormGroup;
  submitted = false;
  // layout
  visible: boolean = false;
  editMode: boolean = false;
  // Data
  rooms: Room[] = [];
  currentHotelUid: string;
  roomsSnapshot: any;
  currentHotel: Hotel = {
    name: '',
    city: '',
    uid: '',
    owner: '',
    img: '',
    active: false,
  };

  roomsTypes = ['Sencilla', 'Doble', 'Triple'];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private roomsService: RoomsService,
    private hotelsService: HotelsService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.bookingForm = new FormGroup({
      emergencyContactPhone: new FormControl(null, Validators.required),
      emergencyContactName: new FormControl(null, Validators.required),

      accommodationDates: new FormControl(null, Validators.required),
      uid: new FormControl(null),
      hotelUid: new FormControl(null),
      roomUid: new FormControl(null),
      guests: this.fb.array([
        this.fb.group({
          name: '',
          lastName: '',
          bithDate: '',
          genere: '',
          documentType: '',
          documentNumber: '',
          email: '',
          phone: 0,
        }),
      ]),
      guestsCount: new FormControl(1),
      active: new FormControl(true),
    });

    this.currentHotelUid = this.activatedRoute.snapshot.paramMap.get(
      'hoteluid'
    ) as string;

    const q = query(
      collection(db, 'rooms'),
      where('hotelUid', '==', this.currentHotelUid)
    );

    this.roomsSnapshot = onSnapshot(q, (snap) => {
      this.rooms = snap.docs.map((doc) => {
        const room: Room = doc.data() as Room;
        room.uid = doc.id;
        return room;
      });
    });
    this.getHotelData();
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
    this.roomsSnapshot();
  }
  guest(): FormArray {
    return this.bookingForm.get('guests') as FormArray;
  }

  newGuest(): FormGroup {
    return this.fb.group({
      name: '',
      lastName: '',
      bithDate: '',
      genere: '',
      documentType: 0,
      documentNumber: '',
      email: '',
      phone: 0,
    });
  }

  changeGuests(event: any) {
    console.log(event);
    if (event.value == 2 && this.guest().length == 1) {
      this.guest().push(this.newGuest());
    } else {
      this.guest().removeAt(1);
    }
  }

  async getHotelData() {
    const hotel = await this.hotelsService.getHotelDoc(this.currentHotelUid);
    this.currentHotel = hotel.data() as Hotel;
  }

  showDialog(room?: Room) {
    this.visible = true;
    if (!!room) {
      this.editMode = true;
      this.bookingForm.setValue(room);
    }
  }

  async onSubmit() {
    this.submitted = true;
    console.log(this.bookingForm.value);
    // const user = JSON.parse(localStorage.getItem('user')!);

    // const room: Room = this.bookingForm.value;
    // console.log(room, this.bookingForm.value);

    // room.hotelUid = this.currentHotelUid;
    // const response = this.editMode
    //   ? await this.roomsService.updateRoomDoc(room)
    //   : await this.roomsService.addRoomDoc(room);
    // console.log(response);
    // this.submitted = false;

    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Success',
    //   detail: this.editMode
    //     ? 'room actualizado correctamente'
    //     : 'room creado correctamente',
    // });
  }

  clear() {
    this.bookingForm.reset();
    this.editMode = false;
  }
}

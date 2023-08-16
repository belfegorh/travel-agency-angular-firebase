import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../auth/services/login.service';
import { HotelsService } from '../../services/hotels.service';
import { RoomsService, db } from '../../services/rooms.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Hotel, Room } from '../../interfaces/agency';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  subs: Subscription[] = [];

  // Form
  roomForm: FormGroup;
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
    active: false,
  };

  roomsTypes = ['Sencilla', 'Doble', 'Triple'];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private roomsService: RoomsService,
    private hotelsService: HotelsService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.roomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      tax: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      beds: new FormControl('', Validators.required),
      hotelUid: new FormControl(''),
      uid: new FormControl(''),
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
  async getHotelData() {
    const hotel = await this.hotelsService.getHotelDoc(this.currentHotelUid);
    this.currentHotel = hotel.data() as Hotel;
  }

  showDialog(room?: Room) {
    this.visible = true;
    if (!!room) {
      this.editMode = true;
      this.roomForm.setValue(room);
    }
  }

  async onSubmit() {
    this.submitted = true;
    const user = JSON.parse(localStorage.getItem('user')!);

    const room: Room = this.roomForm.value;
    console.log(room, this.roomForm.value);

    room.hotelUid = this.currentHotelUid;
    const response = this.editMode
      ? await this.roomsService.updateRoomDoc(room)
      : await this.roomsService.addRoomDoc(room);
    console.log(response);
    this.submitted = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: this.editMode
        ? 'room actualizado correctamente'
        : 'room creado correctamente',
    });
  }

  clear() {
    this.roomForm.reset();
    this.editMode = false;
  }
}

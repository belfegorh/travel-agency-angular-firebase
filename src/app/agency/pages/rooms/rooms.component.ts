import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../auth/services/login.service';
import { HotelsService, db } from '../../services/hotels.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
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
  roomsTypes = [
    { name: 'Sencilla', code: 'Sencilla' },
    { name: 'Doble', code: 'Doble' },
    { name: 'Triple', code: 'Triple' },
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    // private roomsService: RoomsService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.roomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      tax: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      beds: new FormControl('', Validators.required),
      active: new FormControl(true),
    });

    const subActivatedRoute = this.activatedRoute.paramMap.subscribe(
      (params) => (this.currentHotelUid = params.get('hoteluid') as string)
    );
    this.subs.push(subActivatedRoute);
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
  async logout() {
    const res = await this.loginService.signOut();
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
    // const response = this.editMode
    //   ? await this.roomsService.updateroomDoc(room)
    //   : await this.roomsService.addroomDoc(room);
    // console.log(response);
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
interface Room {
  uid?: number;
  hotelUid: string;

  name: string;
  price: number;
  tax: number;
  type: string;
  beds: number;
  active: boolean;
}

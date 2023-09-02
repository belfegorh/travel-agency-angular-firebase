import { Component } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';
import { HotelsService, db } from '../../services/hotels.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Hotel } from '../../interfaces/agency';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent {
  // Form
  hotelForm: FormGroup;
  submitted = false;
  // layout
  visible: boolean = false;
  editMode: boolean = false;

  // Data
  hotels: Hotel[] = [];
  hotelsSnapshot: any;
  constructor(
    private loginService: LoginService,
    private hotelsService: HotelsService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.hotelForm = new FormGroup({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      owner: new FormControl(''),
      uid: new FormControl(''),
      active: new FormControl(true),
    });
    const user = JSON.parse(localStorage.getItem('user')!);

    const q = query(collection(db, 'hotels'), where('owner', '==', user.uid));

    this.hotelsSnapshot = onSnapshot(q, (snap) => {
      this.hotels = snap.docs.map((doc) => {
        const hotel: Hotel = doc.data() as Hotel;
        hotel.uid = doc.id;
        return hotel;
      });
    });
  }
  ngOnDestroy() {
    this.hotelsSnapshot();
  }

  showDialog(hotel?: Hotel) {
    this.visible = true;
    if (!!hotel) {
      this.editMode = true;
      this.hotelForm.setValue(hotel);
    }
  }

  async onSubmit() {
    this.submitted = true;
    const user = JSON.parse(localStorage.getItem('user')!);

    const hotel: Hotel = this.hotelForm.value;

    hotel.owner = user.uid;
    const response = this.editMode
      ? await this.hotelsService.updateHotelDoc(hotel)
      : await this.hotelsService.addHotelDoc(hotel);
    this.submitted = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: this.editMode
        ? 'Hotel actualizado correctamente'
        : 'Hotel creado correctamente',
    });
  }

  clear() {
    this.hotelForm.reset();
    this.editMode = false;
  }
}

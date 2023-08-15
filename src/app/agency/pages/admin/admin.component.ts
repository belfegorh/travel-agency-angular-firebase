import { Component } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';
import { HotelsService } from '../../services/hotels.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService],
})
export class AdminComponent {
  hotelForm: FormGroup;
  submitted = false;

  hotels: Hotel[] = [{ name: 'casa farallones', city: 'Cali', owner: 'xxx' }];
  visible: boolean = false;

  constructor(
    private loginService: LoginService,
    private hotelsService: HotelsService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.hotelForm = new FormGroup({
      name: new FormControl('Casa Farallones', Validators.required),
      city: new FormControl('Cali', Validators.required),
    });
  }
  async logout() {
    const res = await this.loginService.signOut();
  }
  showDialog() {
    this.visible = true;
  }

  async onSubmit() {
    this.submitted = true;
    const user = JSON.parse(localStorage.getItem('user')!);

    const hotel: Hotel = this.hotelForm.value;
    hotel.owner = user.uid;
    const newDoc = await this.hotelsService.addHotelDoc(hotel);
    console.log(newDoc);
    this.submitted = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Hotel creado correctamente',
    });
  }
}
export interface Hotel {
  name: string;
  city: string;
  uid?: string;
  owner: string;
}

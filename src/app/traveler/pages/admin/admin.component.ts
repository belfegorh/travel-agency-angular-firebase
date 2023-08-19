import { Component } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  menuItems: MenuItem[] | undefined;

  constructor(private loginService: LoginService) {}
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Reservar',
        icon: 'pi pi-building',
        routerLink: '/traveler/admin/reserve',
      },
      {
        label: 'Reservas',
        icon: 'pi pi-building',
        routerLink: '/traveler/admin/bookings',
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  async logout() {
    const res = await this.loginService.signOut();
  }
}

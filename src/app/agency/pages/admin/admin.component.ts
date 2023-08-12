import { Component } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private loginService: LoginService) {}

  async logout() {
    const res = await this.loginService.signOut();
  }
}

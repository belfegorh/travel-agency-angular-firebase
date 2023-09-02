import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  submitted = false;
  constructor(
    private loginService: LoginService,
    public router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    this.submitted = true;
    const res = await this.loginService
      .firebaseLogin(this.loginForm.value)
      .catch((err) => err);
    if (res?.message === 'Firebase: Error (auth/invalid-email).') {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Usuario/Password incorrectos',
      });
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Ingresando...',
      });
    }
    this.submitted = false;
  }
}

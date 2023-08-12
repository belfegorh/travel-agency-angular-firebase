import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  submitted = false;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('francisco@email.com', Validators.required),
      password: new FormControl('123456789', Validators.required),
    });
  }

  async onSubmit() {
    this.submitted = true;
    const res = await this.loginService.firebaseLogin(this.loginForm.value);
  }
}

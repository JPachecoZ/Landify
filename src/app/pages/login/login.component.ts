import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  hide = true;

  constructor(private sessionsService: SessionsService) {}

  login() {
    this.sessionsService.login(this.loginForm.value);
  }
}

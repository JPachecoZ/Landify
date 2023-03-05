import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private expirationTime = 900000;
  constructor(private router: Router) {}

  login(credentials: Partial<{ email: string | null; password: string | null; }>) {
    if (credentials.email === 'javier@mail.com') {
      if (credentials.password === '123456') {
        const token = 'EL_TOKEN_MAS_DIFICIL';
        const now = new Date();
        const expirationDate = new Date(now.getTime() + this.expirationTime);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
        this.router.navigate(['/posts']);
      } else {
        alert('Password invalido');
      }
    } else {
      alert('Usuario no registrado');
    }
  }
}

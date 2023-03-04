import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(
    private router: Router
  ) { }

  login(credentials: any){
    if(credentials.email === "javier@mail.com"){
      if (credentials.password === "123456"){
          const token = 'EL_TOKEN_MAS_DIFICIL'
          const tokenCreationDate = new Date()
          localStorage.setItem('token', token)
          localStorage.setItem('tokenCreationDate', JSON.stringify(tokenCreationDate))
          this.router.navigate(['/posts'])
        } else {
          alert('Password invalido')
        }
      } else {
        alert('Usuario no registrado')
      }
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private expirationTime: number = 900000;
  constructor(
    private router: Router,
  ) { }

  login(credentials: any){
    if(credentials.email === "javier@mail.com"){
      console.log("Usuario Existe")
      if (credentials.password === "123456"){
          console.log("Password Correcto")
          const token = 'EL_TOKEN_MAS_DIFICIL'
          const now = new Date()
          const expirationDate = new Date(now.getTime() + this.expirationTime)
          localStorage.setItem('token', token)
          localStorage.setItem('expirationDate', expirationDate.toISOString())
          this.router.navigate(['/posts'])
        } else {
          alert('Password invalido')
        }
      } else {
        alert('Usuario no registrado')
      }
  }
}

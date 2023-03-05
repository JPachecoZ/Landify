import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ReqResResponse } from '../models/reqres.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiURI: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<ReqResResponse[]>(this.apiURI).pipe(
      map((response) => {
        return response.map((user) => {
          return {
            id: user.id,
            Nombre: user.name,
            Username: user.username,
            Dirección:
              user.address.street +
              ', ' +
              user.address.suite +
              ', ' +
              user.address.city,
            Correo: user.email,
            'Phone Number': user.phone,
            Posts: [],
          };
        });
      })
    );
  }
}

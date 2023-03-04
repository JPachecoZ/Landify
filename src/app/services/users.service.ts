import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURI: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    return this.http.get<any[]>(this.apiURI)
  }
}

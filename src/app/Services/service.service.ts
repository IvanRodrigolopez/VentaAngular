import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url:any='https://localhost:5001/Prueba/';


  constructor(private http: HttpClient) { }

  addUser(User:User){
    return this.http.post(`${this.Url}insert-user`,User)
  }

  userLogin(user:string,password:string){
    return this.http.get(`${this.Url}login-user?User=${user}&Password=${password}`)
  }
}

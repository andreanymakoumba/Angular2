import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string;

  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:9017/users';
  }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.URL);
  }

  public save(user: User){
    return this.http.post<User>(this.URL, user);
  }

}

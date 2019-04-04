import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${environment.apiUrl}/users?per_page=6`)
    .pipe( map( res => res['data']));
  }

  getUser(id:string) {
    return this.http.get(`${environment.apiUrl}/users/${id}`)
    .pipe( map( res => res['data']));
  }
  
}

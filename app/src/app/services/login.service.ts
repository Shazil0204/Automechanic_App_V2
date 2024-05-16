import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../environment.dev';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private url = `${environment.API_URL}/User`

  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }
  
  logout() {
    this.localStorageService.removeFromLocalStorage('token');
  }
  login(username:string, password:string): Observable<any> {
    return this.http.post(`${this.url}/Login?username=${username}&password=${password}`,null, { responseType: "text"});
  }

  verifyToken(token: any): Observable<any> {
    return this.http.put(`${this.url}/Verify?token=${token}`, null)
  }
}

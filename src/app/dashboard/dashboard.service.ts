import { LoginService } from './../login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ResponseLogin {
  token: string;
  tokenProvider: string;
  expireIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private http: HttpClient, private loginService: LoginService) { }


  logout() {

    const token = this.loginService.responseLogin.tokenProvider + this.loginService.responseLogin.token;

    const headers = new HttpHeaders().append('Authorization', token);

    return this.http.delete('http://localhost:8080/users/logout',  {headers})
  }
}

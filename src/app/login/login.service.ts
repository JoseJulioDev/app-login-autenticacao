import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators'

interface ResponseLogin {
  token: string;
  tokenProvider: string;
  expireIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  responseLogin: ResponseLogin;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<ResponseLogin>('http://localhost:8080/users/login', {email, password})
      .pipe( tap(
        obj => {
          this.responseLogin = obj;
        }
      ));
  }
}

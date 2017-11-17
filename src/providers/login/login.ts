import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

    BASE_URL: string = 'http://localhost:3000';
    LOGIN_URL: string = '/login';

    constructor(public http: HttpClient) {
        console.log('Hello LoginProvider Provider');
    }

    public login(data) {
        return this.http.post(this.BASE_URL + this.LOGIN_URL, data);
    }
}
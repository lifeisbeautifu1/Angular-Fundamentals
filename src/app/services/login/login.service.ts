import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() {}

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === '123456')
      this.isLoggedIn = true;
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.email, this.password)
      ? this.router.navigate(['rooms'])
      : alert('wrong!');
  }
}

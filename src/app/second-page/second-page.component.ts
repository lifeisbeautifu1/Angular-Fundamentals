import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/rooms', 'add']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  id: number | null = null;

  constructor(private readonly router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => (this.id = params['id']));
  }
}

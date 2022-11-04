import { Component, OnInit } from '@angular/core';

import { IRoomsData, IRoom } from '../interfaces';
import { RoomsService } from '../services/rooms/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hello: string = 'hello world';
  counter: number = 0;
  isHidden: boolean = false;
  roomsData: IRoomsData = {
    availableRooms: 10,
    bookedRooms: 10,
    totalRooms: 20,
  };
  rooms: IRoom[] = [];
  selectedRoom: IRoom | null = null;

  constructor(private readonly roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe((data) => (this.rooms = data));
  }

  increment(): void {
    this.counter = this.counter + 1;
  }
  decrement(): void {
    this.counter = this.counter - 1;
  }
  toggle(): void {
    this.isHidden = !this.isHidden;
  }

  showRoom(room: IRoom) {
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom = {
      roomNumber: this.rooms.length + 1,
      roomType: 'Deluxe',
      amentities: 'lorem ipsum',
      price: +(Math.random() * 500).toFixed(0),
      photos: '',
      checkinTime: new Date('1-Nov-2022'),
      checkoutTime: new Date('3-Nov-2022'),
    };

    this.roomsService.addRoom(newRoom).subscribe((data) => (this.rooms = data));
  }

  updateRoom() {
    const updatedRoom = {
      roomNumber: 3,
      roomType: 'Deluxe',
      amentities: 'lorem ipsum',
      price: +(Math.random() * 500).toFixed(0),
      photos: '',
      checkinTime: new Date('1-Nov-2022'),
      checkoutTime: new Date('3-Nov-2022'),
    };
    this.roomsService
      .updateRoom(updatedRoom)
      .subscribe((data) => (this.rooms = data));
  }

  deleteRoom(rooms: IRoom[]) {
    this.rooms = rooms;
  }
}

import { Component, OnInit } from '@angular/core';

import { IRoomsData, IRoom } from '../interfaces';

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

  constructor() {}

  ngOnInit(): void {
    this.rooms = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amentities: 'lorem ipsum',
        price: 500,
        photos: '',
        checkinTime: new Date('2-Nov-2022'),
        checkoutTime: new Date('4-Nov-2022'),
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe',
        amentities: 'lorem ipsum',
        price: 400,
        photos: '',
        checkinTime: new Date('1-Nov-2022'),
        checkoutTime: new Date('5-Nov-2022'),
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe',
        amentities: 'lorem ipsum',
        price: 300,
        photos: '',
        checkinTime: new Date('1-Nov-2022'),
        checkoutTime: new Date('6-Nov-2022'),
      },
    ];
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
    this.rooms = [...this.rooms, newRoom];
  }
}

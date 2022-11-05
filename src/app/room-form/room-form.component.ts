import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRoom } from '../interfaces';
import { RoomsService } from '../services/rooms/rooms.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css'],
})
export class RoomFormComponent implements OnInit {
  room: IRoom = {
    roomNumber: 0,
    roomType: '',
    amentities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  };

  constructor(private readonly roomsService: RoomsService) {}

  ngOnInit(): void {}

  addRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      roomsForm.reset({
        roomNumber: 0,
        roomType: '',
        amentities: '',
        price: 0,
        photos: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
      });
    });
  }
}

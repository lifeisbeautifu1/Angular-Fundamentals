import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { IRoom } from '../interfaces';
import { RoomsService } from '../services/rooms/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnInit, OnChanges {
  @Input() rooms: IRoom[] = [];

  @Output() selectedRoom = new EventEmitter<IRoom>();

  @Output() deleteRoomEvent = new EventEmitter<IRoom[]>();

  constructor(private readonly roomsService: RoomsService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room: IRoom) {
    this.selectedRoom.emit(room);
  }

  deleteRoom(room: IRoom) {
    this.roomsService
      .deleteRoom(room)
      .subscribe((data) => this.deleteRoomEvent.emit(data));
  }
}

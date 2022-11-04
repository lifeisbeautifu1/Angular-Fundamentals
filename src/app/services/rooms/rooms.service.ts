import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoom } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private readonly http: HttpClient) {}

  getRooms() {
    return this.http.get<IRoom[]>('/api/rooms');
  }

  addRoom(room: IRoom) {
    return this.http.post<IRoom[]>('/api/rooms', room);
  }

  updateRoom(room: IRoom) {
    return this.http.put<IRoom[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(room: IRoom) {
    return this.http.delete<IRoom[]>(`/api/rooms/${room.roomNumber}`);
  }
}

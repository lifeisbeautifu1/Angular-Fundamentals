export interface IRoomsData {
  availableRooms?: number;
  totalRooms: number;
  bookedRooms: number;
}

export interface IRoom {
  roomNumber: number;
  roomType: string;
  amentities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}

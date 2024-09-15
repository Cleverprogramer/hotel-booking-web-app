import { Rooms } from "@prisma/client";
import { AuthorType } from "./Author";

export interface RoomsDataType {
  id: string;
  name: string;
  desc: string;
  featuredImage: string;
  galleryImages: string[];
  rooms: Rooms;
  price: number;
  bedrooms: number;
  baths: number;
  guests: number;
  stayInfo: string;
  saleOff: string;
  reviews: number;
  sizeInMeter: number;
  RoomCategory: {
    id: string;
    name: string;
  };
  roomCategoryId: string;
}

export type Room = {
  id: string;
  name: string;
  desc: string;
  stayInfo: string;
  featuredImage: string;
  galleryImages: string[];
  price: number;
  bedrooms: number;
  baths: number;
  guests: number;
  sizeInMeter: number;
  saleOff: string | null;
  reviews: number;
  roomCategoryId: string;
};

export type Booking = {
  id: string;
  guests: number;
  nights: number;
  checking: string;
  checkout: string;
  price: number;
  bookingCode: string;
  roomsId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  room: Room;
};

import { AuthorType } from "./Author";

export interface RoomsDataType {
  id: string;
  name: string;
  desc: string;
  featuredImage: string;
  galleryImages: string[];
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

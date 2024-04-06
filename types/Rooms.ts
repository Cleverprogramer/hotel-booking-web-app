import { AuthorType } from "./Author";

export interface RoomsDataType {
  id: number;
  name: string;
  desc: string;
  categoryName: string;
  featuredImage: string;
  galleryImages: string[];
  price: number;
  bedrooms: number;
  saleOff: string;
  reviews: number;
}

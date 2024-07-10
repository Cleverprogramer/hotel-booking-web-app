import { IUser } from "./User";

export interface IComments extends IUser {
  id: string;
  comment: string;
  createdAt: Date;
  ratingCount: number;
  username: string;
  approved: boolean;
  updatedAt: Date;
  error?: {
    error: string;
  };
  user: {
    id: string;
    email: string | null;
    name: string | null;
    gender: string | null;
    image: string | null;
    address: string | null;
    aboutYou: string | null;
    dateOfBrith: string | null;
    phoneNumber: string | null;
    username: string | null;
    password: string | null;
  };
}

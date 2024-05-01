export interface IComments {
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
}

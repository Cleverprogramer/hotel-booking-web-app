import { create } from "zustand";

interface IUseReview {
  ReviewNumber: number;
  SetReviewNumber: (number: number) => void;
}

export const useReview = create<IUseReview>()((set) => ({
  ReviewNumber: 0,
  SetReviewNumber: (number) =>
    set((state) => ({
      ReviewNumber: number,
    })),
}));

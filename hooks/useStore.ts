import { create } from "zustand";

type useStoreProps = {
  CheckIn: string;
  CheckOut: string;
  SetCheckIn: (date: string | undefined) => void;
  SetCheckOut: (date: string | undefined) => void;
  Guests: number;
  SetGuests: (guest: number) => void;
};

export const useDateStore = create<useStoreProps>()((set) => ({
  CheckIn: "",
  CheckOut: "",
  Guests: 0,
  SetCheckIn: (date) =>
    set((state) => ({
      CheckIn: date,
    })),
  SetCheckOut: (date) =>
    set((state) => ({
      CheckOut: date,
    })),
  SetGuests: (guest) =>
    set((state) => ({
      Guests: guest,
    })),
}));

import { create } from "zustand";

type useCustomerNightProps = {
  CustomerNight: number;
  SetCustomerNight: (night: number) => void;
};

export const useCustomerNight = create<useCustomerNightProps>()((set) => ({
  CustomerNight: 0,
  SetCustomerNight: (night) =>
    set((state) => ({
      CustomerNight: night,
    })),
}));

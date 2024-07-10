import { create } from "zustand";

interface IUseProfileImage {
  ProfileImage: string | null;
  SetProfileImage: (image: string) => void;
}

export const useProfileImage = create<IUseProfileImage>()((set) => ({
  ProfileImage: null,
  SetProfileImage: (image) =>
    set((state) => ({
      ProfileImage: image,
    })),
}));

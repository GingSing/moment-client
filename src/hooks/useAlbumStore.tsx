import { create } from "zustand";
import { Image } from "../app_types";

interface AlbumStore {
  images: Image[];
  setImages: (images: Image[]) => void;
}

const useAlbumStore = create<AlbumStore>((set) => ({
  images: [],
  setImages: () => {
    set({ images: [] });
  },
}));

export default useAlbumStore;

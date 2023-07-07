import { create } from 'zustand';

// Extend this store if you need!

export interface AppStore {
  isOpenModalMenu: boolean;
  setOpenModalMenu: (isOpenModalMenu: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isOpenModalMenu: false,
  setOpenModalMenu: (isOpenModalMenu: boolean) =>
    set((s) => ({ ...s, isOpenModalMenu })),
}));

import { atom } from 'recoil';

export const drawerCategoriesAtom = atom<{ isOpen: boolean }>({
  key: 'drawerCategoriesAtom',
  default: {
    isOpen: false,
  },
});

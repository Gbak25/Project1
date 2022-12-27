import { CategoryTypes } from '@infrastructure/data/enums';
import { atom } from 'recoil';

export const navMenuAtom = atom({
  key: 'navMenuAtom',
  default: Object.values(CategoryTypes),
});

export const activeNavMenuAtom = atom<string | undefined>({
  key: 'activeNavMenuAtom',
  default: undefined,
});

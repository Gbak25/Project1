import { atom } from 'recoil';

export const activeNavMenuAtom = atom<string | undefined>({
  key: 'activeNavMenuAtom',
  default: undefined,
});

import { atom } from 'recoil';

export const navMenuAtom = atom({
  key: 'navMenuAtom',
  default: ['ENT', 'Orthopedics', 'Obstetrics', 'Surgeon'],
});

export const activeNavMenuAtom = atom<string | undefined>({
  key: 'activeNavMenuAtom',
  default: undefined,
});

import { atom } from 'recoil';

export const navMenuAtom = atom({
  key: 'navMenuAtom',
  default: ['ENT', 'Orthopedics', 'Obstetrics', 'Surgeon'],
});

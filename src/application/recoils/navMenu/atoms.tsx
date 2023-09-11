import { atom } from 'recoil';

export const searchKeywordAtom = atom<string | undefined>({
  key: 'searchKeywordAtom',
  default: undefined,
});

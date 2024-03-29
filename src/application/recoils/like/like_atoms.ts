import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const likedVideoIdsAtom = atom<string[]>({
  key: 'likedVideoIdsAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

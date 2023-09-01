import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const followedChannelIdsAtom = atom<string[]>({
  key: 'followedChannelIdsAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

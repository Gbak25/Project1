import type { QnADTO } from '@infrastructure/data/models';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const localQnAsAtom = atom<QnADTO[]>({
  key: 'localQnAsAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

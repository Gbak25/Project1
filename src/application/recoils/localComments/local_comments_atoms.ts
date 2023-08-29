import type { CommentDTO } from '@infrastructure/data/models';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const localCommentsAtom = atom<CommentDTO[]>({
  key: 'localCommentsAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

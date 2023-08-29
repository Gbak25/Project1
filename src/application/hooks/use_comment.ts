import { channelData, commentData } from '@infrastructure/data/data';
import last from 'lodash/last';
import { useSetRecoilState } from 'recoil';
import { localCommentsAtom } from '../recoils/localComments/local_comments_atoms';

export function useComment(): {
  createComment: (videoId: string, content: string) => void;
} {
  const setLocalComments = useSetRecoilState(localCommentsAtom);

  return {
    createComment: (videoId: string, content: string) =>
      setLocalComments((prev) => {
        return [
          ...prev,
          {
            id: last(prev) ? last(prev)!.id + 1 : last(commentData)!.id + 1,
            videoId,
            content,
            uploader: channelData.find((c) => c.id === '1')!,
          },
        ];
      }),
  };
}

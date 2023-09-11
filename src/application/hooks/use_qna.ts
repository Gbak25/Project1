import { channelData, qnaData } from '@infrastructure/data/data';
import last from 'lodash/last';
import { useSetRecoilState } from 'recoil';
import { localQnAsAtom } from '../recoils/localQnAs/local_qnas_atoms';

export function useQnA(): {
  createQnA: (videoId: string, content: string) => void;
} {
  const setLocalQnAs = useSetRecoilState(localQnAsAtom);

  return {
    createQnA: (channelId: string, content: string) =>
      setLocalQnAs((prev) => {
        return [
          ...prev,
          {
            id: last(prev) ? last(prev)!.id + 1 : last(qnaData)!.id + 1,
            channelId,
            content,
            uploader: channelData.find((c) => c.id === '1')!,
            replies: [],
          },
        ];
      }),
  };
}

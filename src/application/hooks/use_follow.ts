import { useSetRecoilState } from 'recoil';
import { followedChannelIdsAtom } from '../recoils/followed/followed_atoms';

export function useFollow(): {
  toggleFollow: (videoId: string) => void;
} {
  const setFollowedChannelIds = useSetRecoilState(followedChannelIdsAtom);

  return {
    toggleFollow: (videoId: string) =>
      setFollowedChannelIds((prev) => {
        const followed = prev.find((l) => l === videoId);
        return !followed
          ? [...prev, videoId]
          : [...prev.filter((l) => l !== videoId)];
      }),
  };
}

import { useSetRecoilState } from 'recoil';
import { likedVideoIdsAtom } from '../recoils/like/like_atoms';

export function useLike(): {
  toggleLike: (videoId: string) => void;
} {
  const setLikedVideoIds = useSetRecoilState(likedVideoIdsAtom);

  return {
    toggleLike: (videoId: string) =>
      setLikedVideoIds((prev) => {
        const liked = prev.find((l) => l === videoId);
        return !liked
          ? {
              ...prev,
              videoId,
            }
          : {
              ...prev.filter((l) => l !== videoId),
            };
      }),
  };
}

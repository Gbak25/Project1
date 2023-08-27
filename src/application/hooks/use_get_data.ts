import { channelData, videoData } from '@infrastructure/data/data';
import { CategoryTypes } from '@infrastructure/data/enums';
import type { ChannelDTO, VideoDTO } from '@infrastructure/data/models';
import { useRecoilValue } from 'recoil';
import { likedVideoIdsAtom } from '../recoils/like/like_atoms';

type VideoType = Partial<VideoDTO> & { isLiked: boolean };
export function useGetVideos(): {
  data: VideoType[];
} {
  const likedVideoIds = useRecoilValue(likedVideoIdsAtom);

  return {
    data: videoData.map((c) => {
      return {
        ...c,
        isLiked: likedVideoIds.includes(c.id),
      };
    }),
  };
}

export function useGetVideoById(videoId: string): {
  data: VideoType | undefined;
} {
  const likedVideoIds = useRecoilValue(likedVideoIdsAtom);

  const foundVideo = videoData.find((v) => v.id === videoId);

  return {
    data: foundVideo
      ? {
          ...foundVideo,
          isLiked: likedVideoIds.includes(videoId),
        }
      : undefined,
  };
}

export function useGetChannelByid(channelId: string): {
  data: ChannelDTO | undefined;
} {
  return {
    data: channelData.find((c) => c.id === channelId),
  };
}

export function useGetCategories(): {
  data: string[];
} {
  return {
    data: Object.values(CategoryTypes),
  };
}

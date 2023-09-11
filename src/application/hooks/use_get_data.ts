import {
  channelData,
  commentData,
  qnaData,
  videoData,
} from '@infrastructure/data/data';
import { CategoryTypes } from '@infrastructure/data/enums';
import type {
  ChannelDTO,
  CommentDTO,
  QnADTO,
  VideoDTO,
} from '@infrastructure/data/models';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { likedVideoIdsAtom } from '../recoils/like/like_atoms';
import { localCommentsAtom } from '../recoils/localComments/local_comments_atoms';
import { localQnAsAtom } from '../recoils/localQnAs/local_qnas_atoms';

export type VideoType = Required<VideoDTO> & { isLiked: boolean };
export function useGetVideos(): {
  data: VideoType[];
  dataNew: VideoType[];
  dataPopular: VideoType[];
} {
  const likedVideoIds = useRecoilValue(likedVideoIdsAtom);

  const realData = useMemo(() => {
    return videoData.map((c) => {
      return {
        ...c,
        isLiked: likedVideoIds.includes(c.id),
      };
    });
  }, []);

  return {
    data: realData,
    dataNew: realData.filter((d) => d.isNew),
    dataPopular: realData.filter((d) => d.isPopular),
  };
}

export function useGetVideosByChannelId(channelId: string): {
  data: VideoDTO[];
} {
  return {
    data: videoData.filter((v) => v.uploader.id === channelId),
  };
}

export function useGetVideosByCategory(category: string): {
  data: VideoDTO[];
} {
  return {
    // @ts-ignore
    data: videoData.filter((v) => v.category.includes(category)),
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

export function useGetChannelById(channelId: string): {
  data: ChannelDTO | undefined;
} {
  return {
    data: channelData.find((c) => c.id === channelId),
  };
}

export function useGetCommentsByVideoId(videoId: string): {
  data: CommentDTO[];
} {
  const localComments = useRecoilValue(localCommentsAtom);

  return {
    data: [
      ...commentData.filter((d) => d.videoId === videoId),
      ...localComments.filter((d) => d.videoId === videoId),
    ],
  };
}

export function useGetQnAsByChannelId(channelId: string): {
  data: QnADTO[];
} {
  const localQnAs = useRecoilValue(localQnAsAtom);

  return {
    data: [
      ...qnaData.filter((d) => d.channelId === channelId),
      ...localQnAs.filter((d) => d.channelId === channelId),
    ],
  };
}

export function useGetCategories(): {
  data: string[];
} {
  return {
    data: Object.values(CategoryTypes),
  };
}

import type { VideoType } from '@application/hooks/use_get_data';
import {
  useGetCommentsByVideoId,
  useGetVideosByChannelId,
} from '@application/hooks/use_get_data';
import {
  DownloadIcon,
  HeartFilledIcon,
  HeartIcon,
  Share1Icon,
} from '@radix-ui/react-icons';
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  ScrollArea,
} from '@radix-ui/themes';
import Link from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useCheckDevice } from '../../../application/hooks/use_check_device';
import { useLike } from '../../../application/hooks/use_like';
import { palette } from '../../../application/styles/colors';
import { CommentWrapper } from '../../components/organisms/commentWrapper';
import { RecommendedWrapper } from '../../components/organisms/recommendedWrapper';
import { VideoDetailTabs } from '../../components/organisms/videoDetailTabs';
import { RecommendedContainer, VideoWrapper } from './styles';

type VideoDetailProps = {
  videoId: string;
  data: VideoType;
};

export function VideoDetailContent(props: VideoDetailProps): JSX.Element {
  const { videoId, data } = props;
  const { data: recommends } = useGetVideosByChannelId(data.uploader.id);
  const { data: commentData } = useGetCommentsByVideoId(videoId);
  const commentEndRef = useRef<HTMLDivElement | null>(null);
  const { toggleLike } = useLike();
  const isMobile = useCheckDevice();

  useEffect(() => {
    commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commentData]);

  const renderCommentWrapper = useMemo((): JSX.Element | undefined => {
    if (!isMobile) {
      return (
        <>
          <p className="typo-headline-s mt-42 mb-12">Review</p>
          <CommentWrapper videoId={videoId} commentData={commentData} />
        </>
      );
    }
    return undefined;
  }, [isMobile, videoId, commentData]);

  const renderRecommendedWrapper = useMemo((): JSX.Element | undefined => {
    if (!isMobile) {
      return (
        <RecommendedContainer>
          <p className="typo-title-m mb-16">Recommended Videos</p>
          <RecommendedWrapper recommends={recommends} />
        </RecommendedContainer>
      );
    }
    return undefined;
  }, [isMobile, recommends, commentData]);

  const renderTabs = useMemo((): JSX.Element | undefined => {
    if (isMobile) {
      return (
        <VideoDetailTabs
          recommends={recommends}
          commentData={commentData}
          videoId={videoId}
        />
      );
    }
    return undefined;
  }, [isMobile, recommends, commentData, videoId]);

  return (
    <Container mt="7" px="4">
      <ScrollArea>
        <Flex wrap="wrap" justify="between" gap="1">
          <VideoWrapper>
            <Box className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                controls
                url={data.videoUrl}
              />
            </Box>
            <p className="typo-headline-s mt-26 shorten-sentence">
              {data.title}
            </p>
            <Flex justify="between" align="center" my="4">
              <Link href={`/channel/${data.uploader.id}`}>
                <h6 className="typo-body-l">{data.uploader.name}</h6>
              </Link>
              <Flex gap="3">
                <Button
                  style={{
                    color: palette.neutral._8,
                    backgroundColor: palette.neutral._2,
                    cursor: 'pointer',
                    borderRadius: '50px',
                  }}
                  onClick={(): void => {
                    toggleLike(data.id);
                  }}>
                  {data.isLiked ? (
                    <HeartFilledIcon
                      style={{
                        color: palette.neutral._8,
                      }}
                      width="18"
                      height="18"
                    />
                  ) : (
                    <HeartIcon
                      style={{
                        color: palette.neutral._8,
                      }}
                      width="18"
                      height="18"
                    />
                  )}
                  {data.likes}
                </Button>
                <IconButton
                  style={{
                    backgroundColor: palette.neutral._2,
                    cursor: 'pointer',
                    borderRadius: '100%',
                  }}
                  onClick={(): void => {
                    window.alert('video was downloaded');
                  }}>
                  <DownloadIcon
                    style={{ color: palette.neutral._8 }}
                    width="18"
                    height="18"
                  />
                </IconButton>
                <IconButton
                  style={{
                    backgroundColor: palette.neutral._2,
                    cursor: 'pointer',
                    borderRadius: '100%',
                  }}
                  onClick={(): void => {
                    navigator.clipboard.writeText(data.videoUrl);
                    window.alert('URL of video was coppied');
                  }}>
                  <Share1Icon
                    style={{ color: palette.neutral._8 }}
                    width="18"
                    height="18"
                  />
                </IconButton>
              </Flex>
            </Flex>
            <div
              style={{ height: 1, width: '100%', backgroundColor: '#000' }}
            />
            <p className="typo-body-m mt-12 shorten-sentence">
              {data.description}
            </p>
            {renderCommentWrapper}
          </VideoWrapper>
          {renderRecommendedWrapper}
        </Flex>
        {renderTabs}
      </ScrollArea>
    </Container>
  );
}

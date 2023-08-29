import {
  useGetCommentsByVideoId,
  useGetVideoById,
} from '@application/hooks/use_get_data';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { CommentInput } from '../../components/organisms/commentInput';
import { CommentList } from '../../components/organisms/commentList';
import { RecommendedWrapper, VideoWrapper } from './styles';

type VideoDetailProps = {
  videoId: string;
};

export function VideoDetail(props: VideoDetailProps): JSX.Element {
  const { videoId } = props;
  const { data } = useGetVideoById(videoId);
  const { data: commentData } = useGetCommentsByVideoId(videoId);
  const commentEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commentData]);

  if (!data) {
    return <p>No Content</p>;
  }
  return (
    <ScrollArea>
      <Flex wrap="wrap">
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
          <CommentInput videoId={data.id} />
          <CommentList>
            {commentData.map((d) => {
              return (
                <CommentList.Item
                  key={d.id}
                  name={d.uploader.name}
                  content={d.content}
                />
              );
            })}
          </CommentList>
          <div ref={commentEndRef} />
        </VideoWrapper>
        <RecommendedWrapper>
          Recommended Videos
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </RecommendedWrapper>
      </Flex>
    </ScrollArea>
  );
}

import { useGetVideoById } from '@application/hooks/use_get_data';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import ReactPlayer from 'react-player';

type VideoDetailProps = {
  videoId: string;
};

export function VideoDetail(props: VideoDetailProps): JSX.Element {
  const { videoId } = props;
  const { data } = useGetVideoById(videoId);

  if (!data) {
    return <p>No Content</p>;
  }
  return (
    <ScrollArea>
      <Flex>
        <Box position="relative" style={{ width: '80%' }}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              controls
              url={data.videoUrl}
            />
          </Box>
          <Box>
            <Box height="9" style={{ background: 'black' }} />
            <Box height="9" style={{ background: 'black' }} />
            <Box height="9" style={{ background: 'black' }} />
            <Box height="9" style={{ background: 'black' }} />
            <Box height="9" style={{ background: 'black' }} />
            <Box height="9" style={{ background: 'black' }} />
          </Box>
        </Box>
        <Box position="relative" style={{ width: '20%' }}>
          Recommended Videos
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </Box>
      </Flex>
    </ScrollArea>
  );
}

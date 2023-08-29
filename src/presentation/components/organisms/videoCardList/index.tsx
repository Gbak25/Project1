import { Flex } from '@radix-ui/themes';
import { VideoCard } from './card';
import type { VideoListProps } from './types';

export function VideoList(props: VideoListProps): JSX.Element {
  const { children } = props;

  return (
    <Flex gap="4" wrap="wrap">
      {children}
    </Flex>
  );
}

VideoList.Item = VideoCard;

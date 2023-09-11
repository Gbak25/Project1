import { Flex } from '@radix-ui/themes';
import { RecommendCard } from './card';
import type { VideoListProps } from './types';

export function RecommendList(props: VideoListProps): JSX.Element {
  const { children } = props;

  return (
    <Flex gap="4" direction="column">
      {children}
    </Flex>
  );
}

RecommendList.Item = RecommendCard;

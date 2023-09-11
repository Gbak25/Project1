import { Flex } from '@radix-ui/themes';
import { CommentItem } from './item';
import type { CommentListProps } from './types';

export function CommentList(props: CommentListProps): JSX.Element {
  const { children } = props;

  return (
    <Flex direction="column" mt="6">
      {children}
    </Flex>
  );
}

CommentList.Item = CommentItem;

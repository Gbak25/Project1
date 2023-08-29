import { Avatar, Flex } from '@radix-ui/themes';
import type { CommentItemProps } from './types';

export function CommentItem(props: CommentItemProps): JSX.Element {
  const { content, name } = props;

  return (
    <Flex mb="4">
      <Avatar fallback={name.substring(0, 3)} />
      <Flex direction="column">
        <p>{name}</p>
        <p>{content}</p>
      </Flex>
    </Flex>
  );
}

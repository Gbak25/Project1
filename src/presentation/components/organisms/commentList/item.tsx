import { Avatar, Flex } from '@radix-ui/themes';
import { palette } from '../../../../application/styles/colors';
import type { CommentItemProps } from './types';

export function CommentItem(props: CommentItemProps): JSX.Element {
  const { content, name, replies } = props;

  return (
    <>
      <Flex mb="4" align="center" p="2">
        <Avatar fallback={name.substring(0, 2)} mr="3" />
        <Flex direction="column">
          <p className="typo-body-m">{name}</p>
          <p>{content}</p>
        </Flex>
      </Flex>
      {replies.length > 0 && (
        <Flex
          style={{ backgroundColor: palette.neutral._2 }}
          direction="column"
          mb="4"
          p="2">
          <Flex align="center">
            <Avatar fallback={replies[0]!.name.substring(0, 2)} mr="3" />
            <Flex direction="column">
              <p className="typo-body-m">{replies[0]!.name}</p>
              <p>{replies[0]!.content}</p>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}

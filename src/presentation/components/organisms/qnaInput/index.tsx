import { useQnA } from '@application/hooks/use_qna';
import { palette } from '@application/styles/colors';
import { Flex, TextField } from '@radix-ui/themes';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';
import { MButton } from '../../atoms/mButton';
import type { QnAInputProps } from './types';

export function QnAInput(props: QnAInputProps): JSX.Element {
  const { channelId, onSaveSuccess } = props;
  const { createQnA } = useQnA();
  const [content, setContent] = useState<string>('');

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setContent(e.target.value);
    },
    [],
  );

  const onSaveClick = useCallback((): void => {
    if (!content) {
      return;
    }

    createQnA(channelId, content);
    setContent('');

    if (onSaveSuccess) {
      onSaveSuccess();
    }
  }, [content]);

  const onCancelClick = useCallback((): void => {
    setContent('');
  }, []);

  return (
    <Flex direction="column">
      <TextField.Input
        value={content}
        onChange={onInputChange}
        placeholder="text your question"
      />
      <Flex justify="end" gap="3" mt="4">
        <MButton
          label="Cancel"
          onClick={onCancelClick}
          backgroundColor={palette.neutral._2}
          styles={{ borderRadius: '99px', color: '#000' }}
        />
        <MButton
          label="Comments"
          onClick={onSaveClick}
          backgroundColor={palette.primary._6}
          styles={{ borderRadius: '99px' }}
        />
      </Flex>
    </Flex>
  );
}

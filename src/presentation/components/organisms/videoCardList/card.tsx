import { Box, Flex } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { palette } from '../../../../application/styles/colors';
import { Chip } from '../../atoms/chip';
import {
  VideoCardImage,
  VideoCardImageWrapper,
  VideoCardWrapper,
} from './styles';
import type { VideoCardProps } from './types';

export function VideoCard(props: VideoCardProps): JSX.Element {
  const { category, videoId, imageUrl, title, uploadedAt } = props;
  const router = useRouter();

  const onWrapperClick = useCallback((): void => {
    router.push(`/detail/${videoId}`);
  }, []);

  return (
    <VideoCardWrapper onClick={onWrapperClick}>
      <VideoCardImageWrapper>
        <VideoCardImage src={imageUrl} />
        <Chip label="BEST" absolute={{ right: 20, bottom: -16 }} />
      </VideoCardImageWrapper>
      <Box px="5" py="4">
        <Chip label={category} color={palette.primary._6} />
        <p className="mt-16 mb-16 shorten-sentence">{title}</p>
        <Flex gap="1">
          <img alt="calendar" src="/Calendar.svg" />
          <p className="typo-body-s" style={{ color: palette.neutral._5 }}>
            {dayjs(uploadedAt).format('YYYY.MM.DD')}
          </p>
        </Flex>
      </Box>
    </VideoCardWrapper>
  );
}

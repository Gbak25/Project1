import { Flex } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { palette } from '../../../../application/styles/colors';
import { Chip } from '../../atoms/chip';
import { VideoCardImage } from './styles';
import type { VideoCardProps } from './types';

export function RecommendCard(props: VideoCardProps): JSX.Element {
  const { category, videoId, imageUrl, title, uploaderName, uploadedAt } =
    props;
  const router = useRouter();

  const onWrapperClick = useCallback((): void => {
    router.push(`/detail/${videoId}`);
  }, []);

  return (
    <Flex
      onClick={onWrapperClick}
      style={{ cursor: 'pointer' }}
      gap="4"
      align="center">
      <VideoCardImage src={imageUrl} />
      <Flex direction="column" gap="3">
        <div style={{ width: '70%' }}>
          <Chip label={category} color={palette.primary._6} />
        </div>
        <p className="typo-label-m shorten-sentence">{title}</p>
        <div className="typo-label-m" style={{ color: palette.neutral._5 }}>
          <p>{uploaderName}</p>
          <Flex gap="1">
            <img alt="calendar" src="/Calendar.svg" />
            <p>{dayjs(uploadedAt).format('YYYY.MM.DD')}</p>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
}

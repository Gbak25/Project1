import { useFollow } from '@application/hooks/use_follow';
import { followedChannelIdsAtom } from '@application/recoils/followed/followed_atoms';
import { palette } from '@application/styles/colors';
import { useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { MButton } from '../../atoms/mButton';
import type { FollowButtonProps } from './types';

export function FollowButton(props: FollowButtonProps): JSX.Element {
  const { channelId } = props;
  const followedChannelIds = useRecoilValue(followedChannelIdsAtom);
  const { toggleFollow } = useFollow();

  const isFollowed = useMemo((): boolean => {
    return followedChannelIds.find((d) => d === channelId) !== undefined;
  }, [followedChannelIds]);

  const styles = useMemo(() => {
    if (!isFollowed) {
      return {
        border: '1px solid #4D5358',
        color: '#4D5358',
        borderRadius: '99px',
        padding: '24px 8px',
      };
    }
    return {
      border: 'none',
      color: 'white',
      borderRadius: '99px',
      padding: '24px 8px',
    };
  }, [isFollowed]);

  const onSubscribeClick = useCallback((): void => {
    toggleFollow(channelId);
  }, []);

  return (
    <MButton
      label={isFollowed ? 'Subscribed' : 'Subscribe'}
      backgroundColor={isFollowed ? palette.primary._6 : 'transparent'}
      onClick={onSubscribeClick}
      styles={styles}
    />
  );
}

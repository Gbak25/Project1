import { allData } from '@infrastructure/data/data';
import type { ProfileModel } from '@infrastructure/data/models';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';

type ProfileDetailProps = {
  profileId: string;
};

function ProfileDetail(props: ProfileDetailProps): JSX.Element {
  const { profileId } = props;

  const profile = useMemo((): ProfileModel | undefined => {
    return allData.find((d) => d.profile.id === profileId)?.profile;
  }, [profileId]);

  if (!profile) {
    return <p>No profile found</p>;
  }
  return <div>{profile.name}</div>;
}

export default memo(ProfileDetail, isEqual);

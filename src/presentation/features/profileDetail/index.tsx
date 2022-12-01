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
  return (
    <div>
      {profile.name}
      <a
        href={`https://www.google.com/maps/place/Cheongmac+Hospital/data=!4m5!3m4!1s0x0:0x82e362f3200ba929!8m2!3d${profile.hospital.latitude}!4d${profile.hospital.longitude}`}
        rel="noreferrer noopener"
        target="_blank">
        Go To Maps
      </a>
    </div>
  );
}

export default memo(ProfileDetail, isEqual);

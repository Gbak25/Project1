import { allData } from '@infrastructure/data/data';
import type { ProfileModel } from '@infrastructure/data/models';
import dayjs from 'dayjs';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import style from './style.module.scss';

type ProfileDetailProps = {
  profileId: string;
};

function ProfileDetail(props: ProfileDetailProps): JSX.Element {
  const { profileId } = props;

  const profile = useMemo((): ProfileModel | undefined => {
    return allData.find((d) => d.profile.id === profileId)?.profile;
  }, [profileId]);

  const onButtonClick = (): void => {
    alert(`You followed ${profile?.name}`);
  };

  if (!profile) {
    return <p>No profile found</p>;
  }
  return (
    <div>
      <div className={style.container}>
        <img className={style.profile} src={profile.profileUrl} />
        <div className={style.flex}>
          <div>
            <p className={style.font}>{profile.name}</p>
            <button type="button" onClick={onButtonClick}>
              Follow
            </button>
          </div>
          <p> Profession: {`(${profile.categories.join(', ')})`}</p>
          <a
            href={`http://maps.google.com/maps?q=${profile.hospital.latitude},${profile.hospital.longitude}`}
            rel="noreferrer noopener"
            target="_blank">
            Go To Maps
          </a>
          Follower:
          {profile.followers}
        </div>
      </div>
      <div>
        <p className={style.font2}> Uploaded Videos </p>

        <ul className={style.videolist}>
          {allData
            .filter((d) => d.profile.id === profileId)
            ?.map((d) => {
              return (
                <li key={d.id} className={style.newitemcontainer}>
                  <img src={d.thumbnailPath} />
                  <div className={style.mrspace}>
                    <div>
                      <p className={style.title2}>{d.title}</p>
                      <p className={style.name}>{d.uploaderName}</p>
                    </div>
                    <p className={style.date}>
                      {dayjs(d.createdAt).format('YYYY-MM-DD')}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default memo(ProfileDetail, isEqual);

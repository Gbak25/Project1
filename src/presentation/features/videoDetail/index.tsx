import { allData, commentData, newData } from '@infrastructure/data/data';
import type { VideoItemModel } from '@infrastructure/data/models';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import ReactPlayer from 'react-player';
import style from './style.video.module.scss';

type VIdeoDetailProps = {
  videoId: string;
};

function VIdeoDetail(props: VIdeoDetailProps): JSX.Element {
  const { videoId } = props;

  const video = useMemo((): VideoItemModel | undefined => {
    return allData.find((d) => d.id === videoId);
  }, [videoId]);

  if (!video) {
    return <p>No video found</p>;
  }
  return (
    <div>
      <ReactPlayer
        url={video.videoUrl}
        controls={false}
        width="100%"
        height={600}
      />
      <div className={style.divider}>
        <div className={style.commentary}>
          <div className={style.profilecontainer}>
            <div>
              <img className={style.profiles} src={video.profile.profileUrl} />{' '}
              {video.profile.name}{' '}
            </div>
            <div className={style.displayer}>
              <img src="/heart.svg" />
              <img src="/save.svg" />
              <img src="/more.svg" />
            </div>
          </div>
          <div className={style.dont}>
            <p className={style.simple}> Title </p>
            <p className={style.divider2}>
              {' '}
              This video is a discussion made over the clinical usage of
              A-deltafiber{' '}
            </p>
            <div>
              <ul>
                {commentData.map((d) => {
                  return (
                    <li key={d.id} className={style.forlist}>
                      {' '}
                      <div>
                        <Link href={`/profile/${d.profile.id}`}>
                          <img src={d.profile.profileUrl} />
                        </Link>
                        {d.profile.name}
                      </div>
                      {d.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={style.list}>
          {' '}
          Recommended videos
          <ul className={style.column}>
            {newData.map((d) => {
              return (
                <Link key={d.id} href={`/detail/${d.id}`}>
                  <li className={style.newitemcontainer}>
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
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(VIdeoDetail, isEqual);

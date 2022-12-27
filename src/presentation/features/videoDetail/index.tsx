import { allData, commentData, newData } from '@infrastructure/data/data';
import type { VideoItemModel } from '@infrastructure/data/models';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import ReactPlayer from 'react-player';
import style from './style.video.module.scss';

type VIdeoDetailProps = {
  videoId: string;
};

function VIdeoDetail(props: VIdeoDetailProps): JSX.Element {
  const { videoId } = props;
  const [heartClicked, setHeartClicked] = useState(false);

  const video = useMemo((): VideoItemModel | undefined => {
    return allData.find((d) => d.id === videoId);
  }, [videoId]);

  const onLikeClick = (): void => {
    alert(`You Liked ${video?.profile.name}`);
  };

  const onSaveClick = (): void => {
    alert(`You've saved ${video?.profile.name}'s video`);
  };

  const onDownloadClick = (): void => {
    alert(`You've downloaded ${video?.profile.name}'s video`);
  };

  const onOthersClick = (): void => {
    alert(`Others`);
  };

  if (!video) {
    return <p>No video found</p>;
  }
  return (
    <div className={style.everything}>
      <div className={style.videodetail}>
        <ReactPlayer
          url={video.videoUrl}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className={style.divider}>
        <div className={style.commentary}>
          <div className={style.profilecontainer}>
            <Link href={`/profile/${video.profile.id}`}>
              <img className={style.profiles} src={video.profile.profileUrl} />{' '}
              {video.profile.name}{' '}
            </Link>
            <div className={style.displayer}>
              <img
                role="presentation"
                alt="heart"
                src={heartClicked ? '/H.svg' : '/heart.svg'}
                onClick={(): void => setHeartClicked((prev) => !prev)}
              />
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
            <div className={style.download}>
              <div role="presentation" onClick={onLikeClick}>
                Like
              </div>
              <div role="presentation" onClick={onSaveClick}>
                Save
              </div>
              <div role="presentation" onClick={onDownloadClick}>
                Download
              </div>
              <div role="presentation" onClick={onOthersClick}>
                Others
              </div>
            </div>
            <div className={style.nocomment}>
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
          <p className={style.nana}>Recommended Video</p>
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

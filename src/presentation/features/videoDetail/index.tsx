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
    alert(
      `Save is not supported yet. You can't save ${video?.profile.name}'s video`,
    );
  };

  const onDownloadClick = (): void => {
    alert(
      `Download is not supported yet. You can't download ${video?.profile.name}'s video.`,
    );
  };

  const onOthersClick = (): void => {
    alert(`Video Share is not supprted yet`);
  };

  if (!video) {
    return <p>No video found</p>;
  }
  return (
    <div className={style.everything}>
      <div className={style.videodetail}>
        <ReactPlayer url={video.videoUrl} controls width="100%" height="100%" />
      </div>
      <div className={style.divider}>
        <div className={style.commentary}>
          <div className={style.profilecontainer}>
            <Link href={`/profile/${video.profile.id}`}>
              <img className={style.profiles} src={video.profile.profileUrl} />{' '}
              <span>{video.profile.name}</span>
            </Link>
            <div className={style.displayer}>
              <img
                role="presentation"
                alt="heart"
                src={heartClicked ? '/H.svg' : '/heart.svg'}
                onClick={(): void => setHeartClicked((prev) => !prev)}
              />
              <img
                alt="icon"
                role="presentation"
                src="/save.svg"
                onClick={onDownloadClick}
              />
              <img
                alt="icon"
                role="presentation"
                src="/more.svg"
                onClick={onOthersClick}
              />
            </div>
          </div>
          <div className={style.dont}>
            <p className={style.simple}>{video.title}</p>
            <p className={style.divider2}> {video.description} </p>
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
                        <span>{d.profile.name}</span>
                      </div>
                      <p className={style.forDesc}>{d.text}</p>
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

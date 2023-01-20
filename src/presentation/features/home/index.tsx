/* eslint-disable no-param-reassign */
import { useCheckDevice } from '@application/hooks/use_check_device';
import { activeNavMenuAtom } from '@application/recoils/navMenu/atoms';
import { mostViewdData, newData } from '@infrastructure/data/data';
import type { VideoItemModel } from '@infrastructure/data/models';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';
import styles from './style.module.scss';

const hero = [
  {
    id: 1,
    imagePath:
      'https://montclairradiology.com/wp-content/uploads/2021/06/montclair-radiology-_6CA0079-2.jpg',
  },
  {
    id: 2,
    imagePath:
      'https://mblogthumb-phinf.pstatic.net/20140915_243/kahp_blog_1410767126989PDd0y_JPEG/359703_71109_488.jpg?type=w2',
  },
  {
    id: 3,
    imagePath: '/R3.png',
  },
];

function Home(): JSX.Element {
  const isMobile = useCheckDevice();
  const activeMenu = useRecoilValue(activeNavMenuAtom);
  const [activeId, setActiveId] = useState(1);
  const [showAd, setShowAd] = useState(true);

  const mostViewDynamicData = useMemo((): VideoItemModel[] => {
    if (isMobile && activeMenu === "What's new") {
      return newData;
    }

    return mostViewdData;
  }, [isMobile, activeMenu]);

  const onCloseClick = (): void => {
    setShowAd(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.herocontainer} ${styles.testcolor}`}
        style={{
          backgroundImage: `url(${
            hero.find((h) => h.id === activeId)?.imagePath
          })`,
        }}>
        <img
          role="presentation"
          alt="arrowleft"
          src="ic_arrow_left.svg"
          onClick={(): void =>
            setActiveId((prev) => {
              return prev < 2 ? prev : (prev -= 1);
            })
          }
        />
        <div className={styles.Group7}>
          {hero.map((h) => {
            return (
              <img
                alt="dot"
                key={h.id}
                src={h.id === activeId ? '/Yesfilledot.svg' : 'Nofilledot.svg'}
              />
            );
          })}
        </div>
        <img
          role="presentation"
          alt="arrow"
          src="ic_arrow_right.svg"
          onClick={(): void =>
            setActiveId((prev) => {
              return prev > 2 ? 1 : (prev += 1);
            })
          }
        />
      </div>

      <div className={styles.videocontainer}>
        <div className={styles.newcontainer}>
          <p className={styles.title}>What&apos;s New</p>
          <ul>
            {newData.map((d) => {
              return (
                <Link key={d.id} href={`/detail/${d.id}`}>
                  <li className={styles.newitemcontainer}>
                    <img alt="thumbnail" src={d.thumbnailPath} />
                    <p>{d.title}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={styles.mostcontainer}>
          <p className={styles.title}> Most Viewed</p>
          <ul>
            {mostViewDynamicData.map((d) => {
              return (
                <Link key={d.id} href={`/detail/${d.id}`}>
                  <li className={styles.newitemcontainer2}>
                    <img alt="thumbnail" src={d.thumbnailPath} />
                    <div className={styles.mrspace}>
                      <div>
                        <p className={styles.title2}>{d.title}</p>
                        <p className={styles.name}>{d.uploaderName}</p>
                      </div>
                      <p className={styles.date}>
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
      <div
        className={`${styles.adBanner} ${
          showAd ? undefined : styles.invisible
        }`}>
        <img className={styles.ad} alt="img_banner" src="/R1.png" />
        <img
          role="presentation"
          className={styles.close}
          alt="ic_close"
          src="/ic_close.svg"
          onClick={onCloseClick}
        />
      </div>
    </div>
  );
}

export default memo(Home, isEqual);

import { useCheckDevice } from '@application/hooks/use_check_device';
import { activeNavMenuAtom } from '@application/recoils/navMenu';
import { mostViewdData, newData } from '@infrastructure/data/data';
import type { VideoItemModel } from '@infrastructure/data/models';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';
import styles from './style.module.scss';

function Home(): JSX.Element {
  const isMobile = useCheckDevice();
  const activeMenu = useRecoilValue(activeNavMenuAtom);
  const [activeId, setActiveId] = useState(1);
  const [hero, setHero] = useState([
    {
      id: 1,
      imagePath: '/O.jpg',
    },
    {
      id: 2,
      imagePath: '/R2.png',
    },
    {
      id: 3,
      imagePath: '/R3.png',
    },
  ]);

  const mostViewDynamicData = useMemo((): VideoItemModel[] => {
    if (isMobile && activeMenu === "What's new") {
      return newData;
    }

    return mostViewdData;
  }, [isMobile, activeMenu]);

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
          src="leftarrow.svg"
          onClick={() =>
            setActiveId((prev) => {
              return prev < 2 ? prev : (prev -= 1);
            })
          }
        />
        <div className={styles.Group7}>
          {hero.map((h) => {
            return (
              <img
                key={h.id}
                src={h.id === activeId ? '/Yesfilledot.svg' : 'Nofilledot.svg'}
              />
            );
          })}
        </div>
        <img
          src="arrow.svg"
          onClick={() =>
            setActiveId((prev) => {
              return prev > 2 ? 1 : (prev += 1);
            })
          }
        />
      </div>

      <div className={styles.videocontainer}>
        <div className={styles.newcontainer}>
          <p className={styles.title}> What's New</p>
          <ul>
            {newData.map((d) => {
              return (
                <Link key={d.id} href={`/detail/${d.id}`}>
                  <li className={styles.newitemcontainer}>
                    <img src={d.thumbnailPath} />
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
                    <img src={d.thumbnailPath} />
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
    </div>
  );
}

export default memo(Home, isEqual);

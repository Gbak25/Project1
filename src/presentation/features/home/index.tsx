import { mostViewdData, newData } from '@infrastructure/data/data';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import styles from './style.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.herocontainer} ${styles.testcolor}`}>
        <img src="leftarrow.svg" />
        <img className={styles.Group7} src="Group 7.svg" />
        <img src="arrow.svg" />
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
            {mostViewdData.map((d) => {
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
